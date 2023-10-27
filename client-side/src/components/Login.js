import React,{useState} from 'react'
import "./Login.css"
import axios from 'axios'
import { Link } from "react-router-dom";

export default function Login() {

  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};



  return (
    <div className='login'>
      
        <h1>login</h1>
		<form onSubmit={(e) => handleSubmit(e)}>
        <input type='text'  name='email' value={data.email} placeholder='your email' onChange={handleChange}></input>
        <input type='password'  name='password' value={data.password} placeholder='your password' onChange={handleChange}></input>
        <button type="submit" >
							Sing In
						</button>
						</form>
        <div>or</div>
        <Link to="/register">
						<button type="button">
							Sing Up
						</button>
					</Link>
					
    </div>
  )		
}
