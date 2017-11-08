class AddBorrowedToolsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :borrowed_tools do |t|
      t.references :request, index: true, foreign_key: true
      t.references :tool,    index: true, foreign_key: true
      t.references :user,    index: true, foreign_key: true
    end
  end
end
