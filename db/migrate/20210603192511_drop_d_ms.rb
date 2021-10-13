class DropDMs < ActiveRecord::Migration[5.2]
  def change
    drop_table :d_ms
  end
end
