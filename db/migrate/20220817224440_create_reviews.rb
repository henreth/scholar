class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.int :rating
      t.string :date
      t.string :text

      t.timestamps
    end
  end
end
