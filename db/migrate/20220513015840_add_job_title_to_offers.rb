class AddJobTitleToOffers < ActiveRecord::Migration[6.1]
  def change
    add_column :offers, :job_title, :string
  end
end
