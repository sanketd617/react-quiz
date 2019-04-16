
//Returns the action which is to be handled when the user clicks any option.
export function respond(payload) {
    return {
        type: "RESPONSE_GIVEN",
        payload: payload // of the form  { qn, response }
                        // qn: question number to which response is given [0-6]
                        // response: user response [0-3] }
    }
}


//Returns the action which is to be handled when the user wish to move to the next or previous question.
export function changeQuestion(payload) {
    return {
        type: "QUESTION_CHANGED",
        payload: payload // Question number [0-6]
    }
}

//Returns the action which is to be handled when the user wish to retry the quiz.

export function reset() {
    return {
        type: "RESET",
        payload: null //no parameter needed
    }
}

