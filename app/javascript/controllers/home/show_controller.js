import {Controller} from "@hotwired/stimulus"

export default class extends Controller {

    static targets = ['loadButton', 'fileInput', 'fileLink']

    prevLoadButtonDisplayStyle = null;

    connect() {
        console.log('Controller `home--show` has been connected.')
    }

    onChangeFileInput(event) {
        const inputEl = event.target;
        _.isEmpty(inputEl.value) ? this.hideLoadButton() : this.showLoadButton();
    }

    onClickLoadButton(event) {
        event.preventDefault();
        this.uploadFile();
    }

    async uploadFile() {
        const upload = new ActiveStorage.DirectUpload(
            this.fileInputTarget.files[0],
            this.fileInputTarget.dataset.directUploadUrl,
            this.fileInputTarget.dataset.directUploadToken,
            this.fileInputTarget.dataset.directUploadAttachmentName,
        )

        await upload.create((error, blob) => {
            if (error) {
                console.log(error);
            } else {
                this._updateLink(blob.filename, `https://storage.cloud.google.com/mikhiuk-file-storage/${blob.key}`);
                this.fileInputTarget.disabled = false;
                this.fileInputTarget.value = null;
            }
        });
    }

    _updateLink(name, url) {
        this.fileLinkTarget.innerHTML = name;
        this.fileLinkTarget.href = url;
        this.fileLinkTarget.style.display = 'block';
    }

    showLoadButton() {
        this.loadButtonTarget.style.display = this.prevLoadButtonDisplayStyle;
    }

    hideLoadButton() {
        this.prevLoadButtonDisplayStyle = this.loadButtonTarget.style.display;
        this.loadButtonTarget.style.display = 'none';
    }
}
