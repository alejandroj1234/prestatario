class AddUserProfilePage < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :user_name        , null: true
      t.string :first_name       , null: true
      t.string :last_name        , null: true
      t.string :street           , null: true
      t.string :apartment_number , null: true
      t.string :city             , null: true
      t.string :state            , null: true
      t.string :zip_code         , null: true
      t.string :phone            , null: true
      t.references :user, index: true, foreign_key: true
      t.timestamps
    end
    add_index :profiles, :user_name, unique: true
  end
end
