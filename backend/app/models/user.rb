class User < ApplicationRecord
  has_many :event_users, dependent: :destroy
  has_many :events, through: :event_users

  validates :name, presence: true
  validates :email, presence: true
end
