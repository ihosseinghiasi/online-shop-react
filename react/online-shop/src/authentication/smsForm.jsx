import '../public/css/shop/smsForm.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SmsForm = () => {

    const [phoneNumber, setPhoneNumber] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('localPhoneNumber', phoneNumber)
    },[phoneNumber])

    async function sendPhoneNumber(event) {
        let mydata = {
            'phone' : phoneNumber
        }    
        event.preventDefault()
        await axios.post('http://localhost:5000/authentication/smsRequest', mydata)
        navigate('/confirmSmsForm')
    }
    
    return ( 
        <>
            <div class="registerSmsForm"></div>    
            <div class="smsForm">
                <p class="mt-4">شماره همراه</p>
                <form onSubmit={sendPhoneNumber} >
                    <input type="text" class="smsText form-control w-75"
                        placeholder='شماره همراه' name="phone" id="phone"
                        onChange={(phone)=> setPhoneNumber(phone.target.value)} />
                    <button type="submit" class="btn btn-danger mt-4">ارسال پیامک</button>
                </form>
            </div>
        </>
     );
    }
 
export default SmsForm;