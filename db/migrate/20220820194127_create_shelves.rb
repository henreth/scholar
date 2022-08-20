class CreateShelves < ActiveRecord::Migration[6.1]
  def change
    create_table :shelves do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :books

      t.timestamps
    end
  end
end
