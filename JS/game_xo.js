let arr0=[0,1,2];
let arr1=[3,4,5];
let arr2=[6,7,8];
let sara=0, count=0;
let tor='o';
const startgame=document.getElementById('btn');
startgame.addEventListener('onclick',start);

function start()
{
    document.getElementById("game").innerHTML="";
    arr0=[0,1,2];
    arr1=[3,4,5];
    arr2=[6,7,8];
    sara=0; count=0;
    tor='o';
    document.getElementById('game').innerHTML = ''; 

    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            let btn= document.createElement('button');
            btn.style.height='160px';
            btn.style.width='160px';
            btn.style.color='black';
            btn.innerHTML="x/o"
             btn.style.borderColor="white"
            btn.style.borderBottomColor="black"
            btn.style.fontSize='50px';
        
            btn.setAttribute('onclick',"check()");
            btn.setAttribute('id',i+" "+j)
            btn.setAttribute('data-i', i);
            btn.setAttribute('data-j', j);
            document.getElementById('game').appendChild(btn);
        }
        let br=document.createElement('br');
        document.getElementById('game').appendChild(br);
    }
    document.getElementById('tor').innerHTML="Now it's O's turn"
}

function check()
{
    let elementClick= event.srcElement;
    elementClick.innerHTML=tor;
    elementClick.setAttribute('disabled',"true");

    let i=elementClick.getAttribute('data-i');
    let j=elementClick.getAttribute('data-j');
    if(i==0)
    arr0[j]=tor;
    else if(i==1)
    arr1[j]=tor;
    else
    arr2[j]=tor;

    if(tor=='o')
    {
        document.getElementById('tor').innerText="Now it's X's turn" 
        tor='x';
        count++;
    }
   
    else
    {
        document.getElementById('tor').innerHTML="Now it's O's turn"
        tor='o';
        count++;
    }
    

    if(arr0[0]==arr0[1] && arr0[1]==arr0[2]){
        alert("ניצחון שורה ראשונה");
        sara=1;
    }
    
    else if(arr1[0]==arr1[1] && arr1[1]==arr1[2]){
          alert("ניצחון שורה שניה");
          sara=1;
    }
  
    else if(arr2[0]==arr2[1] && arr2[1]==arr2[2]){
          alert("ניצחון שורה שלישית");
          sara=1;
    }
    else if(arr0[0]==arr1[0] && arr1[0]==arr2[0]){
        alert("ניצחון עמודה ראשונה")
        sara=1;
    }
    else if(arr0[1]==arr1[1] && arr1[1]==arr2[1]){
         alert("ניצחון עמודה שניה")
         sara=1;
    }
    else if(arr0[2]==arr1[2] && arr1[2]==arr2[2]){
        alert("ניצחון עמודה שלישית")
        sara=1;
    }
    else if(arr0[0]==arr1[1] && arr1[1]==arr2[2]){
       alert("ניצחון אלכסון ראשי") 
       sara=1;
    }
    else if(arr0[2]==arr1[1] && arr1[1]==arr2[0]){
        alert(" ניצחון אלכסון משני")
        sara=1;
    }
    else if(count==9)
    alert("אין נצחון, מצב טיקו")

    if(sara==1)//אם היה נצחון-- הגבלת הכפתורים
    {
      for(let i=0; i<3; i++)
        {
            for(let j=0; j<3; j++)
                {
                    document.getElementById(i+" "+j).disabled=true;
                }
        }
              
 
    }
}
