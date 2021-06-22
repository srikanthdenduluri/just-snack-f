import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Product, Subscribe } from "./models";
import { useForm } from "react-hook-form";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

function UserDetails() {
  <br></br>;
  <br></br>;
  <br></br>;
  <br></br>;
  const product = { title: "hi bro", description: "you are good", cost: "500" };

  // const myfunc = async () => {
  //   const pr = await DataStore.save(new Subscribe(onSubmit.data));
  //   console.log(pr);
  // };
  // const product = { title: "hi bro", description: "you are good", cost: "500" };

  // const myfunc = async () => {
  //   const temp = await DataStore.query(Product, (c) =>
  //     c.title("eq", "srikanth")
  //   );
  //   console.log(temp);
  // };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    await DataStore.save(new Subscribe(data));
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

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
                  <h2 class="py-3">Delivery address</h2>
                  <p>
                    Tation argumentum et usu, dicit viderer evertitur te has. Eu
                    dictas concludaturque usu, facete detracto patrioque an per,
                    lucilius pertinacia eu vel.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-8 py-5 border">
              <h4 class="pb-4">Please fill with your details</h4>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      id="Full Name"
                      placeholder="Full Name"
                      class="form-control"
                      type="text"
                      {...register("full_name", {
                        required: "Required",
                      })}
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      {...register("email", {
                        required: "Required",
                      })}
                    ></input>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      id="Mobile No."
                      placeholder="Mobile No."
                      class="form-control"
                      required="required"
                      type="text"
                      {...register("mobile", {
                        required: "Required",
                      })}
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <select
                      id="inputState"
                      class="form-control"
                      {...register("area", {
                        required: "Required",
                      })}
                    >
                      <option selected>Choose ...</option>
                      <option> New Buyer</option>
                      <option> Auction</option>
                      <option> Complaint</option>
                      <option> Feedback</option>
                    </select>
                  </div>
                  <div class="form-group col-md-12">
                    <textarea
                      id="comment"
                      cols="40"
                      rows="5"
                      class="form-control"
                      {...register("address", {
                        required: "Required",
                      })}
                    ></textarea>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck2"
                          required
                        ></input>
                        <label class="form-check-label" for="invalidCheck2">
                          <small>
                            By clicking Submit, you agree to our Terms &
                            Conditions, Visitor Agreement and Privacy Policy.
                          </small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <button
                    type="button"
                    class="btn btn-danger"
                    // onClick={myfunc}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </button>
                  <AmplifySignOut />
                  {/* {product.map((product) => {
                    <h1>product.title</h1>;
                  })} */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withAuthenticator(UserDetails);
