class CreateApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :applications do |t|
      t.integer :applicant_id
      t.integer :job_id

      t.timestamps
    end
  end
end
