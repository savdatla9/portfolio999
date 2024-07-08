import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

import { toast } from 'react-toastify';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
        
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';

import { auth } from '../data';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [cpass, setCPass] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if(window.location.pathname==='/login'){
      setIsSignup(false);
    }else{
      setIsSignup(true);
    };
  }, []);

  const validateEmail = (value) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
      return (true);
    }else{
      return (false);
    };
  };

  const header = <div className="font-bold mb-3">Pick a password</div>;

  const footer = (
    <>
      <br style={{border: '1px solid'}} />

      <p className="mt-2">Suggestions</p>

      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        if(email!=='' && validateEmail(email) && password!==''){
          await createUserWithEmailAndPassword(auth, email, password);
          
          setInvalid(false);

          toast.success("SignUp Done!", {
            position: "top-right", delay: 1000 
          });
        }else{
          setInvalid(true);

          toast.warning("please fill vaild details", {
            position: 'top-right',
          });
        };
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          toast.success("Log In Successful", {
            position: "top-right", delay: 1000 
          });
        }).catch((err) => {
          if(err.code==='auth/invalid-credential'){
            toast.error("Log In Failed, Please Enter Valid Details", {
              position: "top-right", delay: 1000 
            });
          }else if(err.code==='auth/network-request-failed'){
            toast.error("Log In Failed, Please check Internet Service", {
              position: "top-right", delay: 1000 
            });
          }else{
            toast.error("Log In Failed, Please Contact Me", {
              position: "top-right", delay: 1000 
            });
          };
        }); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChng = () => {
    setIsSignup(!isSignup); 
    
    if(isSignup===false){
      navigate('/signup');
    }else{
      navigate('/login');
    };
  };

  return (
    <Container>
      <Row>
        <Col xs={12} style={{paddingTop: '15vh'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>

            <form onSubmit={handleSubmit}>
              <div style={{width: '75%', paddingLeft: '15%'}}>
                <label htmlFor='email'>Email Id: <span style={{color: 'red'}}>*</span></label>

                <InputText 
                  value={email} placeholder='Enter Email Id' type='email'
                  onChange={(e) => setEmail(e.target.value)} id='email'
                />

                {(invalid===true && email==='') && <p style={{color: 'red'}}>Please Enter Validate Email Address</p>}
              </div>

              <div style={{marginTop: '1.5vh', width: '75%', paddingLeft: '15%'}}>
                <label htmlFor='pass'>{isSignup ? 'New Password :' : 'Password :'} <span style={{color: 'red'}}>*</span></label>

                <Password 
                  value={password} toggleMask header={header} footer={footer}
                  onChange={(e) => setPassword(e.target.value)} id='pass'
                  placeholder={isSignup ? 'Enter New Password' : 'Enter Password'}
                />

                {(invalid===true && password==='') && <p style={{color: 'red'}}>Please Enter valid Password</p>}
              </div>

              {isSignup && <div style={{marginTop: '1.5vh', width: '75%', paddingLeft: '15%'}}>
                <label htmlFor='cpass'>Confirm Password: <span style={{color: 'red'}}>*</span></label>

                <Password 
                  value={cpass} toggleMask feedback={false}
                  placeholder='Enter Confirm Password' id='cpass'
                  onChange={(e) => setCPass(e.target.value)}
                />

                {(password.length<!cpass.length && password.length>!cpass.length) ? <p style={{color: 'red'}}>Both Passwords must be same</p> : ''}
              </div>}

              <div style={{textAlign: 'center', marginTop: '2.5vh'}}>
                <Button label={isSignup ? 'Sign Up' : 'Log In'} severity="info" type='submit' style={{borderRadius: '10px'}} />
              </div>
            </form>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: '2.5vh'}}>
              <span>
                {isSignup ? 'Already have an account?' : "Don't have an account?"}
              </span>

              <p onClick={handleChng} style={{color: '#ffb900', marginLeft: '10px', fontSize: '24px', marginTop: '-7.5px'}}>
                {isSignup ? 'Log In' : 'Sign Up'}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;