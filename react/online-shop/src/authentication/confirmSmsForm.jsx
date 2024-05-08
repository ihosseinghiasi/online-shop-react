import '../public/css/shop/smsForm.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Countdown from 'react-countdown';

const ConfirmSms = () => {

    const [phoneNumber, setPhoneNumber] = useState(0)
    const [timer, setTimer] = useState(true)
    const [verifyCode, setVerifyCode] = useState(0)
    const navigate = useNavigate()

    let data = {
        code: verifyCode
    }

    useEffect(()=> {
        setPhoneNumber(localStorage.getItem('localPhoneNumber'))
    },[])
    
    async function sendVerifyCode(event) {
        event.preventDefault()
        await axios.post('http://localhost:5000/authentication/setConfirmSms', data)  
        getVerifyCodeStatus()
    }

    async function getVerifyCodeStatus() {
        const status = await axios.get('http://localhost:5000/authentication/getConfirmSms')
        if(status.data.verfiyCodeStatus === true) {
            navigate('/register')
        }
    }
    
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            setTimer(false)
        } else {
          return <span>{minutes}:{seconds}</span>;
        }
      };

    return ( 
        <>
            <div className="registerForm"></div>
            <div className="smsForm">
                <form onSubmit={sendVerifyCode}>
                    <p className="mt-3 phoneNumber"> {phoneNumber} </p>
                    <input type="tel" className="smsText form-control w-75 mt-2" name="code" id="code"
                        onChange={(event)=> setVerifyCode(event.target.value)} />
                    <button type='submit' disabled={!timer} className="btn btn-danger mt-3 align-self-center" id="submitButton">ثبت</button>
                    <div className='d-flex justify-content-end ms-4'>
                        <Countdown date={Date.now() + 120000
                        }
                        renderer={renderer}
                        />
                    </div>

                </form>
            </div>
        </>
     );
}
 
export default ConfirmSms;
