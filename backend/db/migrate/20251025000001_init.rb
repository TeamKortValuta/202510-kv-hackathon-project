class Init < ActiveRecord::Migration[8.1]
  def change
    create_table :events do |t|
      t.string :name, limit: 255
      t.timestamp :date
      t.string :info, limit: 255
    end

    create_table :users do |t|
      t.string :name, limit: 255
      t.string :email, limit: 255
    end

    create_table :event_users do |t|
      t.integer :event_id
      t.integer :user_id
      t.string :invitation_code
    end

    add_index :event_users, :event_id
    add_index :event_users, :user_id
  end
end
