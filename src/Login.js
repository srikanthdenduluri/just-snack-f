import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  history.push("/");
  //   history.goBack();
  //   switch (props.url) {
  //     case "product1":
  //       return history.push("/product1");
  //     case "details":
  //       return history.push("/details");
  //     default:
  //       return history.push("/");
  //   }

  //   return history.push("/product1");
  return <p>hi</p>;
}

export default withAuthenticator(Login);
