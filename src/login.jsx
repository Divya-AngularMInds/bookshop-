import { useForm } from "react-hook-form";
import './login.css'
import { useNavigate } from "react-router-dom";
import UserData from './user.js'
import { changeUserName } from "./store";
import { useDispatch } from "react-redux";
export default function Login() {
    const { register, handleSubmit } = useForm();
  const history = useNavigate()
  const dispatch = useDispatch()
    function onSubmit(data) {
        UserData.map((i) => {
            if (i.userName === data.userName && i.password === data.password) {
              history('/home')
              dispatch(changeUserName(data.userName))
            }
        })
        
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
 