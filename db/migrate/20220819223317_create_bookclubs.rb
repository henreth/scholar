class CreateBookclubs < ActiveRecord::Migration[6.1]
  def change
    create_table :bookclubs do |t|
      t.string :name
      t.json :host
      t.string :description
      t.json :books, array: true, default: []
      t.string :image, default: 'https://img.icons8.com/ios/50/000000/storytelling.png'

      t.timestamps
    end
  end
end
