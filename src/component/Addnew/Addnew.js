import react ,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./Addnew.css"
import { useState } from 'react';

window.onresize=function()
{
    document.getElementById("i4").style.width=window.innerWidth+"px";
    if(window.innerWidth>900)
    {
        document.getElementById("i4").style.display="none";
        document.getElementById("i5").style.display="none";
        document.getElementById("PchildAdd").style.marginTop="5rem";

    }
    if(window.innerWidth<=900)
    {
       document.getElementById("mNav1").style.display="flex";
        document.getElementById("mNav2").style.display="none";
        document.getElementById("i4").style.display="none";
        document.getElementById("i5").style.display="none";

        document.getElementById("PchildAdd").style.marginTop="5rem";
    }
}

const Addnew=()=>{
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);


      const [rows, setRows] = useState([{ id: 1, answer: '' }]);

      const addRow = (id) => {
       // document.getElementById("Adiv").style.marginBottom="20rem";

        setRows([...rows, { id: rows.length + 1, answer: '' }]);
        //if(id>1){
        //document.getElementById("Adiv").style.marginBottom="20rem";
        //}
      };

    
      const removeRow = (id) => {
        if(id==1)
        {
            alert("You can not delete this answer box provide your code in this box first.");
        }
        else{
        setRows(rows.filter((row) => row.id !== id));
        alert("Deleted.")
        }
      };
    
      const handleInputChange = (id, field, value) => {
        setRows((prevRows) =>
          prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
        );
      };


      
    return(
        <>
        <div id="Pparents">
            
            <div id="i1">
                <div id="i2">
                    <h2>Code Share</h2>
                </div>
                
                <div id="i3">
                    <h4>Welcome, Rajeev Ranjan&emsp;&emsp;</h4>
                    <Link to="/" id="LO"><h4>log out&emsp;</h4></Link>
                </div>
                <div  id="mobNav">
                    <i id="mNav1" onClick={showIcon} class="fa fa-navicon"></i>
                    <i id="mNav2"  onClick={hideIcon}  style={{display:"none"}} class="fa fa-times"></i>
                </div>
            </div>




            <div id="parent">

                <div id="i4">
                    <Link to="/page"><div><i class="fa fa-home"></i></div></Link>
                    <div><i id="searchIcon" onClick={()=>{hideNavSearch() }} class="fa fa-search"></i></div>
                    <div><i class="fa fa-user-circle-o" onClick={()=>{hideNavProfile();}}></i></div>
                </div>
                <div id="i5">
                    <div id="sBar" style={{marginTop:"0.75rem"}}>
                        <input type="text" id="sInp" placeholder="Search" />
                        <i id="sIcon" class="fa fa-search"></i>
                    </div>

                    <div id="pBar">
                        <Link to="/profile"><i class="fa fa-user-o"></i></Link>
                        <Link to="/yourcode"><i class="fa fa-code"></i></Link>
                        <Link onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><i class="fa fa-arrow-up"></i></Link>
                        <Link to="/addnew"><i class="fa fa-plus"></i></Link>
                        <Link to="/"><i class="fa fa-sign-out"></i></Link>
                    </div>
                </div>





                <div id="PchildAdd" >
                <h1>Add New Question</h1>
                
                    <div id="Qdiv">
                        <h2>Question : </h2>
                        <textarea required></textarea>
                    </div>
                    {rows.map((row) => (
                    <div id="Adiv" key={row.id}>
                        <h2>Code : </h2>
                        <select required>
                            <option>--select--</option>
                            <option>Python</option>
                            <option>CPP</option>
                            <option>C</option>
                            <option>Java</option>
                            <option>JavaScript</option>
                            <option>Php</option>
                            <option>Kotlin</option>
                        </select><br/><br/>
                        <textarea  value={row.answer}
                    onChange={(e) => handleInputChange(row.id, 'answer', e.target.value)} required></textarea><br/><br/>
                        <button><i class="fa fa-file-code-o">&emsp;</i>Submit</button><br/><br/>
                        <button onClick={()=>addRow(row.id)}><i class="fa fa-plus">&emsp;</i>Add more answer</button><br/><br/>
                        <button type="button" onClick={() => removeRow(row.id)}><i class="fa fa-trash-o"></i>&emsp;Remove</button>
                  
                    </div>
                     ))};
                </div>
               


                <div id="Pchild2">
                    <div id="rChild">
                        <div id="sBar">
                            <input type="text" id="sInp" placeholder="Search" />
                            <i id="sIcon" class="fa fa-search"></i>
                        </div>
                        <Link to="/profile"><button id="Pbtn"><i class="fa fa-user-o"></i>&emsp;profile</button></Link><br/>
                        <Link to="/yourcode"><button id="Pbtn"><i class="fa fa-code"></i>&emsp;Your Code</button></Link><br/>
                        <button id="Pbtn" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><i class="fa fa-arrow-up"></i>&emsp;Go to Top</button><br/>
                        <Link to="/page"><button id="Pbtn"><i class="fa fa-home">&emsp;</i>Go to home</button><br/></Link>
                    </div>
                </div>
            </div>






        </div>
        </>
    )
}
export default Addnew

function showIcon()
{
    document.getElementById("mNav1").style.display="none";
    document.getElementById("mNav2").style.display="flex";
    document.getElementById("i4").style.display="flex";
    document.getElementById("PchildAdd").style.marginTop="10rem";
}


function hideIcon()
{
    document.getElementById("i5").style.display="none";
    document.getElementById("mNav2").style.display="none";
    document.getElementById("mNav1").style.display="flex";
    document.getElementById("i4").style.display="none";
    document.getElementById("PchildAdd").style.marginTop="5rem";
}





function hideNavSearch()
{
    if(document.getElementById("i5").style.display=="flex" & document.getElementById("sBar").style.display=="flex")
    {
        document.getElementById("i5").style.display="none";
        document.getElementById("PchildAdd").style.marginTop="10rem";

    }
    else{
        document.getElementById("i5").style.marginTop="10rem";
        document.getElementById("i5").style.display="flex";
        document.getElementById("sBar").style.display="flex";
        document.getElementById("pBar").style.display="none";
        document.getElementById("PchildAdd").style.marginTop="15rem";

    }

    
}


function hideNavProfile()
{

    if(document.getElementById("i5").style.display=="flex" & document.getElementById("pBar").style.display=="flex" )
    {
        document.getElementById("i5").style.display="none";
        document.getElementById("PchildAdd").style.marginTop="10rem";

    }
    else
    {
        document.getElementById("i5").style.marginTop="10rem";
        document.getElementById("i5").style.display="flex";
        document.getElementById("pBar").style.display="flex";
        document.getElementById("sBar").style.display="none";
        document.getElementById("PchildAdd").style.marginTop="15rem";

    }


    
}
