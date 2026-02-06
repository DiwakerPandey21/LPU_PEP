function createUser(role) {
  return function (requiredRole) {
    if (role === requiredRole) {
      console.log("Access Granted ✅");
    } else {
      console.log("Access Denied ❌");
    }
  };
}

let adminUser = createUser("admin");
adminUser("admin");
adminUser("user");