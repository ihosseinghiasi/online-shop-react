import '../public/css/shop/smsForm.css'

const SmsForm = () => {
    return ( 
        <>
            <div class="registerForm"></div>    
            <div class="smsForm">
                <p class="mt-4">شماره همراه</p>
                <form action="/authentication/smsRequest" method="POST">
                    <input type="text" class="smsText form-control w-75" name="phone" id="phone"/>
                    <button type="submit" class="btn btn-danger mt-4">ارسال پیامک</button>
                </form>
            </div>
        </>
     );
}
 
export default SmsForm;