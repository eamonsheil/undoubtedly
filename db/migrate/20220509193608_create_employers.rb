class CreateEmployers < ActiveRecord::Migration[6.1]
  def change
    create_table :employers do |t|
      t.string :name
      t.string :email
      t.string :bio
      t.string :password_digest

      t.timestamps
    end
  end
end
