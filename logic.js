const data = {
  redline: [
    {
      title: "停車地點是否有紅線標示？",
      yes: 1,
      no: "✅ 不構成違規。可主張標線不明確，依《標線設置規則》第3條"
    },
    {
      title: "是否為短暫臨停（3分鐘內）且駕駛未離車？",
      yes: 2,
      no: "🔺 恐違反《道交條例》第56條，不屬臨停範圍"
    },
    {
      title: "是否阻礙其他車輛或行人通行？",
      yes: "🔺 雖為臨停，仍因妨礙交通可能違規",
      no: "✅ 符合合理臨停條件，可據以申訴"
    }
  ],
  speeding: [
    {
      title: "超速幅度是否小於10km/h？",
      yes: "✅ 可主張儀器誤差 ±3%，依《度量衡法》標準",
      no: 1
    },
    {
      title: "違規地點是否設有明確速限與測速警告標誌？",
      yes: 2,
      no: "✅ 可主張資訊未充分揭示，依《行政程序法》第10條"
    },
    {
      title: "是否因緊急狀況（如閃避障礙物）而超速？",
      yes: "✅ 可主張《刑法》第23條緊急避險原則，不罰",
      no: "🔺 違規成立，依《道交條例》第33條處罰"
    }
  ],
  redlight: [
    {
      title: "車輛進入路口時號誌是否仍為黃燈？",
      yes: "✅ 不構成闖紅燈，依《道交條例》第53條",
      no: 1
    },
    {
      title: "是否因路口壅塞而被迫卡在交叉口？",
      yes: "✅ 可主張非故意闖紅燈，建議附行車記錄器佐證",
      no: 2
    },
    {
      title: "號誌轉換是否極快或不合理？",
      yes: "✅ 可主張合理預期違誤，建議檢附影像佐證",
      no: "🔺 闖紅燈成立，依法開罰"
    }
  ],
  twoturn: [
    {
      title: "路口是否設有清楚兩段式左轉標誌或號誌？",
      yes: 1,
      no: "✅ 無設標示不得罰，依《標誌設置規則》第23條"
    },
    {
      title: "是否為不熟路況、導航誤導等情形？",
      yes: "✅ 可主張信賴保護原則或教育性處理",
      no: 2
    },
    {
      title: "是否因道路空曠誤以為可直接左轉？",
      yes: "🔺 違規行為雖輕微但不符規定，恐仍成立違規",
      no: "🔺 未依規定轉向，恐違反《道交條例》第48條"
    }
  ],
  sidewalk: [
    {
      title: "停車位置是否有人行道或機車專用道標示？",
      yes: 1,
      no: "✅ 可主張標示不清或區域模糊，依《行政程序法》第10條"
    },
    {
      title: "是否短暫臨停（3分鐘內）且駕駛未離車？",
      yes: 2,
      no: "🔺 違規成立，依《道交條例》第56條處罰"
    },
    {
      title: "是否妨礙其他用路人或車輛通行？",
      yes: "🔺 即使短暫停靠，妨礙通行即構成違規",
      no: "✅ 符合臨停例外條件，可提出申訴說明"
    }
  ]
};

let violation = "";
let current = 0;

const container = document.getElementById("question");
const buttons = document.getElementById("buttons");

function showQuestion() {
  const item = data[violation][current];
  container.innerHTML = `<p>${item.title}</p>`;
  buttons.innerHTML = `
    <button onclick="next('yes')">是</button>
    <button onclick="next('no')">否</button>
  `;
}

function next(answer) {
  const nextStep = data[violation][current][answer];
  if (typeof nextStep === "string") {
    container.innerHTML = `<h3>診斷結果</h3><p>${nextStep}</p><br><a href="index.html">← 回首頁</a>`;
    buttons.innerHTML = "";
  } else {
    current = nextStep;
    showQuestion();
  }
}
