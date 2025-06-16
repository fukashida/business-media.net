// 診断結果ボタンのクリック可否制御
function updateButtonStatus() {
    const questions = [
                        'entry.282316625',
                        'entry.769598587',
                        'entry.305183042',
                        'entry.961018690',
                        'entry.1287273759',
                        'entry.398527022',
                        'entry.426213867',
                        'entry.664980248',
                        'entry.1612373125',
                        'entry.1951833974'
                    ];

    let allAnswered = questions.every(question => {
        return document.querySelector(`input[name="${question}"]:checked`) !== null;
    });

    const resultButton = document.getElementById("result_button");
    resultButton.disabled = !allAnswered;
    if (allAnswered) {
        resultButton.classList.add("button-enabled");
    } else {
        resultButton.classList.remove("button-enabled");
    }
}

document.getElementById("question_lists").addEventListener("change", updateButtonStatus);


// 診断結果ボタンの制御
document.getElementById('result_button').addEventListener('click', function(event) {
    event.preventDefault(); 

    // Google フォームに回答結果を送信
    fetch(document.getElementById('diagnosisForm').action, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData((document.getElementById('diagnosisForm')))
    })
    .then(response => {
        window.location.href = '02.html';
    }).catch(error => {
        console.error("送信エラー:", error);
    });
});
