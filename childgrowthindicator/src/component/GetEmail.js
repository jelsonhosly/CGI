export default function EmailGet()
{
    return(
        <div class="emailbody">
            <div >
                <nav class="emailnav"></nav>
            <div>

            <div class="mainEmail">
                <div class="babyImage"></div>
                    
                <div class="getemailback">
                <h3 class="forgotpassword">Forgot Password</h3>
                <form>
                    <br></br>
                <label class="emailadd">E-mail</label><br></br><br></br>
                <input type="text" value="email" class="emailtype"></input><br></br><br></br><br></br>
                <input type="button" value="send OTP" class="emailsentbtn" ></input><br></br>
                </form>
                </div>

            </div>
            </div>
            <footer class="emailfooter">
            </footer>
            </div>
            
        </div>      
    );
}