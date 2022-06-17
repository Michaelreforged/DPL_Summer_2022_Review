class CreateChampions < ActiveRecord::Migration[7.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.text :skills
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
