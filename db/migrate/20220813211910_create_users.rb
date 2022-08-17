class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      enable_extension 'hstore'
      t.string :username
      t.string :password_digest
      t.json :shelves
      t.json :complete, array: true, default: []
      t.json :toberead, array: true, default: []
      t.json :current, array: true, default: []
      t.json :didnotfinish, array: true, default: []

      t.timestamps
    end
  end
end
