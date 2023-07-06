Feature: Registration  
 Scenario: Verify that the new user registration is successful after passing correct data.

      Given I am in registration page           
      When I provide below information during registeration and I submit the details
      | firstName| Tom                     |
      | lastName | Jerry                   |
      |  phone   | 123456789               |
      |  email   | tomandjerry@cartoon.com | 
      Then the registration should be successful and response should contain below items
      |message| registration successful|
      |statusCode|200|
   