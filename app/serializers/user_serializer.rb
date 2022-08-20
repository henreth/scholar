class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :shelves, :complete, :toberead, :current, :didnotfinish
  has_many :reviews
  has_many :clubusers
end
