import {
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAIL,
  MENTOR_DETAILS_REQUEST,
  MENTOR_DETAILS_SUCCESS,
  MENTOR_DETAILS_FAIL,
  MENTOR_DELETE_REQUEST,
  MENTOR_DELETE_FAIL,
  MENTOR_DELETE_SUCCESS,
  MENTOR_CREATE_REQUEST,
  MENTOR_CREATE_SUCCESS,
  MENTOR_CREATE_FAIL,
  MENTOR_UPDATE_REQUEST,
  MENTOR_UPDATE_SUCCESS,
  MENTOR_UPDATE_FAIL,
  MENTOR_CREATE_REVIEW_FAIL,
  MENTOR_CREATE_REVIEW_REQUEST,
  MENTOR_CREATE_REVIEW_SUCCESS,
  MENTOR_TOP_REQUEST,
  MENTOR_TOP_SUCCESS,
  MENTOR_TOP_FAIL,
} from "../constants/mentorConstants";
import axios from "axios";

export const listMentors =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: MENTOR_LIST_REQUEST });

      const { data } = await axios.get(
        `https://shy-gold-chicken-hose.cyclic.app/api/v1/mentors?keyword=${keyword}`
      );

      dispatch({ type: MENTOR_LIST_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: MENTOR_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listMentorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://shy-gold-chicken-hose.cyclic.app/api/v1/mentors/${id}`
    );

    dispatch({ type: MENTOR_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: MENTOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MENTOR_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch({ type: MENTOR_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: MENTOR_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createMentor = (mentor) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MENTOR_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `https://shy-gold-chicken-hose.cyclic.app/api/v1/mentors`,
      mentor,
      config
    );

    dispatch({ type: MENTOR_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MENTOR_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MENTOR_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );

    dispatch({ type: MENTOR_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MENTOR_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createMentorReview =
  (mentorId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: MENTOR_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `https://shy-gold-chicken-hose.cyclic.app/api/v1/mentors/${mentorId}/reviews`,
        review,
        config
      );

      dispatch({ type: MENTOR_CREATE_REVIEW_SUCCESS });
    } catch (error) {
      dispatch({
        type: MENTOR_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopMentors = () => async (dispatch) => {
  try {
    dispatch({ type: MENTOR_TOP_REQUEST });

    const { data } = await axios.get(
      `https://shy-gold-chicken-hose.cyclic.app/api/v1/mentors/top`
    );

    dispatch({ type: MENTOR_TOP_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: MENTOR_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
