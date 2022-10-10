import { useForm } from "react-hook-form";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import UserData from "./user.js";
import { changeUserName } from "./store";
import { useDispatch } from "react-redux";
import axios from "axios";
import { forEach } from "lodash";
import { useState } from "react";
export default function Login() {
  const [show, setShow] = useState(false)
  const { register, handleSubmit, setFocus } = useForm();
  const history = useNavigate();
  const dispatch = useDispatch();
  async function onSubmit(data) {
    const logins = await axios.get(
      "https://6343b8fc2dadea1175abc989.mockapi.io/api/all/User"
      );
    console.log(logins.data);
    let IsAvailable = logins.data.find((i) => {
      if (i.name === data.userName && i.password === data.password) {
        return true
      }
       
      })
      console.log(typeof IsAvailable);
    if (IsAvailable) {
        console.log(IsAvailable)
        history("/home");
        dispatch(changeUserName(data.userName));
      }
      else {
        console.log('ko');
        setShow(prevState => !prevState)
    }   
    // UserData.map((i) => {
    //   if (i.userName === data.userName && i.password === data.password) {
    //     history("/home");
    //     dispatch(changeUserName(data.userName));
    //   }
    // });
  }
  function toggle(){
    setShow(prevState => !prevState)
  }

  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3> Login </h3>
        <input
          required
          {...register("userName", {
            required: "This is required",
            maxLength: 20,
          })}
        />
        <input
          {...register("password", {
            required: "this is required",
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <input type="submit" />
        {show && (
          <Link to={"/register"}>
            <button onClick={toggle}>Register</button>
          </Link>
        )}
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </>
  );
}
