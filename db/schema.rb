# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171102155500) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "profiles", force: :cascade do |t|
    t.string "user_name"
    t.string "first_name"
    t.string "last_name"
    t.string "street"
    t.string "apartment_number"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.string "phone"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
    t.index ["user_name"], name: "index_profiles_on_user_name", unique: true
  end

  create_table "requests", force: :cascade do |t|
    t.string "tool_use", null: false
    t.bigint "requester_id", null: false
    t.bigint "requestee_id", null: false
    t.string "status", null: false
    t.bigint "tool_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["requestee_id"], name: "index_requests_on_requestee_id"
    t.index ["requester_id"], name: "index_requests_on_requester_id"
    t.index ["tool_id"], name: "index_requests_on_tool_id"
  end

  create_table "tools", force: :cascade do |t|
    t.string "tool_name", null: false
    t.string "tool_make"
    t.string "tool_model"
    t.text "tool_description"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tool_name"], name: "index_tools_on_tool_name", unique: true
    t.index ["user_id"], name: "index_tools_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "street", default: "", null: false
    t.string "apartment_number", default: "", null: false
    t.string "city", default: "", null: false
    t.string "state", default: "", null: false
    t.string "zip_code", default: "", null: false
    t.string "phone", default: "", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "profiles", "users"
  add_foreign_key "requests", "tools"
  add_foreign_key "tools", "users"
end
