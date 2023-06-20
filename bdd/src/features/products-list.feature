Feature: Products List

    Scenario: Load the products list
        When we request the products list
        Then we should receive            
            | name           | description                                |
            | Phone XL       | A large phone with one of the best screens |
            | Phone Mini     | A great phone with one of the best cameras |
            | Phone Standard |                                         |