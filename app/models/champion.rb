class Champion < ApplicationRecord
  belongs_to :location
  # serialize :skills, Array
  
end 
