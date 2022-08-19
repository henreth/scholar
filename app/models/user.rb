class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :bookclubs
    has_secure_password

    validates :username, presence: true, uniqueness: true, length: {minimum: 4}, allow_blank: false

end
