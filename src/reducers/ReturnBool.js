const ReturnBool = (back = false, action) => {
  if (action.type === 'BACK') {
    return action.payload;
  } else return false;
};

export default ReturnBool;
