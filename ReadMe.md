# QuizWiz
This is a simple quiz web app made with ReactJS.

**Local testing** <br>
Clone this git repository: `git clone https://github.com/sanketd617/quizwiz.git`
<br>
Install dependencies:
    `npm install`
<br>
Start the server: `npm run start` 

That's it!


**Live Demo** <br>
https://sanketd617.github.io/react-quiz/

# Code explained

 
The code is divided into 4 parts <br>
1. **Components**: These are the static components of the app which doesn't contain any business logic. <br>
    1.1. **App.js**: This file contains the root of the app. All other components and routing logic is in this file.<br>
    1.2. **Header.js**: This file contains the common header part for all the pages.<br>
    1.3. **Home.js**: This is a static home page of the app containing the contact information about the developer.<br>
    1.4. **Option.js**: This file contains the layout of the options.<br>
    1.5. **Question.js**: This file contains the layout of the question.<br>
    1.6. **QuestionAnswer.js**: This file contains the layout of the question with answer on the result page.<br>
    
2. **Containers**: These are the components which contain the core logic of the web app. <br>
    2.1. **Quiz.js**: This is the container for the entire quiz page. <br>
    2.2. **Result**: This is the result page which shows all the statistics about the quiz. <br>
  
3. **Reducers**: These are the files where all the state changes are made using **Redux**. <br>
    3.1. **QuizReducer.js**: Handles all the events like responding to any question, navigating between pages, etc. <br>
    
4. **Actions**: The file contains a set of functions which return the actions to be handled by the reducers. <br>
    4.1. **QuizActions.js**: Above description of Actions.js explains this file.
 
Other files:
1. **Store.js**: Contains the logic for building up the redux store. <br>
2. **index.js**: The main entry point of the app.


Code is explained within the files in the form of comments.
