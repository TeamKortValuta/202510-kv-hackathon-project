class Event < ApplicationRecord
  has_many :event_users, dependent: :destroy
  has_many :users, through: :event_users

  validates :name, presence: true
  validates :date, presence: true
  validates :info, presence: true
end
