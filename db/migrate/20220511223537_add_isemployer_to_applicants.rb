class AddIsemployerToApplicants < ActiveRecord::Migration[6.1]
  def change
    add_column :applicants, :is_employer, :boolean, :default => false
  end
end
