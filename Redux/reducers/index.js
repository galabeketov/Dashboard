import pagesReducer from "./pages";

const rootReducer = combainReducers({
  pages: pagesReducer,
});
export default rootReducer;
