// js/app.js
const app = document.getElementById("app");

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => renderView(btn.dataset.view));
});

function renderView(view) {
  if (view === "sections") renderSections();
  else app.innerHTML = `<p>${view} 视图待开发</p>`;
}

function renderSections() {
  const card = sections[0].cards[0];
  app.innerHTML = `
    <section class="card">
      <h2>${sections[0].title}</h2>
      <p>${card.front}</p>
      <p class="answer" hidden>${card.back}</p>
      <button id="showAnswer">显示答案</button>
      <div class="mastery">
        <button data-level="unknown">陌生</button>
        <button data-level="fuzzy">模糊</button>
        <button data-level="familiar">熟悉</button>
      </div>
    </section>
  `;

  document.getElementById("showAnswer").onclick = () => {
    app.querySelector(".answer").hidden = false;
  };

  app.querySelectorAll(".mastery button").forEach(btn => {
    btn.onclick = () => {
      setMastery(card.id, btn.dataset.level);
      alert("已保存：" + btn.dataset.level);
    };
  });
}

renderView("map");
