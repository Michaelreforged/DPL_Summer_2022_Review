# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

Quote.destroy_all
Champion.destroy_all
Location.destroy_all


10.times do
  Quote.create({phrase: Faker::Quote.famous_last_words})
end

Location.create([
  {name:'Demacia'},
  {name:'Noxus'},
  {name:'Piltover'},
  {name:'Bilgewater'},]
  )

10.times do 
  Champion.create(name:Faker::Games::LeagueOfLegends.champion,skills:['Q','W','E','R'], location:Location.all[rand(Location.count)])
end

puts "Total Quotes: #{Quote.count}"
puts "Total Locations: #{Location.count}"
puts "Total Champions: #{Champion.count}"