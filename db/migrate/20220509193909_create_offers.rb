class CreateOffers < ActiveRecord::Migration[6.1]
  def change
    create_table :offers do |t|
      t.integer :employer_id
      t.integer :applicant_id
      t.integer :salary

      t.timestamps
    end
  end
end
