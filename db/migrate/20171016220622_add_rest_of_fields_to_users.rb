class AddRestOfFieldsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :last_name, :string, null: false, default: ""
    add_column :users, :street, :string, null: false, default: ""
    add_column :users, :apartment_number, :string, null: false, default: ""
    add_column :users, :city, :string, null: false, default: ""
    add_column :users, :state, :string, null: false, default: ""
    add_column :users, :zip_code, :string, null: false, default: ""
    add_column :users, :phone, :string, null: false, default: ""
  end
end
