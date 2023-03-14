import Dropdown from '../../assets/dropdown.svg'
import CryptoJS from 'crypto-js'

import React, {useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/twitter--v1.png'
import { toast } from "react-toastify";
import styled from 'styled-components';
import {register , cleanErrors} from '../../actions/user.action'

function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, isAuthenticated, error } = useSelector(state => state.auth)

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        username:''
    })
    const {name , username, email , password} = user


    useEffect(()=>{

        // if(isAuthenticated){
        //     navigate('/')
        // }

        if(error){
            console.log('error')
            dispatch(cleanErrors())
        }
    } , [dispatch, isAuthenticated, error] )

    const submitHandler = (e) =>{
        e.preventDefault();

        let registerData ={ name, username, email, password } 

        dispatch(register(registerData))
        {console.log(registerData)}
    }

    const onChange = e =>{
        setUser({...user , [e.target.name]: e.target.value })
    }

    
  return (
    <DivContainer>

        <Box class="box box-two">
            <i class="fab fa-twitter"><img src={Logo}/></i>
            <form onSubmit={submitHandler}>
                <Input 
                    type="text" 
                    placeholder="Full Name" 
                    name='name'
                    value={name}
                    onChange={onChange}
                    
                />

                <Input 
                    type="text" 
                    placeholder="Username"
                    name='username'
                    value={username}
                    onChange={onChange}
                    
                />

                <Input 
                    type="text" 
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}
                />

                <Input 
                    type="text" 
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={onChange}
                />
                
                <Input 
                    type="text" 
                    placeholder="Confirm Password"/> 

                <NextButton 
                    type="submit"
                    disabled = {loading ? true : false}
                > 
              
                    Register 
                </NextButton>

            </form>
            
            <Button> Do have an account? Login </Button>
        </Box>
        
    </DivContainer>
  )
}

export default Register

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