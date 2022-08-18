class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :date, :text, :book_id
  has_one :user
end
