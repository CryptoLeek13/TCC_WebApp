const Location = (loc = '', action) => {
  if (action.type === 'SET_LOC') {
    return action.payload;
  } else return '';
};

export default Location;
