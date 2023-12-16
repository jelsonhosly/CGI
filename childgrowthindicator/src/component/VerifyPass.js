export default function PasswordChange()
{
    return(
        <div>
            <div class="nav"></div>

            <div class="verifyBody">

            <div class="body">
                <h3 class="verify">Verify</h3>
            <h3 class="sendOTPMsg">We have send the OTP via your email, please enter the code in the column below</h3>
            <form>
                <div class="code">
                    <input type="text" class="no1"></input>
                    <input type="text" class="no1"></input>
                    <input type="text" class="no1"></input>
                    <input type="text" class="no1"></input>
                </div>
                <p class="dontreceive">if you don’t receive a code</p>
                <input type="button" value="Re-send code" class="resend"></input><br></br><br></br><br></br>
                <input type="button" value="Next" class="nextbtn"></input>
            </form>
            
            
        </div>
        </div>
        <footer class="footer"></footer>
       </div>
    );
}


