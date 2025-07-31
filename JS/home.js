
window.onload = function() {
    debugger;
     // הצגת הפופ-אפ-כניסה לאתר בעת רענון העמוד
     document.getElementById('popup').style.display = 'flex';
     document.getElementById('up').hidden=true;
     // כפתור הסגירה
     document.getElementById('close-btn').onclick = function() {
         document.getElementById('popup').style.display = 'none';
     };  
    
 };
 

