class BookclubSerializer < ActiveModel::Serializer
  attributes :id, :name, :books
  has_many :users
end
