class AddStatusFieldToToolsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :tools, :tool_status, :string, null: false, default: ""
  end
end

