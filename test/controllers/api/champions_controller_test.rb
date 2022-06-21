require "test_helper"

class Api::ChampionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_champions_index_url
    assert_response :success
  end

  test "should get show" do
    get api_champions_show_url
    assert_response :success
  end

  test "should get create" do
    get api_champions_create_url
    assert_response :success
  end

  test "should get update" do
    get api_champions_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_champions_destroy_url
    assert_response :success
  end
end
