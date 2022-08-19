class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :date, :text, :book_id, :reactions
  has_one :user
end
