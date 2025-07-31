// רשימה של אימוג'ים למשחק
const cards = ["🎉","🎈","🎆","🎊","🎏","🎗️","🎠","🎡","🎭","🎨","🖼️","🩰","👑","🏀","🏉","⛸️","🏸","🏅","🎉","🎈","🎆","🎊","🎏","🎗️","🎠","🎡","🎭","🎨","🖼️","🩰","👑","🏀","🏉","⛸️","🏸","🏅"];
let firstCard = null; // הקלף הראשון שנבחר
let secondCard = null; // הקלף השני שנבחר
let lockBoard = false; // נעילת הלוח למניעת לחיצות בזמן בדיקת התאמה
let failCounter = 0; // מונה הנסיונות הכושלים

"🍕", "🍕", "🍔", "🍔", "🍟", "🍟", "🍿", "🍿", "🥐", "🥐", "🍩", "🍩", "🧁", "🧁", "🍭", "🍭",
    "🥨","🥙","🍗","🍰","🍬","🍨","🍲","🍒","🍇","🌽","🥨","🥙","🍗","🍰","🍬","🍨","🍲","🍒","🍇","🌽"
const gameBoard = document.getElementById("game-board"); // אלמנט הלוח
const failCounterElement = document.getElementById("fail-counter"); // אלמנט מונה הנסיונות הכושלים
const startButton = document.getElementById("start-button"); // כפתור התחלת המשחק
function name()
{  
    let userr=window.sessionStorage.getItem("this user");
    document.getElementById("thisuser").innerHTML= userr; 
}

// פונקציה שמערבבת את הקלפים ויוצרת לוח משחק חדש
function createBoard() {
   
    
    gameBoard.innerHTML = ''; // מנקה את הלוח
    failCounter = 0; // מאפס את מונה הנסיונות הכושלים
    failCounterElement.innerText = failCounter; // מעדכן את התצוגה של מונה הנסיונות

    // מערבב את הקלפים
    cards.sort(() => 0.5 - Math.random());

    // יצירת הקלפים על הלוח
    cards.forEach((emoji) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const span = document.createElement("span");
        span.innerText = ""; // מציג ריק בהתחלה
        card.dataset.emoji = emoji;
        card.appendChild(span);
        gameBoard.appendChild(card);

        // אירוע לחיצה על קלף
        card.addEventListener("click", () => {
            if (lockBoard || card === firstCard || card.isMatched) 
                return;
        
            // חשיפת הקלף
            span.innerText = emoji;
            card.classList.add("flipped");
        
            if (!firstCard) {
                firstCard = card;
            } else {
                secondCard = card;
                lockBoard = true;
        
                // בדיקת התאמה
                if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
                    // נועל את הקלפים על ידי הגדרת isMatched
                    firstCard.isMatched = true;
                    secondCard.isMatched = true;
                    resetTurn(); // התאמה נמצאה
                    checkWin(); // בדיקה אם כל הקלפים תואמים
                } else {
                    failCounter++;
                    failCounterElement.innerText = failCounter;
        
                    setTimeout(() => {
                        firstCard.querySelector("span").innerText = "";
                        secondCard.querySelector("span").innerText = "";
                        firstCard.classList.remove("flipped");
                        secondCard.classList.remove("flipped");
                        resetTurn();
                    }, 1000);
                }
            }
        });
        
    });
}

// פונקציה שבודקת אם כל הקלפים תואמים
function checkWin() {
    const allFlipped = document.querySelectorAll('.card.flipped');
    if (allFlipped.length === cards.length) {
        setTimeout(() => {
            alert('כל הכבוד, ניצחת!');
            createBoard(); // אתחול משחק חדש
        }, 500);
    }
}

// מאפס את המצב אחרי תור
function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// הוספת מאזין לאירוע לחיצה על כפתור התחלת המשחק
startButton.addEventListener("click", createBoard);

// יצירת הלוח כאשר הדף נטען
document.addEventListener("DOMContentLoaded", createBoard);
