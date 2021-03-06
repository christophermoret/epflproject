# epflproject
Final exercise for "Thinking and creating with code"


# MY FINAL PROJECT
A one or two sentence description of your project here.

- What does it do?  
  This a dungeon game where you must fight your way through

- What is the "new feature" which you have added that we haven't seen before?  
  Using and changing data in the local storage + browser

## Prerequisites
Did you add any additional modules that someone needs to install (for instance anything in Python that you `pip install-ed`)? 
No, used the methods learned in class but did create my own functions i/o using prebuild ones

## Project Checklist
- [x] It is available on GitHub.
- [x] It uses the Flask web framework.
- [x] It uses at least one module from the Python Standard Library other than the random module.
  Please provide the name of the module you are using in your app.
  - Module name: Routes + replace_html + def __init__
- [x] It contains at least one class written by you that has both properties and methods.
  This includes instantiating the class and using the methods in your app.
  Please provide below the file name and the line number(s) of at least one example of a class definition in your code.
  - File name: game.js + game.py
  - Line number(s):
- [x] It makes use of JavaScript in the front end and uses the localStorage of the web browser.
- [x] It uses modern JavaScript (for example, let and const rather than var).
- [x] It makes use of the reading and writing to a file feature.
- [x] It contains conditional statements. Please provide below the file name and the line number(s) of at least
  one example of a conditional statement in your code. 
  - File name: game.js
  - Line number(s): 21 to 33
- [] It contains loops. Please provide below the file name and the line number(s) of at least
  one example of a loop in your code.
  - File name: 
  - Line number(s): 
- [x] It lets the user enter a value in a text box at some point.
  This value is received and processed by your back end Python code.
- [x] It doesn't generate any error message even if the user enters a wrong input.
- [x] The code follows the code and style conventions as introduced in the course, is fully documented using comments and doesn't contain unused or experimental code. 
  In particular, the code should not use `print()` or `console.log()` for any information the app user should see. Instead, all user feedback needs to be visible in the browser.  
- [x] All exercises have been completed as per the requirements and pushed to the respective GitHub repository.

Run on Mac:
python3 -m venv venv
. venv/bin/activate
pip install Flask
export FLASK_APP=game
flask run