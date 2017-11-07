class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.string     :tool_use         , null: false
      t.references :requester        , null: false
      t.references :requestee        , null: false
      t.string     :status           , null: false
      t.references :tool, index: true, foreign_key: true
      t.timestamps
    end
  end
end
