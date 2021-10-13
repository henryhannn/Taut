class CreateDirects < ActiveRecord::Migration[5.2]
  def change
    create_table :directs do |t|
      t.integer :author_id, null: false
      t.integer :target_id, null: false
      t.timestamps
    end
  end
end
