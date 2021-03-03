class Post < ApplicationRecord
  belongs_to :shark
  validates :body, presence: true
end
