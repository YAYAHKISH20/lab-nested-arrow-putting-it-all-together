function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }
  }; 

  return loginAttempt; 
}

// Testing the function
const trackLogin = createLoginTracker("user123");
console.log(trackLogin("wrong_password")); 
console.log(trackLogin("wrong_password_2"));
console.log(trackLogin("wrong_password_3"));
console.log(trackLogin("wrong_password_4"));