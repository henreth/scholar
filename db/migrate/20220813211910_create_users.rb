class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      enable_extension 'hstore'
      t.string :username
      t.string :password_digest
      t.hstore :shelves
      t.hstore :complete, array: true, default: []
      t.hstore :toberead, array: true, default: []
      t.hstore :current, array: true, default: []
      t.hstore :didnotfinish, array: true, default: []

      t.timestamps
    end
  end
end
