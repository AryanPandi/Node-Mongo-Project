function emptycheck(){
    t=event.target.id;
    t=event.target.id;
    if(document.getElementById(t).value==''){
        document.getElementById(t).placeholder="Field cannot be empty";  
        alert('Field cannot be empty')
    }
}
function valid_email(){
    t=event.target.id;
    let d=document.getElementById(t).value;
    let arr=d.split('@').join(',').split('.').join(',').split(',');
    if(arr.length<3){
        document.getElementById(t).value="";
        document.getElementById(t).placeholder="Enter a valid Email Address!!";
        alert("Enter valid Email Address!!");
    }
    if(arr.length==3){
        if(arr[1]=='gmail'|| arr[1]=='yahoo'|| arr[1]=='hotmail'){
            document.getElementById(t).focus;
        }
        else{
            document.getElementById(t).value="";
        document.getElementById(t).placeholder="Enter a valid Email Address!!";
        alert("Enter valid Email Address!!");
        }
    }
    if(arr.length==4){
        if(arr[2]=='ac' && arr[3]=='in'){
            if(arr[1]=='nirmauni' || arr[1]=='pdpu' || arr[1]=='svnit' || arr[1]=='daiict'){
                document.getElementById(t).focus;
            }
            else{
                document.getElementById(t).value="";
        document.getElementById(t).placeholder="Enter a valid Email Address!!";
        alert("Enter valid Email Address!!");
            }
        }
        else{
            document.getElementById(t).value="";
        document.getElementById(t).placeholder="Enter a valid Email Address!!";
        alert("Enter valid Email Address!!");
        }
    }
}

function age_check(){
    t=event.target.id;
    let a=document.getElementById(t).value;
   let ag=parseInt(a);
   if(ag<0 || ag>100){
    document.getElementById(t).value="";
        document.getElementById(t).placeholder="Enter a valid Age!!";
        alert("Enter valid Age!!");
   }
   else{
    document.getElementById(t).focus;
   }
}