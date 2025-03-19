Feature: Login

  @valid @env1
  Scenario: Successful login
    Given I open the login page
    When I login with username "testeur_integration" and password "testeur_qa"
    Then I should be redirected to the dashboard

  @invalid @env1
  Scenario: Failed login with wrong credentials
    Given I open the login page
    When I login with username "Admin" and password "wrongpassword"
    Then I should see an error message

  @valid @env2
  Scenario: Successful login
    Given I open the login page 2
    When I login with username "testeur_integration" and password "testeur_qa"
    Then I should be redirected to the dashboard

  @invalid @env2
  Scenario: Failed login with wrong credentials
    Given I open the login page 2
    When I login with username "Admin" and password "wrongpassword"
    Then I should see an error message
