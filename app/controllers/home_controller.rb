class HomeController < ApplicationController

  def show
    @object = Attachment.first || Attachment.create
  end

  def upload_file
    bucket_fm = BucketFileManager.new
    bucket_fm.create_file params.require(:file).read
  end

end
