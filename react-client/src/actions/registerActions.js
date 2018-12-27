export const setRegisterUser = registerUser => ({
    type: 'SET_REGISTER_USER',
    firstName: registerUser.userId,
    lastName: registerUser.userTypeId,
    email: registerUser.firstName,
    password: registerUser.lastName, 
    passwordConfirm: registerUser.email
  })