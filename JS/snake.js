const canvas = document.getElementById('gameCanvas'); // מקבלים את קנבס המשחק
const ctx = canvas.getContext('2d'); // מקבלים את הקשר ל-2D על הקנבס
const startButton = document.getElementById('startButton'); // מקבלים את כפתור ההתחלה
const scoreDisplay = document.getElementById('score'); // מקבלים את תצוגת הניקוד

canvas.width = 400; // קביעת רוחב הקנבס
canvas.height = 400; // קביעת גובה הקנבס

let snake = [{ x: 10, y: 10 }]; // מערך שמייצג את הנחש עם ראש הנחש
let direction = { x: 0, y: 0 }; // כיוון הנחש (תחילה לא זז)
let food = { x: 0, y: 0 }; // מיקום האוכל
let score = 0; // ניקוד ההתחלה
let gameInterval; // משתנה לשמירה על הסטטוס של המשחק
function name()
{  
    let userr=window.sessionStorage.getItem("this user");
    document.getElementById("thisuser").innerHTML= userr; 
}

// פונקציה להתחלת המשחק
function startGame() {
    snake = [{ x: 10, y: 10 }]; // אתחול הנחש
    direction = { x: 0, y: 0 }; // אתחול הכיוון
    score = 0; // אתחול הניקוד
    scoreDisplay.innerText = score; // עדכון תצוגת הניקוד
    placeFood(); // הנחת אוכל חדש
    clearInterval(gameInterval); // ניקוי הלולאה הקודמת אם יש
    gameInterval = setInterval(gameLoop, 150); // הפעלת לולאת המשחק כל 150 מילישניות
}

// פונקציה ללולאת המשחק
function gameLoop() {
    updateSnake(); // עדכון מיקום הנחש
    if (checkCollision()) 
        { // בדיקת התנגשויות
        clearInterval(gameInterval); // עצירת המשחק במקרה של התנגשויות
        alert('Game Over!☹️\nYour score is: ' + score); // הצגת הודעת סיום
        return; // יציאה מהפונקציה
    }
    drawGame(); // ציור המצב הנוכחי של המשחק
}

// פונקציה לעדכון מיקום הנחש
function updateSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y }; // חישוב ראש הנחש החדש
    snake.unshift(head); // הוספת ראש חדש למערך הנחש
    
    // בדיקה אם הנחש אכל את האוכל
    if (head.x === food.x && head.y === food.y) //הראש פגע בנקודת האוכל
        {
        score++; // העלאת הניקוד
        scoreDisplay.innerText = score; // עדכון תצוגת הניקוד
        placeFood(); // הנחת אוכל חדש
        } 
    else {
        snake.pop(); // אם לא אכל, הסרת הזנב
    }
}

// פונקציה להנחת אוכל במיקום אקראי
function placeFood() {
    food.x = Math.floor(Math.random() * 20); // חישוב מיקום אקראי לאוכל באורך הקנבס
    food.y = Math.floor(Math.random() * 20); // חישוב מיקום אקראי לאוכל בגובה הקנבס
}

// פונקציה לבדוק אם יש התנגשויות
function checkCollision() {
    const head = snake[0]; // קבלת ראש הנחש
    // בדיקה אם ראש הנחש פוגע בקירות
    if (head.x < 0 || head.x >= canvas.width / 20 || head.y < 0 || head.y >= canvas.height / 20) {
        return true; // חזרה עם אמת אם הייתה התנגדות
    }
    // בדיקה אם ראש הנחש פוגע בעצמו
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true; // חזרה עם אמת אם הייתה התנגדות
        }
    }
    return false; //  בכל מקרה אחר - חזרה עם שקר אם אין התנגשויות
}

// פונקציה לציור המצב הנוכחי של המשחק
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // ניקוי הקנבס

    // ציור הנחש
    snake.forEach(index => {
        ctx.fillStyle = '#ecf0f1'; // צבע הנחש
        ctx.fillRect(index.x * 20 , index.y * 20 , 18, 18); // ציור כל חלק בנחש
    });

    // ציור האוכל
    ctx.fillStyle = '#e74c3c'; // צבע האוכל
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18); // ציור האוכל
}

// ניהול כיווני הנחש בעזרת מקשי החצים
document.addEventListener('keydown', (event) => 
{
    if (event.key === 'ArrowUp' && direction.y !== 1) //הוא לא בעליה כרגע
    {
        direction = { x: 0, y: -1 }; // עלייה
    } else if (event.key === 'ArrowDown' && direction.y !== -1) //הוא לא בירידה כרגע
    {
        direction = { x: 0, y: 1 }; // ירידה
    } else if (event.key === 'ArrowLeft' && direction.x !== 1) //הוא לא בכיון שמאלה כרגע
    {
        direction = { x: -1, y: 0 }; // שמאלה
    } else if (event.key === 'ArrowRight' && direction.x !== -1) //הוא לא בכיון ימינה כרגע
    {
        direction = { x: 1, y: 0 }; // ימינה
    }
});

// חיבור כפתור ההתחלה לפונקציה שמתחילה את המשחק
startButton.addEventListener('click', startGame);
