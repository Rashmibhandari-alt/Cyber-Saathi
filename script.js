function checkPhishingLink() {

    const feedback = document.getElementById("phishing-feedback");

    feedback.classList.add("success");

    feedback.innerHTML = `
        <strong>🚩 Good catch!</strong>
        <p>
            This link is suspicious. Phishing messages often
            use unexpected links to direct victims to fake
            login pages. Always check where a link leads before
            entering your credentials.
        </p>
    `;
}
/* ========================================
   CYBER SAATHI QUIZ
   ======================================== */

const quizQuestions = [
    {
        category: "PHISHING",

        question:
            "You receive an email saying your account will be suspended in 24 hours unless you click a link and verify your information. What should you do?",

        answers: [
            "Click the link immediately.",
            "Reply to the email and ask if it is real.",
            "Verify the message through the organization's official website.",
            "Forward the email to your friends."
        ],

        correct: 2,

        explanation:
            "Good security habits mean verifying suspicious messages through an official website or trusted contact method instead of using links provided in the message."
    },

    {
        category: "PASSWORD SECURITY",

        question:
            "You use the same password for your email, social media, and gaming account. What is the biggest problem with this?",

        answers: [
            "The password becomes shorter.",
            "If one account is compromised, attackers may try the same password on your other accounts.",
            "Your accounts will automatically delete.",
            "It makes your internet connection slower."
        ],

        correct: 1,

        explanation:
            "Reusing passwords creates a domino effect. If attackers obtain one password, they may try it on your other accounts."
    },

    {
        category: "SOCIAL ENGINEERING",

        question:
            "Someone calls claiming to be from your bank and pressures you to reveal a verification code immediately. What should you do?",

        answers: [
            "Give them the code because they sound professional.",
            "Ask them for their personal information first.",
            "End the call and contact the bank using an official phone number.",
            "Post the situation on social media."
        ],

        correct: 2,

        explanation:
            "Creating urgency and pretending to be a trusted organization are common social-engineering techniques. Verify unexpected requests independently."
    },

    {
        category: "ONLINE PRIVACY",

        question:
            "Which piece of information is generally safest to avoid sharing publicly online?",

        answers: [
            "Your favorite movie",
            "Your favorite color",
            "Your home address",
            "A public music playlist"
        ],

        correct: 2,

        explanation:
            "Sensitive personal information such as your home address can create privacy and safety risks when publicly exposed."
    },

    {
        category: "SAFE BROWSING",

        question:
            "A website suddenly displays a pop-up saying you have won a new smartphone and must enter your password to claim it. What is the safest response?",

        answers: [
            "Enter your password quickly.",
            "Close the pop-up and leave the suspicious website.",
            "Give the website your friend's password instead.",
            "Download the software offered by the pop-up."
        ],

        correct: 1,

        explanation:
            "Unexpected prize messages are a common warning sign. Don't provide passwords or personal information to suspicious websites."
    }
];


/* ---------- Quiz Variables ---------- */

let currentQuestion = 0;
let score = 0;
let answered = false;


/* ---------- Quiz Elements ---------- */

const questionElement = document.getElementById("question");
const questionNumberElement =
    document.getElementById("question-number");

const categoryElement =
    document.querySelector(".question-category");

const answersElement =
    document.getElementById("answers");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("next-button");

const progressBar =
    document.getElementById("progress-bar");

const resultSection =
    document.getElementById("quiz-result");

const finalScoreElement =
    document.getElementById("final-score");

const scoreMessageElement =
    document.getElementById("score-message");

const restartButton =
    document.getElementById("restart-button");


/* ---------- Load Question ---------- */

function loadQuestion() {

    answered = false;

    const current = quizQuestions[currentQuestion];

    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    categoryElement.textContent =
        current.category;

    questionElement.textContent =
        current.question;

    answersElement.innerHTML = "";

    feedbackElement.innerHTML = "";

    feedbackElement.className =
        "quiz-feedback";

    nextButton.style.display = "none";


    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answersElement.appendChild(button);
    });


    const progress =
        ((currentQuestion) / quizQuestions.length) * 100;

    progressBar.style.width = `${progress}%`;
}


/* ---------- Select Answer ---------- */

function selectAnswer(selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    const current = quizQuestions[currentQuestion];

    const answerButtons =
        document.querySelectorAll(".answer");

    answerButtons.forEach(button => {
        button.disabled = true;
    });


    if (selectedIndex === current.correct) {

        score++;

        answerButtons[selectedIndex]
            .classList.add("correct");

        feedbackElement.classList.add("correct-feedback");

        feedbackElement.innerHTML = `
            <strong>✓ Correct!</strong>
            <p>${current.explanation}</p>
        `;

    } else {

        answerButtons[selectedIndex]
            .classList.add("incorrect");

        answerButtons[current.correct]
            .classList.add("correct");

        feedbackElement.classList.add("incorrect-feedback");

        feedbackElement.innerHTML = `
            <strong>Not quite.</strong>
            <p>${current.explanation}</p>
        `;
    }


    nextButton.style.display = "block";
}


/* ---------- Next Question ---------- */

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

        showResults();
    }
});


/* ---------- Show Results ---------- */

function showResults() {

    document.querySelector(".quiz-container")
        .style.display = "none";

    resultSection.classList.add("show");

    finalScoreElement.textContent =
        `You scored ${score}/${quizQuestions.length}`;


    if (score === 5) {

        scoreMessageElement.textContent =
            "Excellent! Your security instincts are strong.";

    } else if (score >= 3) {

        scoreMessageElement.textContent =
            "Great job! Keep learning and strengthen your security habits.";

    } else {

        scoreMessageElement.textContent =
            "Good start! Review the lessons and try the challenge again.";
    }
}


/* ---------- Restart Quiz ---------- */

restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    document.querySelector(".quiz-container")
        .style.display = "block";

    resultSection.classList.remove("show");

    loadQuestion();
});


/* ---------- Start Quiz ---------- */

if (questionElement) {
    loadQuestion();
}
/* ========================================
   CYBER SAATHI SECURITY TOOLS
   ======================================== */


/* ========================================
   PASSWORD STRENGTH CHECKER
   ======================================== */

const passwordInput = document.getElementById("password-input");
const togglePassword = document.getElementById("toggle-password");
const strengthBar = document.getElementById("strength-bar");
const strengthTitle = document.getElementById("strength-title");

const checkLength = document.getElementById("check-length");
const checkUpper = document.getElementById("check-upper");
const checkLower = document.getElementById("check-lower");
const checkNumber = document.getElementById("check-number");
const checkSymbol = document.getElementById("check-symbol");


function updateRequirement(element, passed) {

    if (!element) {
        return;
    }

    const icon = element.querySelector("span");

    if (passed) {

        element.classList.add("requirement-met");

        if (icon) {
            icon.textContent = "✓";
        }

    } else {

        element.classList.remove("requirement-met");

        if (icon) {
            icon.textContent = "○";
        }
    }
}


function checkPasswordStrength() {

    if (!passwordInput) {
        return;
    }

    const password = passwordInput.value;


    /* Empty password */

    if (password.length === 0) {

        strengthBar.style.width = "0%";

        strengthTitle.textContent =
            "Start typing to test your password";

        updateRequirement(checkLength, false);
        updateRequirement(checkUpper, false);
        updateRequirement(checkLower, false);
        updateRequirement(checkNumber, false);
        updateRequirement(checkSymbol, false);

        return;
    }


    /* Check requirements */

    const hasLength = password.length >= 12;

    const hasUppercase = /[A-Z]/.test(password);

    const hasLowercase = /[a-z]/.test(password);

    const hasNumber = /[0-9]/.test(password);

    const hasSymbol = /[^A-Za-z0-9]/.test(password);


    /* Update requirements */

    updateRequirement(checkLength, hasLength);

    updateRequirement(checkUpper, hasUppercase);

    updateRequirement(checkLower, hasLowercase);

    updateRequirement(checkNumber, hasNumber);

    updateRequirement(checkSymbol, hasSymbol);


    /* Calculate score */

    let score = 0;

    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSymbol) score++;


    const percentage = (score / 5) * 100;

    strengthBar.style.width = percentage + "%";


    /* Strength message */

    if (score <= 1) {

        strengthTitle.textContent =
            "Weak password — try adding more security features.";

    } else if (score <= 3) {

        strengthTitle.textContent =
            "Moderate password — there is room to improve.";

    } else if (score === 4) {

        strengthTitle.textContent =
            "Good password — almost there.";

    } else {

        strengthTitle.textContent =
            "Strong password — great security habits!";
    }
}


/* Listen for password typing */

if (passwordInput) {

    passwordInput.addEventListener(
        "input",
        checkPasswordStrength
    );
}


/* ========================================
   SHOW / HIDE PASSWORD
   ======================================== */

if (togglePassword && passwordInput) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                togglePassword.textContent = "Hide";

            } else {

                passwordInput.type = "password";

                togglePassword.textContent = "Show";
            }

        }
    );
}


/* ========================================
   DIGITAL SAFETY CHECKLIST
   ======================================== */

const safetyChecks =
    document.querySelectorAll(".safety-check");

const safetyScoreNumber =
    document.getElementById("safety-score-number");

const scoreBar =
    document.getElementById("score-bar");

const scoreMessage =
    document.getElementById("score-message");


function updateSafetyScore() {

    if (!safetyChecks.length) {
        return;
    }


    let checkedCount = 0;


    safetyChecks.forEach(function (check) {

        if (check.checked) {
            checkedCount++;
        }

    });


    const percentage = Math.round(
        (checkedCount / safetyChecks.length) * 100
    );


    if (safetyScoreNumber) {
        safetyScoreNumber.textContent =
            percentage + "%";
    }


    if (scoreBar) {
        scoreBar.style.width =
            percentage + "%";
    }


    if (!scoreMessage) {
        return;
    }


    if (percentage === 0) {

        scoreMessage.textContent =
            "Start checking your habits.";

    } else if (percentage <= 33) {

        scoreMessage.textContent =
            "Start building safer digital habits.";

    } else if (percentage <= 66) {

        scoreMessage.textContent =
            "You're on the right track. Keep improving.";

    } else if (percentage < 100) {

        scoreMessage.textContent =
            "Great job! Your security habits are getting stronger.";

    } else {

        scoreMessage.textContent =
            "Excellent! You've built a strong foundation of digital safety habits.";
    }
}


/* Listen for checklist changes */

safetyChecks.forEach(function (check) {

    check.addEventListener(
        "change",
        updateSafetyScore
    );

});
