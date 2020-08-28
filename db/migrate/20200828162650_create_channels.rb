class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :channel_type, null: false
      t.timestamps
    end

    add_index :channels, :name
  end
end
