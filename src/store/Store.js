import { configureStore } from "@reduxjs/toolkit";

const myObjectInitialState = {
  myObject: null,
};

function myObjectReducer(state = myObjectInitialState, action) {
  switch (action.type) {
    case "SET_MY_OBJECT":
      return {
        ...state,
        myObject: action.payload.myObject,
      };
    case "DELETE_MY_OBJECT":
      return {
        ...state,
        myObject: null,
      };
    default:
      return state;
  }
}

const anotherObjectInitialState = {
  anotherObjectArr: []
};

function anotherObjectReducer(state = anotherObjectInitialState, action) {
  switch (action.type) {
    case "ADD_ANOTHER_OBJECT":

      return {
        ...state, 
        anotherObjectArr: [
          ...state.anotherObjectArr, 
          action.payload.anotherObject
        ]
      };
    default:
      return state;
  }
}


export const store =  configureStore({
  reducer: {
    object1: myObjectReducer,
    object2: anotherObjectReducer,
  }
});
