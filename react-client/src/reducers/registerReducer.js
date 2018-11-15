const registerUsers = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REGISTER_USER':
    
      return {
        ...state,
        firstName: action.userId,
        lastName: action.userTypeId,
        email: action.firstName,
        password: action.lastName, 
        passwordConfirm:action.email
      }
    default:
      return state;
  }
}

export default registerUsers;
