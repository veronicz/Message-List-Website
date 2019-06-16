const detailedViewReducer = (view = null, action) => {
  if (action.type === "SHOW") {
    return action.view;
  } else if (action.type === "HIDE") {
    return null;
  }
  return view;
};

export default detailedViewReducer;
