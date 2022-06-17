class Location < ApplicationRecord
  has_many :champions, dependent: :destroy
end
