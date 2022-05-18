import {
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAIL,
  MENTOR_DETAILS_REQUEST,
  MENTOR_DETAILS_SUCCESS,
  MENTOR_DETAILS_FAIL,
  MENTOR_DELETE_REQUEST,
  MENTOR_DELETE_SUCCESS,
  MENTOR_DELETE_FAIL,
  MENTOR_CREATE_REQUEST,
  MENTOR_CREATE_SUCCESS,
  MENTOR_CREATE_FAIL,
  MENTOR_CREATE_RESET,
  MENTOR_UPDATE_REQUEST,
  MENTOR_UPDATE_SUCCESS,
  MENTOR_UPDATE_FAIL,
  MENTOR_UPDATE_RESET,
  MENTOR_CREATE_REVIEW_REQUEST,
  MENTOR_CREATE_REVIEW_SUCCESS,
  MENTOR_CREATE_REVIEW_FAIL,
  MENTOR_TOP_REQUEST,
  MENTOR_TOP_SUCCESS,
  MENTOR_TOP_FAIL,
  MENTOR_CREATE_REVIEW_RESET,
} from "../constants/mentorConstants";

export const mentorListReducer = (state = { mentors: [] }, action) => {
  switch (action.type) {
    case MENTOR_LIST_REQUEST:
      return { loading: true, mentors: [] };
    case MENTOR_LIST_SUCCESS:
      return {
        loading: false,
        mentors: action.payload,
      };
    case MENTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mentorDetailsReducer = (
  state = { mentor: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case MENTOR_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MENTOR_DETAILS_SUCCESS:
      return { loading: false, mentor: action.payload };
    case MENTOR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mentorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_DELETE_REQUEST:
      return { loading: true };
    case MENTOR_DELETE_SUCCESS:
      return { loading: false, success: true };
    case MENTOR_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mentorCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_CREATE_REQUEST:
      return { loading: true };
    case MENTOR_CREATE_SUCCESS:
      return { loading: false, success: true, mentor: action.payload };
    case MENTOR_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const mentorUpdateReducer = (state = { mentor: {} }, action) => {
  switch (action.type) {
    case MENTOR_UPDATE_REQUEST:
      return { loading: true };
    case MENTOR_UPDATE_SUCCESS:
      return { loading: false, success: true, mentor: action.payload };
    case MENTOR_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_UPDATE_RESET:
      return { mentor: {} };
    default:
      return state;
  }
};

export const mentorReviewCreteReducer = (state = {}, action) => {
  switch (action.type) {
    case MENTOR_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case MENTOR_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case MENTOR_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case MENTOR_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const mentorTopRatedReducer = (state = { mentors: [] }, action) => {
  switch (action.type) {
    case MENTOR_TOP_REQUEST:
      return { loading: true, mentors: [] };
    case MENTOR_TOP_SUCCESS:
      return { loading: false, mentors: action.payload };
    case MENTOR_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
