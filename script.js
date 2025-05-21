function renderQuestion(containerId, questions, startId) {
  const container = document.getElementById(containerId);
  function show(qid) {
    const q = questions[qid];
    if (!q) return;
    container.innerHTML = `<p>${q.text}</p>`;
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.textContent = opt.text;
      btn.onclick = () => {
        if (opt.result) {
          container.innerHTML = `<h3>診斷結果</h3><p>${opt.result}</p><br><a href=\"index.html\">← 回首頁</a>`;
        } else {
          show(opt.next);
        }
      };
      buttons.appendChild(btn);
    });
    container.appendChild(buttons);
  }
  show(startId);
}
