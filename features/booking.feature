Feature: Tickets

  
  Scenario: Should goto hall
     Given user is on "/index.php" page
     When user chose date
     When user chose seanse
     When user chose hall
     Then user sees hall "зал 5"

  Scenario:   Booking places
    Given user is on "/index.php" page
    When user chose date
    When user chose seanse
    When user chose hall
    When user click by place1
    When user click by place2
    When user click by place3
    When user click by acception
    Then user sees places "7/6, 7/7, 7/8"
    Then user sees hall "зал 5"
    Then user sees date "15-10-2026"
    Then user sees seccion "20:00"
    Then user sees cost "750"

  
  Scenario:   Reserved places
    Given user is on "/index.php" page
    When user chose date
    When user chose seanse
    When user chose hall
    When user click by place
    When user click by acception
    Then link is not clicable
  