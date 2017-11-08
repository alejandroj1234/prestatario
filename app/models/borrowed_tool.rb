class BorrowedTool < ApplicationRecord
  belongs_to :tool
  belongs_to :request
end

