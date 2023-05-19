import {
    DELETE_INSTRUCTION_STEP,
    DOCUMENT,
    EDIT_INSTRUCTION_STEP,
    ADD_INSTRUCTION_STEP,
    UPDATE_INSTRUCTION_STEP,
    EDIT_INSTRUCTION,
    SAVE_INSTRUCTIONS,
    DELETE_ALL_INSTRUCTION_STEP
} from "../Types";

const initialState = {
    documents: [],
    instruction: [],
    instructions: [],
    step: [],
    steps: []
};

export const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENT:
            {
                const documents = [...state.documents, action.data];
                return {
                    ...state,
                    documents: documents,
                };
            }



        case SAVE_INSTRUCTIONS:
            {
                return {
                    ...state,
                    instructions: action.data,
                };
            }

        case EDIT_INSTRUCTION:
            {
                return {
                    ...state,
                    instruction: action.data,
                };
            }

        case EDIT_INSTRUCTION_STEP:
            {
                return {
                    ...state,
                    step: action.data,
                };
            }

        case ADD_INSTRUCTION_STEP:
            {
                const steps = [...state.steps, ...action.data];
                return {
                    ...state,
                    steps: steps,
                };
            }

        case DELETE_ALL_INSTRUCTION_STEP:
            {
                return {
                    ...state,
                    steps: [],
                };
            }

        case DELETE_INSTRUCTION_STEP:
            {
                const index = action.data;
                const arr = [...state.steps]
                arr.splice(index, 1);
                return {
                    ...state,
                    steps: arr,
                };
            }

        case UPDATE_INSTRUCTION_STEP:
            {
                const arr = [...state.steps];
                arr[action.data.index - 1] = action.data;
                return {
                    ...state,
                    steps: arr,
                };
            }

        default:
            return state;
    }
};
