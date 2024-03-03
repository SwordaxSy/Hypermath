/* JavaScript Code Main File */
// Smart Code Version (November 2021)

// Selectors
const nameInput = document.querySelector(".name-input");
const nameDisplay = document.querySelector(".name-display p");
const renameSwitch = document.querySelector(".rename-switch");
const renameInput = document.querySelector(".rename-input");
const renameDiv = document.querySelector(".rename");
const resultName = document.querySelector(".result-name");
const loginPage = document.querySelector(".login-page");
const appHeader = document.querySelector(".app-header");
const homePage = document.querySelector(".home-page");
const loginLogoText = document.querySelector(".login-page .logo-text");
const successIndicators = document.querySelectorAll(".success-indicators span");
const customAlert = document.querySelector(".custom-alert");
const darken = document.querySelector(".darken");
const gameAnswers = document.querySelector(".game-answers");
const gameBtns = document.querySelectorAll(".games > div");
const gameBoard = document.querySelector(".game-board");
const gameBody = document.querySelector(".game-body");
const quizTheme_El = document.querySelector(".quiz-theme");
const quizName_El = document.querySelector(".quiz-name");
const quizIcon_El = document.querySelector(".quiz-icon");
const questionNumber = document.querySelector(".question-number");
const totalQuestions = document.querySelector(".total-questions");
const questionText = document.querySelector(".game-question");
const questionOptions = document.querySelectorAll(".option-content");
const mcqFormat = document.querySelector(".mcq-format");
const frqFormat = document.querySelector(".frq-format");
const frqInput = document.querySelector(".frq-input");
const frqSubmit = document.querySelector(".frq-submit");
const resultCard = document.querySelector(".result-card");
const certPlayerName = document.querySelector(".cert-player-name");
const certQuizName = document.querySelector(".cert-quiz-name");
const certScore = document.querySelector(".cert-score");

// Variables
let playerName = null;
let logoColors = ["#e84c3c", "#faa430", "#55ba4a", "#3597d3"];
let prevSelected = null;
let alertTimeout;
let quizTheme, quizIcon, quizName, quizQuestions, currentQuestion;
let finalQ = false;
let score = 0;

// Set Random Logo Colors
for (let i = 0; i < loginLogoText.children.length; i++) {
    let randomSelection = Math.floor(Math.random() * logoColors.length);
    let selectedColor = logoColors[randomSelection];

    if (selectedColor == prevSelected) {
        i--;
        continue;
    } else {
        loginLogoText.children[i].style.color = selectedColor;
        prevSelected = selectedColor;
    }
}

// Set Player Name & Direct to Main Dashboard
function login() {
    if (nameInput.value == "") return showAlert("Please enter a name");

    playerName = nameInput.value;
    nameDisplay.innerText = playerName;

    // Success Indicator
    let indicatorsCounter = 0;
    let indicatorsInterval = setInterval(() => {
        successIndicators[indicatorsCounter].style.opacity = 1;

        if (indicatorsCounter == successIndicators.length - 1)
            return clearInterval(indicatorsInterval);

        indicatorsCounter++;
    }, 100);

    setTimeout(() => {
        loginPage.style.transform = "translateX(-100%)";
        setTimeout(() => {
            loginPage.style.display = "none";
            homePage.style.display = "block";
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            setTimeout(() => (homePage.style.opacity = 1), 100);
        }, 300);
    }, 400);
}

// Login With Enter Key Press
nameInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") login();
});

// Rename Player
function renameSwitch_() {
    renameDiv.classList.toggle("rename-active");
    renameSwitch.classList.toggle("rename-switch-active");
}
function rename() {
    if (renameInput.value == "") return showAlert("Please enter a name");
    playerName = renameInput.value;
    nameDisplay.innerText = playerName;
    renameSwitch_();
    renameInput.value = "";
}

// Rename With Enter Key Press
renameInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") rename();
});

// Set Scrollbar Color
document.querySelector(".scrollbar-color").innerHTML = `
    ::-webkit-scrollbar-thumb {
        background-color: ${
            logoColors[Math.floor(Math.random() * logoColors.length)]
        }
    }
`;

// Open Custom Alert
function showAlert(alertText) {
    clearTimeout(alertTimeout);
    customAlert.classList.add("alert-active");
    customAlert.children[1].innerText = alertText;
    alertTimeout = setTimeout(exitAlert, 3000);
}

// Exit Custom Alert
function exitAlert() {
    customAlert.classList.remove("alert-active");
}

// Open & Set Game Quiz
gameBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        exitQuiz();
        gameBoard.classList.add("game-board-active");
        darken.classList.add("darken-active");

        switch (btn.className) {
            case "addition-btn":
                quizTheme = logoColors[0];
                quizName = "Addition Quiz";
                quizQuestions = addition_questions;
                quizIcon = "fa-plus";
                break;
            case "subtraction-btn":
                quizTheme = logoColors[1];
                quizName = "Subtraction Quiz";
                quizQuestions = subtraction_questions;
                quizIcon = "fa-minus";
                break;
            case "multiplication-btn":
                quizTheme = logoColors[2];
                quizName = "Multiplication Quiz";
                quizQuestions = multiplication_question;
                quizIcon = "fa-times";
                break;
            case "division-btn":
                quizTheme = logoColors[3];
                quizName = "Division Quiz";
                quizQuestions = division_questions;
                quizIcon = "fa-divide";
                break;
        }

        setQuiz();
        setQuestion();
    });
});

function setQuiz() {
    currentQuestion = 0;
    let quizThemeTemplate = `
        .game-header p {
            color: ${quizTheme};
        }
        .game-header .question-num,
        .mcq-option,
        .frq-submit,
        .result-card {
            background-color: ${quizTheme};
        }
        .frq-input {
            border-color: ${quizTheme};
        }
    `;

    quizTheme_El.innerHTML = quizThemeTemplate;
    quizName_El.innerText = quizName;

    quizIcon_El.classList.remove(
        "fa-plus",
        "fa-minus",
        "fa-times",
        "fa-divide"
    );

    quizIcon_El.classList.add(quizIcon);
    totalQuestions.innerText = quizQuestions.length;
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    disableScrolling();
}

function setQuestion() {
    resetQuestion();
    currentQuestion++;

    if (currentQuestion == quizQuestions.length) finalQ = true;

    questionNumber.innerText = currentQuestion;
    questionText.innerText = quizQuestions[currentQuestion - 1].question;

    switch (quizQuestions[currentQuestion - 1].type) {
        case "MCQ":
            mcqFormat.style.display = "block";
            frqFormat.style.display = "none";

            for (
                let i = 0;
                i < quizQuestions[currentQuestion - 1].choices.length;
                i++
            ) {
                questionOptions[i].innerText =
                    quizQuestions[currentQuestion - 1].choices[i];
                if (
                    quizQuestions[currentQuestion - 1].correct ==
                    quizQuestions[currentQuestion - 1].choices[i]
                ) {
                    questionOptions[i].parentElement.classList.add("t");
                }
                if (finalQ)
                    questionOptions[i].parentElement.classList.add("final-q");
            }
            break;
        case "FRQ":
            mcqFormat.style.display = "none";
            frqFormat.style.display = "block";

            frqInput.setAttribute(
                "data-ans",
                quizQuestions[currentQuestion - 1].correct
            );
            if (finalQ) frqSubmit.classList.add("final-q");
            break;
        default:
            showAlert("An error occured, please refresh the game");
    }
}

// Reset Question
function resetQuestion() {
    frqInput.value = "";
    frqInput.setAttribute("data-ans", "");

    questionOptions.forEach((opt) => {
        opt.innerText = "";
        opt.parentElement.classList.remove("t");
    });
}

// Submitting Answer & Moving to Next Question
document.querySelectorAll(".game-answers button").forEach((btn) => {
    btn.addEventListener("click", () => {
        gameBody.style.opacity = 0;

        if (
            btn.classList.contains("t") ||
            (btn.classList.contains("frq-submit") &&
                frqInput.value == frqInput.getAttribute("data-ans"))
        )
            score++;

        setTimeout(() => {
            if (!btn.classList.contains("final-q")) {
                setQuestion();
            } else {
                questionText.style.display = "none";
                gameAnswers.style.display = "none";
                resultCard.style.display = "block";

                calcResult();
            }
            gameBody.style.opacity = 1;
        }, 400);
    });
});

frqInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") frqSubmit.click();
});

// Calculate Score
function calcResult() {
    let percentage = (score / quizQuestions.length) * 100;

    certPlayerName.innerText = playerName;
    certQuizName.innerText = quizName;
    certScore.innerText = percentage;
}

// Exit Quiz Function
function exitQuiz() {
    gameBoard.classList.remove("game-board-active");
    darken.classList.remove("darken-active");
    currentQuestion = 0;
    resultCard.style.display = "none";
    questionText.style.display = "block";
    gameAnswers.style.display = "block";
    resetQuestion();
    const allFinalQ = document.querySelectorAll(".final-q");
    if (allFinalQ) allFinalQ.forEach((q) => q.classList.remove("final-q"));
    finalQ = false;
    score = 0;
    enableScrolling();
}

// Disable/Enable Scrolling
function disableScrolling() {
    let topScroll = window.scrollY || document.documentElement.scrollTop;
    let leftScroll = window.scrollX || document.documentElement.scrollLeft;

    window.onscroll = () => {
        window.scrollTo(leftScroll, topScroll);
    };
}

function enableScrolling() {
    window.onscroll = () => {};
}
