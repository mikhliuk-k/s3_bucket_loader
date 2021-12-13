class Attachment < ApplicationRecord

  has_many_attached :file

end
