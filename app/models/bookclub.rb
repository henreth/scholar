class Bookclub < ApplicationRecord
    has_many :clubusers, dependent: :destroy
    has_many :users, through: :clubusers

    validates :name, uniqueness: true
end
