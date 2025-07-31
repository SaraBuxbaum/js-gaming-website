function user(namee, pass)
{
    this.name=namee;
    this.password=pass;
}

let arrUser;
let userStorage = localStorage.getItem("user");

    if (userStorage) {
        arrUser = JSON.parse(userStorage);
    }
    
    if (!Array.isArray(arrUser))//null אם זה 
    {
        arrUser = [];
    }

// פונקציית התחברות
function login()  {

    let n = document.getElementById('myname').value;
    let p = document.getElementById('mypass').value;
    let flag = false;

    // לולאה על כל המשתמשים לבדוק אם קיים משתמש עם השם והסיסמה
    for (let i = 0; i < arrUser.length; i++) {
        if (arrUser[i].name == n && arrUser[i].password == p) {
            flag = true;
            sessionStorage.setItem("this user", n); // שמירת שם המשתמש ב-sessionStorage
            break;
        }
    }

    if (flag) {
        window.location = 'menu.html'; return; // הפניה לעמוד תפריט
    } else if (n === "" || p === "") {
        alert("חסרים פרטים...");
    } else {
        alert("👇👇שם משתמש בעל סיסמא כזו לא קיים במערכת...אנא הרשם");
    }
}

// פונקציית הרשמה
function signUp () {
    
    let name = document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let codea = document.getElementById("codea").value;

    if (name === "" || code === "" || codea === "") {
        alert("חסרים לך פרטים...");
        return;
    }

    if(code!=codea)
    {
         alert("אימות סיסמא לא תואם סיסמא אנא אמת שוב"); return;
    }
       
    // בדיקת שם משתמש קיים
    for (let i = 0; i < arrUser.length; i++) {
        if(arrUser[i].password==code && arrUser[i].name==name)//כבר קיים שם משתמש כזה עם אותה ססמא
        {
         alert("כבר קיים משתמש זהה עם סיסמא כזו. שנה שם או סיסמא");
         return;
        }
    }

    // הוספת משתמש חדש
    let newUser = new user(name,code);
    arrUser.push(newUser); // הוספת המשתמש למערך
    localStorage.setItem("user", JSON.stringify(arrUser));
    alert("לחץ על חזרה להתחברות, והתחבר בשם המשתמש החדש שלך");

    // איפוס השדות לאחר ההרשמה
    document.getElementById("name").value = "";
    document.getElementById("code").value = "";
}


conect=()=>
{
    window.location="../HTML/conect.html" 
}

function thanks()
{
    let a=document.getElementById("name").value;
    let b=document.getElementById("sub").value;
    let c=document.getElementById("pel").value;
    if(a!="" && b!="" && c!="")
    alert("תודה על המשוב/הערה, נשתדל לטפל בפניה בהקדם")
    else
    alert("חסרים פרטים...")
}

function neww()
{
   document.getElementById("in").hidden=true;
   document.getElementById("up").hidden=false;
}
function old()
{
    document.getElementById("in").hidden=false;
    document.getElementById("up").hidden=true;
}

