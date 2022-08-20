class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :shelves
  has_many :reviews
  has_many :clubusers
  has_many :shelves
  has_many :bookclubs, through: :clubusers
end
