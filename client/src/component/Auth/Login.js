import Dropdown from '../../assets/dropdown.svg'
import CryptoJS from 'crypto-js'

import React, {useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/twitter--v1.png'
import { toast } from "react-toastify";
import styled from 'styled-components';
import {login , cleanErrors} from '../../actions/user.action'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, isAuthenticated, error } = useSelector(state => state.auth)

    const [user,setUser] = useState({
        password:'',
        username:''
    })
    const { username, password} = user


    useEffect(()=>{

        if(isAuthenticated){
            // navigate('/')
            console.log('isAuthenticated: ',isAuthenticated)
        }

        if(error){
            console.log(error)
            dispatch(cleanErrors())
        }
    } , [dispatch, isAuthenticated, error] )

    const submitHandler = (e) =>{
        e.preventDefault();
        
        let loginData = {
            username , password
        }

        console.log(loginData)
        dispatch(login(loginData))
       
    }

    const onChange = e =>{
        setUser({...user , [e.target.name]: e.target.value })
    }

    
  return (
    <DivContainer>

        <Box className="box box-two">
            <i className="fab fa-twitter"><img src={Logo}/></i>
            <form onSubmit={submitHandler}>
                

                <Input 
                    type="text" 
                    placeholder="Username or Email"
                    name='username'
                    value={username}
                    onChange={onChange}
                    
                />


                <Input 
                    type="text" 
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={onChange}
                />
                
                

                <NextButton 
                    type="submit"
                    disabled = {loading ? true : false}
                > 
              
                    Login 
                </NextButton>

            </form>
            
            <Button> Do not have an account? Register </Button>
        </Box>
        
    </DivContainer>
  )
}

export default Login

const Button = styled.button`
    width: 300px;
    height: 40px;
    background-color: #fff;
    outline: none;
    border: 1px solid rgb(211, 210, 210);
    border-radius: 20px;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    margin-top:10px;
    margin-bottom:10px;
`;

const NextButton = styled.button`
    width: 300px;
    height: 40px;
    outline: none;
    font-weight: bold;
    border: 1px solid rgb(211, 210, 210);
    border-radius: 20px;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    background-color: #121212;
    color: #fff;
    margin-top:30px;
    margin-bottom:10px;
    
`;

const DivContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    width: 450px;
    height: 550px;
    border-radius: 20px;
    box-shadow: 5px 5px 20px 1px rgb(110, 110, 110, .2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
`

const Input = styled.input`

    width: 300px;
    height: 40px;
    outline: none;
    border: 1px solid rgb(211, 210, 210);
    border-radius: 15px;
    padding-left: 10px;
    margin-bottom:10px;
    

`

const Box = styled.div`
    width: 300px;
    height: 370px;
    flex-direction: column;
    justify-content: space-evenly;

    & i {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
` 