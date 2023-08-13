import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
  } from "react-redux";
  import { configureStore } from "@reduxjs/toolkit";
  
  import { rootReducer } from "./rootReducer";
  import { rootMiddleware } from "./rootMiddleware";
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([...rootMiddleware]),
  });
  
  export const useSelector = useReduxSelector;
  
  export const useDispatch = () => useReduxDispatch();