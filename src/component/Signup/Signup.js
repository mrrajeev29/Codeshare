import react from "react";
import { Link } from "react-router-dom";
import "./signup.css"
const Signup=()=>{
    return(
        <> 
        <div id="parents"> 
            <div id="child">
                <form action="/page">
                    <div id="schild">
                        <h1>Sign up</h1>
                        <div id="signup">
                            <i class="fa fa-envelope"></i>
                            <input type="email" placeholder="Enter Your Gmail" required />
                        </div>
                        <div id="signup">
                            <i class="fa fa-user"></i>
                            <input type="text" placeholder="Enter Your Name" required/>
                        </div>
                        <div id="signup">
                            <i class="fa fa-lock"></i>
                            <input type="password" id="pass" placeholder="Enter password" required/>
                            <i class="fa fa-eye-slash" id="eyebtn" onClick={hidePass} style={{display:"none"}}></i>
                            <i class="fa fa-eye" id="close-eyebtn" onClick={showPass}  ></i>
                        </div>
                    </div>
                    <div id="schild">
                        <button id="Sbtn" >Sign up</button>
                        <p>Already Registered?&emsp;&emsp;<Link to="/" id="llogin">login</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Signup 
 
function showPass()
{
    document.getElementById("close-eyebtn").style.display="none";
    document.getElementById("eyebtn").style.display="flex";
    document.getElementById("pass").type="text";
}
function hidePass()
{
    document.getElementById("close-eyebtn").style.display="flex";
    document.getElementById("eyebtn").style.display="none";
    document.getElementById("pass").type="password";
}