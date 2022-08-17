class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :date, :text
  has_one :user
end
