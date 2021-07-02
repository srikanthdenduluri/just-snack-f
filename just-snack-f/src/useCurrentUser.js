import react, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Hub } from "aws-amplify";

/**
 * userUserStatus is a react hook that tracks the user's login status and provides a "isLoggedIn" flag that can be checked in code.
 */

function useCurrentUser() {
  let [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    let updateUser = async () => {
      try {
        let isLoggedIn = await Auth.currentAuthenticatedUser();
        setIsLoggedIn(isLoggedIn);
      } catch {
        setIsLoggedIn(null);
      }
    };
    Hub.listen("auth", updateUser); // listen for login/signup events

    // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove("auth", updateUser); // cleanup
  }, []);

  return isLoggedIn;
}

export default useCurrentUser;
