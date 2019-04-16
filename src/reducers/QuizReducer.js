const questions = [{
    que: "We can go for ______ when there is a possibility that our user could change the data.",
    options: ["Keys", "Refs", "Both", "None"],
    ans: 0,
    response: null
}, {
    que: "State whether true of false. \'JSX is typesafe\'",
    options: ["True", "False"],
    ans: 1,
    response: null
}, {
    que: "React merges the object you provide into the current state using ________",
    options: ["setState()", "state()"],
    ans: 0,
    response: null
}, {
    que: "Arbitrary inputs of components are called __________",
    options: ["Keys", "Props", "Elements", "Refs"],
    ans: 1,
    response: null
}, {
    que: "_________ can be done while more than one element needs to be returned from a component",
    options: ["Abstraction", "Packing", "Insulation", "Wrapping"],
    ans: 1,
    response: null
}, {
    que: "Which of the following needs to be updated to achieve dynamic UI updates?",
    options: ["State", "Props"],
    ans: 0,
    response: null
}, {
    que: "Lifecycle methods are mainly used to _______",
    options: ["keep track of event history", "enhance components", "free up resources", "none of the options"],
    ans: 2,
    response: null
}];

const defaultState = {
    questions: questions,
    currentQuestion: 0,
    totalCorrect: 0
};


const QuizReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "RESPONSE_GIVEN":
            let questions = [...state.questions];
            questions[action.payload.qn] = {
                ...state.questions[action.payload.qn],
                response: action.payload.response
            };

            state = {
                ...state,
                questions: questions,
                totalCorrect: state.totalCorrect + (questions[action.payload.qn].ans === action.payload.response ? 1 : 0)
            };

            break;
        case "QUESTION_CHANGED":
            state = {
                ...state,
                currentQuestion: action.payload
            };
            break;
        case "RESET":
            state = {
                ...defaultState
            };
            break;
        default:
    }
    return state;
};

export default QuizReducer;
