import react ,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./page.css"

window.onresize=function()
{
    document.getElementById("i4").style.width=window.innerWidth+"px";
   // document.getElementById("Pchild2").style.height=window.innerHeight+"px";

    if(window.innerWidth>900)
    {
        document.getElementById("i4").style.display="none";
        document.getElementById("i5").style.display="none";
        document.getElementById("Pchild1").style.marginTop="5rem";

    }
    if(window.innerWidth<=900)
    {
       document.getElementById("mNav1").style.display="flex";
        document.getElementById("mNav2").style.display="none";
        document.getElementById("i4").style.display="none";
        document.getElementById("i5").style.display="none";

        document.getElementById("Pchild1").style.marginTop="5rem";
    }
}

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<h1 className="text">
			{isReadMore ? text.slice(0, 325) : text}
			<span
				onClick={toggleReadMore}
				className="read-or-hide"
				style={{ color: "red" }}
			>
				{isReadMore ? "...read more" : " show less"}
			</span>
		</h1>
	);
};

const Page=()=>{
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

      
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
                    <div><i class="fa fa-home"></i></div>
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


                <div id="Pchild1">
                    <div id="ansDiv">
                        <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>
                    </div>
                    <div id="ansDiv">
                    <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>                  
                    </div>
                    <div id="ansDiv">
                    <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>
                    </div>
                    <div id="ansDiv">
                    <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>
                    </div>
                    <div id="ansDiv">
                    <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>
                    </div>
                    <div id="ansDiv">
                    <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>
                    </div>
                    <div id="ansDiv">
                    <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>
                    </div>
                    <div id="ansDiv">
                    <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>
                    </div>
                    <div id="ansDiv">
                    <ReadMore>The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.The component allows you to set the maximum number of lines you want to display, and will automatically add an ellipsis if the text exceeds the specified number of lines. It also supports customizing the ellipsis character and provides additional options for handling word breakage and trimming.</ReadMore>
                        <div id="Qbtn">
                            <Link to="/showcode"><button><i class="fa fa-code"></i>&emsp;code</button><br/></Link>
                            <Link to="/showcode"><button><i class="fa fa-commenting-o"></i>&emsp;Add Comment.</button><br/></Link>
                        </div>
                    </div>
                </div>
 




                <div id="Pchild2">
                    <div id="rChild">
                        <div id="sBar">
                            <input type="text" id="sInp" placeholder="Search" />
                            <i id="sIcon" class="fa fa-search"></i>
                        </div>
                        <Link to="/profile"><button id="Pbtn"><i class="fa fa-user-o"></i>&emsp;profile</button></Link>
                        <Link to="/yourcode"><button id="Pbtn"><i class="fa fa-code"></i>&emsp;Your Code</button></Link>
                        <button id="Pbtn" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}><i class="fa fa-arrow-up"></i>&emsp;Go to Top</button>
                        <Link to="/addnew"><button id="Pbtn"><i class="fa fa-plus">&emsp;</i>Add new code</button></Link>
                    </div>
                </div>
            </div>






        </div>
        </>
    )
}
export default Page

function showIcon()
{
    document.getElementById("mNav1").style.display="none";
    document.getElementById("mNav2").style.display="flex";
    document.getElementById("i4").style.display="flex";
    document.getElementById("Pchild1").style.marginTop="10rem";
}


function hideIcon()
{
    document.getElementById("i5").style.display="none";
    document.getElementById("mNav2").style.display="none";
    document.getElementById("mNav1").style.display="flex";
    document.getElementById("i4").style.display="none";
    document.getElementById("Pchild1").style.marginTop="5rem";
}





function hideNavSearch()
{
    if(document.getElementById("i5").style.display=="flex" & document.getElementById("sBar").style.display=="flex")
    {
        document.getElementById("i5").style.display="none";
        document.getElementById("Pchild1").style.marginTop="10rem";

    }
    else{
        document.getElementById("i5").style.marginTop="10rem";
        document.getElementById("i5").style.display="flex";
        document.getElementById("sBar").style.display="flex";
        document.getElementById("pBar").style.display="none";
        document.getElementById("Pchild1").style.marginTop="15rem";

    }

    
}


function hideNavProfile()
{

    if(document.getElementById("i5").style.display=="flex" & document.getElementById("pBar").style.display=="flex" )
    {
        document.getElementById("i5").style.display="none";
        document.getElementById("Pchild1").style.marginTop="10rem";

    }
    else
    {
        document.getElementById("i5").style.marginTop="10rem";
        document.getElementById("i5").style.display="flex";
        document.getElementById("pBar").style.display="flex";
        document.getElementById("sBar").style.display="none";
        document.getElementById("Pchild1").style.marginTop="15rem";

    }


    
}
