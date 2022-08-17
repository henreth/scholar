class User < ApplicationRecord
    has_secure_password
    has_many :reviews

    validates :username, presence: true, uniqueness: true, length: {minimum: 4}, allow_blank: false, :reviews

end
