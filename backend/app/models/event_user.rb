class EventUser < ApplicationRecord
  belongs_to :event
  belongs_to :user

  validates :invitation_code, presence: true
end
