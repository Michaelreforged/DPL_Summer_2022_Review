class Quote < ApplicationRecord
  validates :phrase, presence: {message:"needs to be filled in"}
  validates :phrase, length: {minimum: 10, message:"is too short, needs to be atleast 10 chars"}

end
