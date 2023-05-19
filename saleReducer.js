import { SAVE_SALE_CARDS } from "../Types";
import {SAVE_TEST_PROMOTION} from "../Types"
import { SAVE_SELECTED_TEST_METERS} from "../Types"

const initialState = {
  promotions: [],
  metersForPromotion:[],
  test:[],
};

export const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SALE_CARDS: {
      return {
        ...state,

        promotions: action.data,
      };
    }

    case SAVE_TEST_PROMOTION: {
      return {
        ...state,
        test: action.data,
      };
    }


    case  SAVE_SELECTED_TEST_METERS: {
      return {
        ...state,
        metersForPromotion: action.data,
      };
    }

    default:
      return state;
  }
};
