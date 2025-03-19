Feature: Login

    Scenario Outline: Successful login
      Given I open the login page for "<env>"
      When I login with username "<username>" and password "<password>"
      Then I should be redirected to the dashboard
    @env1
    Examples:
      | username | password | env |
      | testeur_integration | testeur_qa | env1 |
      | testeur_integration | testeur_qa_2 | env1 |
    @env2
    Examples:
      | username | password | env |
      | testeur_recette | testeur_qa_3 | env2 |
      | testeur_recette | testeur_qa_4 | env2 |


  # @invalid @env1
  # Scenario: Failed login with wrong credentials
  #   Given I open the login page for "env1"
  #   When I login with username "testeur_integration" and password "wrongpassword"
  #   Then I should see an error message

  # @invalid @env2
  # Scenario: Failed login with wrong credentials
  #   Given I open the login page for "env2"
  #   When I login with username "testeur_recette" and password "wrongpassword"
  #   Then I should see an error message
