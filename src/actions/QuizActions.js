export function respond(payload) {
    return {
        type: "RESPONSE_GIVEN",
        payload: payload
    }
}

export function changeQuestion(payload) {
    return {
        type: "QUESTION_CHANGED",
        payload: payload
    }
}

