function createLoginTracker(userInfo) {
  // attemptCount scoped within createLoginTracker via closure
  let attemptCount = 0;

  // Inner arrow function handles each login attempt
  const loginAttempt = (passwordAttempt) => {
    attemptCount++;

    // Account lock: prevent login after 3 failed attempts
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Password check
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return Attempt ${attemptCount}: Login failed;
    }
  };

  return loginAttempt;
}

module.exports = { createLoginTracker 