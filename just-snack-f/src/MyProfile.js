import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Subscribe } from "./models";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { withAuthenticator, AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import useCurrentUser from "./useCurrentUser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import "./UserDetails.css";

function UserDetails() {
  <br></br>;
  <br></br>;
  <br></br>;
  <br></br>;
  const product = { title: "hi bro", description: "you are good", cost: "500" };
  const userStatus = useCurrentUser();

  const isLoggedIn = null !== userStatus;
  console.log("isLoggedIn", isLoggedIn);
  // var isNoUser;
  const [isNoUser, setisNoUser] = useState(true);
  const userslist = [];
  const currentuser = [];
  const [Data, setData] = useState({
    full_name: "",
    area: "",
    email: "",
    mobile: "",
    address: "",
    balance: "",
    product_name: "",
  });

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const myfunc = async () => {
  //   const pr = await DataStore.save(new Subscribe(onSubmit.data));
  //   console.log(pr);
  // };
  // const product = { title: "hi bro", description: "you are good", cost: "500" };

  useEffect(() => {
    async function myfunc() {
      const temp = await DataStore.query(Subscribe, (c) =>
        c.user_id("eq", Auth.user.username)
      );
      console.log("temp", temp);
      userslist.push(temp);
      console.log("userslist", userslist);
      const cu = userslist[0][userslist[0].length - 1];
      if (cu === undefined) {
        console.log("error occured");
        setisNoUser(true);
        console.log("isNoUser", isNoUser);
        return null;
      } else {
        setisNoUser(false);
        console.log("isNoUser", isNoUser);
      }

      // console.log(userslist[userslist[0].length]);
      // console.log(userslist[0][userslist[0].length - 1]);
      currentuser.push(cu);
      console.log("current user", currentuser);
      console.log("current user", currentuser[0].area);
      setData({
        full_name: currentuser[0].full_name,
        area: currentuser[0].area,
        email: currentuser[0].email,
        address: currentuser[0].address,
        mobile: currentuser[0].mobile,
        balance: currentuser[0].balance,
        product_name: currentuser[0].product_name,
      });

      console.log(Auth.user.username);
      // const addressNewValue = document.getElementById("addressId").value;
      // console.log("addressNewValue", addressNewValue);
    }
    myfunc();
  }, []);
  const newButton = async () => {
    console.log("entered onsubmit func");
    const addressNewValue = document.getElementById("addressId").value;
    console.log("addressNewValue", addressNewValue);
    const areaNewValue = document.getElementById("areaId").value;
    console.log("areaNewValue", areaNewValue);
    const pack_receive_value = document.getElementById("pack_receive").value;
    var pack_receive_value01 = pack_receive_value === "true";

    const newDetails = {
      full_name: Data.full_name,
      email: Data.email,
      mobile: Data.mobile,
      address: addressNewValue,
      area: areaNewValue,
      user_id: Auth.user.username,
    };

    // const pr = await DataStore.save(new Subscribe(newDetails));
    const temp = await DataStore.query(Subscribe, (c) =>
      c.user_id("eq", Auth.user.username)
    );
    console.log("temp", temp);
    userslist.push(temp);
    console.log("userslist", userslist);
    const cu = userslist[0][userslist[0].length - 1];
    const pr = await DataStore.save(
      Subscribe.copyOf(cu, (updated) => {
        updated.address = `${addressNewValue}`;
        updated.area = `${areaNewValue}`;
        // updated.is_purchased = `${pack_receive_value01}`;
      })
    );
    console.log(pr);
    // const pr = await DataStore.save(new Subscribe(onSubmit.data));
    // console.log(pr);
  };
  // const addressNewValue = document.getElementById("addressId").value;
  // const [addressNewValue, setaddressNewValue] = useState(Data.address);
  // console.log("addressNewValue", addressNewValue);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async () => {
    console.log("entered onsubmit func");
    const addressNewValue = document.getElementById("addressId").value;
    console.log("addressNewValue", addressNewValue);
    const areaNewValue = document.getElementById("areaId").value;
    console.log("areaNewValue", areaNewValue);

    const newDetails = {
      full_name: Data.full_name,
      email: Data.email,
      mobile: Data.mobile,
      address: addressNewValue,
      area: areaNewValue,
      user_id: Auth.user.username,
    };
    const pr = await DataStore.save(new Subscribe(newDetails));
    console.log(pr);
    // data["user_id"] = Auth.user.username;
    // console.log("Original data", data);
    // const pr = await DataStore.save(new Subscribe(data));
    // console.log("DB data: ", pr);
    // console.log(Auth);
    // console.log(Auth.user.username);
    // console.log(Auth.currentUserInfo);
    // console.log(Auth.currentAuthenticatedUser());
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit01 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("validated: false");
    }
    console.log("validated: True");

    setValidated(true);
  };
  console.log("isNoUser outside useeffect", isNoUser);

  return isNoUser ? (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <section class="testimonial py-5" id="testimonial">
          <div class="container">
            <div class="row ">
              <div class="col-md-4 py-5 bg-primary text-white text-center ">
                <div class=" ">
                  <div class="card-body">
                    <img
                      src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                      style={{ width: "30%" }}
                      alt=""
                    ></img>
                    <h2 class="py-3">My Profile</h2>
                  </div>
                </div>
              </div>
              <div class="col-md-8 py-5 border">
                <h4 class="pb-4">Your details</h4>
                <Form validated={validated} onSubmit={handleSubmit(onSubmit)}>
                  <Form.Row>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          required
                          type="mobile"
                          value={Data.full_name}
                          placeholder="First name"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="formHorizontalEmail"
                      >
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            value={Data.email}
                            required
                          />
                        </InputGroup>
                      </Form.Group>
                    </fieldset>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Mobile number"
                          defaultValue={Data.mobile}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>
                  </Form.Row>
                  <Form.Row>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          required
                          id="addressId"
                          type="text"
                          placeholder="Address"
                          defaultValue={Data.address}
                          // value={addressNewValue}
                          // onInput={(e) => setaddressNewValue(e.target.value)}
                          // {...register("address", {
                          //   required: "Required",
                          // })}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>
                    {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Land mark</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Land mark"
                        // {...register("mobile", {
                        //   required: "Required",
                        // })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom05"
                      >
                        <Form.Label>Area</Form.Label>
                        <input
                          type="text"
                          id="areaId"
                          defaultValue={Data.area}
                          list="areas"
                          placeholder="Area"
                          disabled
                        />
                        <datalist name="areas" required>
                          <option value="Jubilee hills">Jubilee hills</option>
                          <option value="Banjara hills">Banjara hills</option>
                          <option value="Kukatpally">Kukatpally</option>
                          <option value="Gachibowli">Gachibowli</option>
                        </datalist>

                        {/* <select name="cars" id="areaId" required>
                        <option value="Jubilee hills">Jubilee hills</option>
                        <option value="Banjara hills">Banjara hills</option>
                        <option value="Kukatpally">Kukatpally</option>
                        <option value="Gachibowli">Gachibowli</option>
                      </select> */}
                      </Form.Group>
                    </fieldset>

                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Your Pack</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Address"
                          {...register("address", {
                            required: "Required",
                          })}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>
                  </Form.Row>

                  <Form.Row>
                    {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Land mark</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Land mark"
                        // {...register("mobile", {
                        //   required: "Required",
                        // })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}

                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="10"
                        controlId="validationCustom05"
                      >
                        <Form.Label>Remaining Coins</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="3000"

                          // {...register("address", {
                          //   required: "Required",
                          // })}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid zip.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>

                    <Form.Group as={Col} md="15" controlId="validationCustom05">
                      <Form.Label>Receive tomorrow</Form.Label>
                      <select name="pack" id="pack" disabled>
                        <option value="volvo">Yes</option>
                        <option value="saab">No</option>
                      </select>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    ❗❗❗ You cannot edit these fields because you did not
                    purchased any pack.
                  </Form.Group>
                  {/* <Button onClick={newButton}>New button</Button>
                    <Button type="submit">Submit form</Button> */}
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <section class="testimonial py-5" id="testimonial">
          <div class="container">
            <div class="row ">
              <div class="col-md-4 py-5 bg-primary text-white text-center ">
                <div class=" ">
                  <div class="card-body">
                    <img
                      src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                      style={{ width: "30%" }}
                      alt=""
                    ></img>
                    <h2 class="py-3">My Profile no user</h2>
                  </div>
                </div>
              </div>
              <div class="col-md-8 py-5 border">
                <h4 class="pb-4">Your details</h4>
                <Form validated={validated} onSubmit={handleSubmit(onSubmit)}>
                  <Form.Row>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          required
                          type="mobile"
                          value={Data.full_name}
                          placeholder="First name"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="formHorizontalEmail"
                      >
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            value={Data.email}
                            required
                          />
                        </InputGroup>
                      </Form.Group>
                    </fieldset>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          defaultValue={Data.mobile}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        id="addressId"
                        type="text"
                        defaultValue={Data.address}
                        // value={addressNewValue}
                        // onInput={(e) => setaddressNewValue(e.target.value)}
                        // {...register("address", {
                        //   required: "Required",
                        // })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Land mark</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Land mark"
                        // {...register("mobile", {
                        //   required: "Required",
                        // })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}

                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Area</Form.Label>
                      <input
                        type="text"
                        id="areaId"
                        defaultValue={Data.area}
                        list="areas"
                        required
                      />
                      <datalist name="areas" required>
                        <option value="Jubilee hills">Jubilee hills</option>
                        <option value="Banjara hills">Banjara hills</option>
                        <option value="Kukatpally">Kukatpally</option>
                        <option value="Gachibowli">Gachibowli</option>
                      </datalist>

                      {/* <select name="cars" id="areaId" required>
                        <option value="Jubilee hills">Jubilee hills</option>
                        <option value="Banjara hills">Banjara hills</option>
                        <option value="Kukatpally">Kukatpally</option>
                        <option value="Gachibowli">Gachibowli</option>
                      </select> */}
                    </Form.Group>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Your Pack</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          value={Data.product_name}
                          {...register("address", {
                            required: "Required",
                          })}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>
                  </Form.Row>

                  <Form.Row>
                    {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Land mark</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Land mark"
                        // {...register("mobile", {
                        //   required: "Required",
                        // })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="10"
                        controlId="validationCustom05"
                      >
                        <Form.Label>Remaining Coins</Form.Label>
                        <Form.Control
                          type="text"
                          value={Data.balance}
                          // {...register("address", {
                          //   required: "Required",
                          // })}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid zip.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </fieldset>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Receive tomorrow</Form.Label>
                      <select name="pack" id="pack_receive">
                        <option value="volvo">Yes</option>
                        <option value="saab">No</option>
                      </select>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>
                  {/* <Button onClick={newButton}>New button</Button> */}
                  <Button type="submit" onClick={newButton}>
                    Submit form
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default withAuthenticator(UserDetails);
