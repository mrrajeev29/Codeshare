import react from "react";
import { Link } from "react-router-dom";
import "./login.css"




const Login=()=>{
    return(
        <>
        <div id="parents"> 
            <div id="child">
                <form action="\page">
                    <div id="schild">
                        <h1>Login</h1>
                        <div id="login">
                            <i class="fa fa-envelope"></i>
                            <input type="email" placeholder="Enter Registered Gmail" required/>
                        </div>
                        <div id="login">
                            <i class="fa fa-lock"></i>
                            <input type="password" id="pass" placeholder="Enter password" required/>
                            <i class="fa fa-eye-slash" id="eyebtn" onClick={hidePass} style={{display:"none"}}></i>
                            <i class="fa fa-eye" id="close-eyebtn" onClick={showPass}></i> 
                        </div>
                        
                    </div>
                    <div id="schild">
                        <button id="Sbtn">Log in</button>
                        <p>New User?&emsp;&emsp;<Link id="slink" to="/signup">sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login 
 
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