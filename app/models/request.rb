class Request < ApplicationRecord
  belongs_to :tool
  belongs_to :requester, foreign_key: 'requester_id', class_name: 'User'
  belongs_to :requestee, foreign_key: 'requestee_id', class_name: 'User'
end

