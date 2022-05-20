import {
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_SUCCESS,
  BOOK_CREATE_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_PAY_REQUEST,
  BOOK_PAY_SUCCESS,
  BOOK_PAY_FAIL,
  BOOK_PAY_REST,
  BOOK_LIST_MY_REQUEST,
  BOOK_LIST_MY_SUCCESS,
  BOOK_LIST_MY_FAIL,
  BOOK_LIST_MY_RESET,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_DELIVER_REQUEST,
  BOOK_DELIVER_SUCCESS,
  BOOK_DELIVER_FAIL,
  BOOK_DELIVER_RESET,
} from "../constants/bookConstants";

export const bookCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_CREATE_REQUEST:
      return { loading: true };
    case BOOK_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        book: action.payload,
      };
    case BOOK_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case BOOK_DETAILS_REQUEST:
      return { ...state, loading: true };
    case BOOK_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case BOOK_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_DELIVER_REQUEST:
      return { loading: true };
    case BOOK_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case BOOK_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case BOOK_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};

export const bookListMyReducer = (state = { mybookings: [] }, action) => {
  switch (action.type) {
    case BOOK_LIST_MY_REQUEST:
      return { loading: true };
    case BOOK_LIST_MY_SUCCESS:
      return {
        loading: false,
        mybookings: action.payload,
      };
    case BOOK_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case BOOK_LIST_MY_RESET:
      return { mybookings: [] };
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return { loading: true, orders: [] };
    case BOOK_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case BOOK_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
