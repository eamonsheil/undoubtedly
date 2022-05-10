class AddUsernameToApplicants < ActiveRecord::Migration[6.1]
  def change
    add_column :applicants, :username, :string
  end
end
