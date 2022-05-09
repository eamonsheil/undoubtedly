class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :description
      t.integer :salary
      t.string :employment_type
      t.string :required_skills
      t.boolean :remote
      t.integer :employer_id

      t.timestamps
    end
  end
end
