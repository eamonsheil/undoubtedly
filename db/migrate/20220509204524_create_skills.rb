class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.boolean :javascript
      t.boolean :ruby
      t.boolean :react
      t.boolean :rails
      t.boolean :frontend
      t.boolean :backend
      t.integer :applicant_id
      
      t.timestamps
    end
  end
end
