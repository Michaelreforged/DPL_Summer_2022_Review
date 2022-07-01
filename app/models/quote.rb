class Quote < ApplicationRecord
  validates :phrase, presence: {message:"needs to be filled in"}
  validates :phrase, length: {minimum: 4, message:"is too short"}
end
