class CreateTools < ActiveRecord::Migration[5.1]
  def change
    create_table :tools do |t|
      t.string :tool_name        , null: false
      t.string :tool_make        , null: true
      t.string :tool_model       , null: true
      t.text :tool_description   , null: true
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
    add_index :tools, :tool_name, unique: true
  end
end