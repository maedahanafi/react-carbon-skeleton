import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import localforage from "localforage";

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


const rootReducer = combineReducers({
  object1: myObjectReducer,
  object2: anotherObjectReducer,
});

const persistConfig = {
  key: "root",
  storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


let Store = createStore(persistedReducer);
let Persistor = persistStore(Store);

export { Store, Persistor };
