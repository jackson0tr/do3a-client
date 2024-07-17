import axios from "axios";
import { server } from "../../server";

// create quote
export const addQuote =
  (
    quote,
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "quoteCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/quote/create-quote`,
        quote,
      );
      dispatch({
        type: "quoteCreateSuccess",
        payload: data.quote,
      });
    } catch (error) {
      dispatch({
        type: "quoteCreateFail",
        payload: error.response.data.message,
      });
    }
  };


// edit Quote 
export const editQuote = ({id,quote}) => async (dispatch) => {
  try {
    dispatch({
      type: "editQuoteRequest",
    });

    const { data } = await axios.put(
      `${server}/quote/edit-quote/${id}`,
      {quote},
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "editQuoteSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "editQuoteFailed",
      payload: error.response.data.message,
    });
  }
};

// delete Quote 
export const deleteQuote = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteQuoteRequest",
    });

    const { data } = await axios.delete(
      `${server}/quote/delete-quote/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteQuoteSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteQuoteFailed",
      payload: error.response.data.message,
    });
  }
};

// get all quotes
export const getAllQuotes = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllQuotesRequest",
    });

    const { data } = await axios.get(`${server}/quote/get-all-quotes`,
    {withCredentials: true});
    dispatch({
      type: "getAllQuotesSuccess",
      payload: data.quotes,
    });
  } catch (error) {
    dispatch({
      type: "getAllQuotesFailed",
      payload: error.response.data.message,
    });
  }
};