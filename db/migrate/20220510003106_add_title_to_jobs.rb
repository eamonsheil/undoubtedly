class AddTitleToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :title, :string
  end
end
