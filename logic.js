const data = {
  redline: [
    {
      title: "紅線是否明確標示？",
      yes: 1,
      no: "✅ 不構成違規，可主張標線不明（《標誌標線設置規則》第3條）"
    },
    {
      title: "是否為短暫臨停（3分鐘內）且駕駛未離車？",
      yes: 2,
      no: "🔺 恐違規，可依《道交條例》第56條開罰"
    },
    {
      title: "是否妨礙其他車輛或行人？",
      yes: "🔺 仍可能違規，妨礙通行即不構成合理臨停",
      no: "✅ 可主張交通部解釋函合理臨停"
    }
  ]
};

let current = 0;
const container = document.getElementById("question");
const buttons = document.getElementById("buttons");

function showQuestion() {
  const item = data[violation][current];
  container.innerHTML = `<h2>${title}</h2><p>${item.title}</p>`;
  buttons.innerHTML = `
    <button onclick="next('yes')">是</button>
    <button onclick="next('no')">否</button>
  `;
}

function next(answer) {
  const nextStep = data[violation][current][answer];
  if (typeof nextStep === "string") {
    container.innerHTML = `<h2>診斷結果</h2><p>${nextStep}</p><br><a href="index.html">← 回首頁</a>`;
    buttons.innerHTML = "";
  } else {
    current = nextStep;
    showQuestion();
  }
}
