class BookclubSerializer < ActiveModel::Serializer
  attributes :id, :name, :books, :host, :description
  has_many :clubusers
end
