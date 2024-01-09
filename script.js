console.log("oh hey, cool that you found this message! you should let me know if you see this!")

document.addEventListener("DOMContentLoaded", function() {
    var askButton = document.getElementById("ask-button");
    var questionTextarea = document.getElementById("question");
    var userQuestionDiv = document.getElementById("user-question");
    var snehaAnswerDiv = document.getElementById("sneha-answer");

    // Array of placeholder answers
    var placeholderAnswers = [
        "YESSSSSSSSSSSSS. OMG YES YES YES. YES!",
        "Interesting...listen...your feelings are valid. I support. Yes.",
        "I think you should text me to confirm what I think but I'll probably say yes.",
        "Abso-freaking-lutely. 100% yes.",
        "No. Just no. That's not the vibe.",
        "NOOOOOOOOOOOOOOOOOOOO",
        "Sneha would say no.",
        "Sneha would DEFINITELY say no. Like, literally.",
        "Sneha's magic answering tool says: Ask again. Or just ask her."
    ];

    askButton.addEventListener("click", function() {
        var userQuestion = questionTextarea.value;

        if (userQuestion.trim() !== "") {
            var randomAnswer = placeholderAnswers[Math.floor(Math.random() * placeholderAnswers.length)];

            userQuestionDiv.innerHTML = userQuestion;
            snehaAnswerDiv.innerHTML = randomAnswer;
        } else {
            alert("Please enter a question before asking Sneha!");
        }
    });
});