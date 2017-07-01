let UserFactory = function () {
  const user = {};
  let getResults = () => {
    console.log("UserFactoryUserFactoryUserFactorygetResults")

  };

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getUser, isSignedIn };
};

export default UserFactory;
