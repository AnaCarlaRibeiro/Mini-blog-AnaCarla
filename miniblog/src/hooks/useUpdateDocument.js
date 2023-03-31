import {updateDoc, doc} from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { db } from "../firebase/config";

const initialState = {
  loading: null,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  // para não ter vazamento de memoria //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };
  const updateDocument = async (id, data) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
    });
    try {
        const docRef =await doc(db, docCollection, id)
        const updateDocument= await updateDoc(docRef, data)


      checkCancelBeforeDispatch({
        type: "UPDATED_DOC",
        payload: updateDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { updateDocument, response };
};
