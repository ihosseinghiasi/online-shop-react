import '../public/css/shop/smsForm.css'

const ConfirmSms = () => {
    return ( 
        <>
            <div class="registerForm"></div>
            <div class="smsForm">
                <form action="/authentication/smsConfirm" method="POST">
                    <p class="mt-4 phoneNumber">  </p>
                    <input type="tel" class="smsText form-control w-75 mt-5" name="code" id="code" />
                    <div timer id='timer' class="timer" name="timer"></div>
                    <button class="btn btn-danger mt-2" id="submitButton">ثبت</button>
                </form>
            </div>
        </>
     );
}
 
export default ConfirmSms;
