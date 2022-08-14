class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      enable_extension 'hstore'
      t.string :username
      t.string :password_digest
      t.hstore :shelves

      t.timestamps
    end
  end
end
