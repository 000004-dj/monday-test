type InitialStateType = { number: number }

//Actions Types:
type ActionType = changeCounterNumberAT

type changeCounterNumberAT = ReturnType<typeof changeCounterNumberAC>


//Constants with actions names:
export const CHANGE_COUNTER_NUMBER = "CHANGE-COUNTER-NUMBER"


const initialState: InitialStateType = {
    number: 0,
}


//function-reducer:
export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_COUNTER_NUMBER:
            return {
                ...state,
                number: action.number
            }
        default:
            return state
    }

}

//Action Creators:
export const changeCounterNumberAC = (number: number) => {
    return {
        type: CHANGE_COUNTER_NUMBER,
        number
    } as const
}

