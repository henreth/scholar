class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :shelves, :complete, :toberead, :current, :didnotfinish, :reviews
end
