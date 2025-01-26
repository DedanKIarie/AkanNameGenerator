# Akan Name Generator

## Description
The Akan Name Generator is a web application that takes a user's date of birth and gender to determine their Akan name based on Ghanaian culture. Akan names are derived from the day of the week on which a person was born.

## Author
Dedan Kiarie 

## Setup Instructions
1. Clone the repository:  
   `git clone https://github.com/DedanKIarie/AkanNameGenerator`
2. Navigate to the project folder:  
   `cd AkanNameGenerator`
3. Open the `index.html` file in your browser to view the project.

## Behavior-Driven Development (BDD)
| Behavior                         | Input                      | Output                       |
|----------------------------------|----------------------------|------------------------------|
| Validates the date and month     | `Month: 13`, `Day: 32`     | Alerts: "Invalid date or month" |
| Calculates day of the week       | `1990-01-01` (Male)        | Displays: "Your Akan name is Kwasi" |
| Handles empty input fields       | Empty form submission      | Alerts: "Please fill in all fields" |

## Technologies Used
- HTML
- CSS
- JavaScript

