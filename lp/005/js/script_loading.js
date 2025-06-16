window.onload = function() {

    // タイマー処理
    var targetUrl = "03.html";
    setTimeout(function() {
        window.location.href = targetUrl;
    }, 3000);

    // Loadingの動き
    const text = document.getElementById('waveText').innerText;
    const textContainer = document.getElementById('waveText');
    textContainer.innerText = '';

    for (let i = 0; i < text.length; i++) {
        let letter = document.createElement('span');
        letter.innerText = text[i];
        letter.classList.add('wave-letter');
        letter.style.animationDelay = `${i * 0.1}s`; // 0.1秒ごとに遅延を増やす
        textContainer.appendChild(letter);
    }
};

