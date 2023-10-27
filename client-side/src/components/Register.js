import React,{useState} from 'react'
import "./Register.css"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


export default function Register() {

  const navigate = useNavigate();
  

    const [data, setData] = useState({
        firstName: '',
        lastName :'',
        email : '',
        password: ''
    })
    const [error, setError] = useState("");
   
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
		try { 
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
    <div className='register'>
     
        <h1>register</h1>
        <form onSubmit={(e) => handleSubmit(e)} >
        <input type='text' name='firstName' value={data.firstName} placeholder='your firstname' onChange={handleChange}></input>
        <input type='text' name='lastName' value={data.lastName} placeholder='your lastname' onChange={handleChange}></input>
        <input type='text'  name='email' value={data.email} placeholder=' your email' onChange={handleChange}></input>
        <input type='password'  name='password' value={data.password} placeholder='your password' onChange={handleChange}></input>
        <button type="submit" >
							Sing Up
						</button>
						</form>	
        <div>or</div>
        <Link to="/login">
						<button className='button'>
							Sing in
						</button>
					</Link>
     
    </div>
  )
}
