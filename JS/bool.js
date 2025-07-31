let arr=["white","yellow" ,"orange", "red","pink", "green", "blue","gray"]
let newArr=[" "," "," "," "];
let brr=[0,0,0,0];
let r=0,c=0,i,k=0,ch=1;
let btn;
let index;

function startGame()
{
    document.getElementById("mydiv").innerHTML="";//שורה זו-חובה לפתיחת משחק חדש 
    //לולאה שיוצרת לי את המערך המרונדל של 4 הצבעים הנבחרים
    for(i=0; i<newArr.length; )
        {
            index=Math.floor(Math.random()*arr.length)
            flag=true;

            for(j=0; j<i; j++)
                {
                    if(arr[index]==newArr[j])
                        {
                            flag=false;
                            break;
                        }
                }
                if(flag)
                    {
                        newArr[i]=arr[index];
                        i++
                    }
        }
        
        //יצירת הכפתורים לניחושים
        for(i=0; i<7; i++)
            {
                for(let j=0; j<4; j++)
                    {
                        btn= document.createElement('button')
                        btn.style.height='70px'
                        btn.style.width='80px'
                        btn.style.fontSize="150%"
                        btn.style.backgroundColor="white"
                        btn.style.borderColor="white"
                        btn.setAttribute('id',i+" "+j)
                        document.getElementById('mydiv').appendChild(btn)
                    }
                    let br=document.createElement('br');
                    document.getElementById('mydiv').appendChild(br);
            }
            let br=document.createElement('br');
            document.getElementById('mydiv').appendChild(br);

     //לולאה שיוצרת לי את  הצבעים
    for(i=0; i<arr.length; i++)
    {
        let c=arr[i]  //הצבע
        let btn= document.createElement('button')
        btn.style.height='50px'
        btn.style.width='80px'
        btn.innerHTML=c;
        btn.style.fontSize="90%"
        btn.style.backgroundColor=c
        btn.style.borderWidth="1px"
        btn.style.borderColor="white"
        btn.setAttribute('id',i)
        btn.setAttribute('onclick',"check()")    
        document.getElementById('mydiv').appendChild(btn)
    }
    
}

function check()
{
    ch=1;
   if(r==6 && c==4)
    alert("the game is over ☹️☹️ \n הצבעים הם: "+newArr[0]+" "+newArr[1]+" "+newArr[2]+" "+newArr[3]) 
   else
   {
    if(c==4)
        {
            c=0;
            r++;
            k++; //מספר הנסיונות
        }
    let click=event.srcElement.innerHTML;
    let b=document.getElementById(r+" "+c)
    if(click==newArr[c]) //הלחיצה היא בול
        {
            b.innerHTML="v"
            brr[c]=1;
        }
    else  //הלחיצה- פגיעה או אין את הצבע בכלל
    {
        ch=0
        for(i=0; i<newArr.length; i++)
            {
                if(newArr[i]==click)  //אם הצבע קיים אך לא באותו מקום
                    {
                        b.innerHTML="-"
                        break;
                    }

            }
        if(i==newArr.length)  //לא מצאנו את הצבע במערך הצבעים המרונדלים אז אין אותו בכלל
            b.innerHTML="x"

    }
    b.style.backgroundColor=click;
    c++;
    for(i=0; i<brr.length; i++)
        {
            if(brr[i]!=1)
                break;
        }
        if(i==brr.length && ch==1 && c==4){
            alert(" 🤗🤗 כל הכבוד הצלחת לנחש נכון ! ומספר הנסיונות הוא"+" "+ (k+1)+ " \n למשחק חדש רענן עמוד")

            //הגבלת הלחיצה על הכפתורים לאחר שיש נצחון
            for(i=0; i<arr.length; i++)
                {
                    for(let j=0; j<newArr.length; j++)
                        {
                            let x=document.getElementById(i+" "+j)
                            x.disabled=true;
                        }
                    let e=document.getElementById(i)
                    e.disabled=true;
                }
        }
   }
}
