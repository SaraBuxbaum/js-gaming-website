function curr()
{ 
    document.getElementById('popupName').style.display='flex'
    document.getElementById('popupName').hidden=false;
}

function logout()
{
    if(sessionStorage.getItem("this user")!=null)
     {   sessionStorage.removeItem("this user");
        alert('התנתקת בהצלחה!');  }
    document.getElementById('popupName').style.display='none'
    document.getElementById('popupName').hidden=true;
    window.location= 'home.html'; // חזרה לעמוד התחברות
}

function cancle()
{
    document.getElementById('popupName').style.display='none'
    document.getElementById('popupName').hidden=true;
}

window.onload = function() {

    document.getElementById('popupName').style.display = 'none';
    let userr=window.sessionStorage.getItem("this user");
    document.getElementById("thisuser").innerHTML= userr; 
};