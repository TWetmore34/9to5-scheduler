#9 to 5 scheduler application

This project consists of a schedule builder for standard workdays. It allows users to see the time of day through live updating color changes, and save their entries through browser sessions. This is accomplished throuhg local storage and method JS.

##Code overview
The code in this file begins by declaring its global DOM variables and continues into a for loop that gives each of our submit elements its own event listener. This event listener creates an object with the value of each input field and pushes it into local storage. Finally, the last function displays the previously saved values on page load in order to keep those vlaues displayed for the user.
