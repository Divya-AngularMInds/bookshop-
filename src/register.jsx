import axios from "axios";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
export default function Register() {
    const history = useNavigate()
    const { register, handleSubmit} = useForm();
    const header = { "Access-Control-Allow-Origin": "*" };
    async function onSubmit(data) {
       axios.post(
         "https://6343b8fc2dadea1175abc989.mockapi.io/api/all/User",
         { name: data.userName, password: data.password },
         header
       );
      
        history("/");
        
      
      
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3> Register </h3>
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
       <button type="submit">Register</button>
      </form>
    );
}
