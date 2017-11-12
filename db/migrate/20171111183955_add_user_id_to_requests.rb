class AddUserIdToRequests < ActiveRecord::Migration[5.1]
  def change
    add_reference :requests, :user, foreign_key: true
  end
end
