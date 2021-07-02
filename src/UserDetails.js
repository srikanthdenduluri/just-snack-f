import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Subscribe } from "./models";
import { useForm } from "react-hook-form";
import { useState } from "react";
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

  // const myfunc = async () => {
  //   const pr = await DataStore.save(new Subscribe(onSubmit.data));
  //   console.log(pr);
  // };
  // const product = { title: "hi bro", description: "you are good", cost: "500" };

  // const myfunc = async () => {
  // const temp = await DataStore.query(Subscribe, (c) =>
  //   c.user_id("eq", Auth.user.username)
  //   );
  //   console.log(temp);
  // };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    data["user_id"] = Auth.user.username;
    const no_of_packs = document.getElementById("no_of_packs").value;
    const balance = document.getElementById("balance").value;
    data["number_of_products"] = parseInt(no_of_packs);
    data["balance"] = parseInt(balance);
    data["is_purchased"] = true;

    console.log("Original data", data);
    const pr = await DataStore.save(new Subscribe(data));
    console.log("DB data: ", pr);
    console.log(Auth);
    console.log(Auth.user.username);
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

  return isLoggedIn ? (
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
                    <h2 class="py-3">User Details</h2>
                    <p>
                      Tation argumentum et usu, dicit viderer evertitur te has.
                      Eu dictas concludaturque usu, facete detracto patrioque an
                      per, lucilius pertinacia eu vel.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-8 py-5 border">
                <h4 class="pb-4">Please fill with your details</h4>
                <Form validated={validated} onSubmit={handleSubmit(onSubmit)}>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>Full name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Full name"
                        {...register("full_name", {
                          required: "Required",
                        })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        {...register("Last name", {
                          required: "Required",
                        })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}
                    <Form.Group as={Col} md="4" controlId="formHorizontalEmail">
                      <Form.Label>Email</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          required
                          {...register("email", {
                            required: "Required",
                          })}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a Email.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Mobile"
                        {...register("mobile", {
                          required: "Required",
                        })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Address"
                        {...register("address", {
                          required: "Required",
                        })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Land mark</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Land mark"
                        // {...register("mobile", {
                        //   required: "Required",
                        // })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Area</Form.Label>
                      <input
                        type="text"
                        list="areas"
                        required
                        {...register("area", {
                          required: "Required",
                        })}
                      />
                      <datalist name="areas" id="areas">
                        <option>Jubilee hills</option>
                        <option>Banjara hills</option>
                        <option>Kukatpally</option>
                        <option>Gachibowli</option>
                      </datalist>

                      {/* <select name="cars" id="cars" required>
                      <option value="">None</option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select> */}
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <fieldset disabled class="fieldset">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                      >
                        <Form.Label htmlFor="disabledTextInput">
                          City
                        </Form.Label>
                        <Form.Control
                          id="disabledTextInput"
                          type="text"
                          placeholder="Hyderabad"
                        />
                      </Form.Group>
                    </fieldset>

                    <fieldset disabled>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom04"
                      >
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Telangana" />
                      </Form.Group>
                    </fieldset>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Coordinates</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.x : 17.41205670611315, 78.45464294114909"
                        // {...register("mobile", {
                        //   required: "Required",
                        // })}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    {/* <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Zip"
                        required
                        // {...register("address", {
                        //   required: "Required",
                        // })}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group> */}
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                      <Form.Label>Pack Confirmation</Form.Label>
                      <select
                        name="allpacks"
                        id="allpacks"
                        {...register("product_name", {
                          required: "Required",
                        })}
                        required
                      >
                        <option value="surpriseme">Surprise Me</option>
                        <option value="normal">Normal</option>
                      </select>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom02">
                      <Form.Label>No.of Packs</Form.Label>
                      <select
                        name="packvalue"
                        id="no_of_packs"
                        // {...register("number_of_products", {
                        //   required: "Required",
                        // })}
                        required
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom02">
                      <Form.Label>Pack Value</Form.Label>
                      <Col sm="14">
                        <Form.Control
                          plaintext
                          readOnly
                          id="balance"
                          defaultValue="2999"
                          {...register("balance", {
                            required: "Required",
                          })}
                        />
                      </Col>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  {/* <Form.Row>
                    <Form.Group as={Col} controlId="">
                      <Form.Label>Area</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Form.Row> */}

                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>
                  <Button type="submit">Submit form</Button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
}

export default withAuthenticator(UserDetails);
