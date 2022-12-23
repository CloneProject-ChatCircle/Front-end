import { configureStore } from "@reduxjs/toolkit";

import post from "../modules/postSlice";
// import visibil from "../modules/visibilSlcie"; //로그인 화면가리기 기능

const store = configureStore({
  reducer: { post },
});

export default store;
