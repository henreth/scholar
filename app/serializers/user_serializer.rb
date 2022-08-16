class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :shelves, :tbr
end
