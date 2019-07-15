export const fieldEntry = value => ({
  value,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD_VALUE':
      return { ...state, [action.data.name]: fieldEntry(action.data.value) };
    default:
      throw new Error('This should not happen');
  }
};

export default reducer;
