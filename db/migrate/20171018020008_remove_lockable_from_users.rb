class RemoveLockableFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :failed_attempts
    remove_column :users, :unlock_token
    remove_column :users, :locked_at

  end
end
