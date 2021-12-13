require "google/cloud/storage"

class BucketFileManager

  # @type [Google::Cloud::Storage::Project]
  #
  @client = nil

  # @type [Google::Cloud::Storage::Bucket]
  @bucket = nil

  def initialize
    @client = Google::Cloud::Storage.new
    @bucket = @client.bucket ENV[:BUCKET_NAME]
  end

  # Creates file in bucket
  #
  # @param args [Array] Attributes for Google::Cloud::Storage::Bucket#create_file
  #
  def create_file(*args)
    @bucket.create_file *args
  end

end