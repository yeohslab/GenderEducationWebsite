/**
 * Sex / Gender / Identity sorting quiz (WHO three concepts)
 */
(function () {
  const BUCKETS = {
    sex: { id: "sex", label: "\u6027 (Sex)" },
    gender: { id: "gender", label: "\u6027\u522b (Gender)" },
    identity: { id: "identity", label: "\u6027\u522b\u8ba4\u540c (Identity)" },
  };

  const QUESTIONS = [
    {
      text: "\u67d3\u8272\u4f53 XX \u6216 XY \u7684\u7ec4\u5408",
      answer: "sex",
      explain: "\u5c5e\u4e8e\u751f\u7269\u5b66\u4e0a\u7684\u6027\uff08sex\uff09\u7279\u5f81\u3002",
    },
    {
      text: "\u300c\u5973\u5b69\u5e94\u8be5\u6587\u9759\u3001\u7537\u5b69\u5e94\u8be5\u52c7\u6562\u300d\u7684\u793e\u4f1a\u671f\u5f85",
      answer: "gender",
      explain: "\u5c5e\u4e8e\u793e\u4f1a\u5efa\u6784\u7684\u6027\u522b\uff08gender\uff09\u89c4\u8303\u4e0e\u89d2\u8272\u3002",
    },
    {
      text: "\u300c\u6211\u5185\u5fc3\u6df1\u5904\u611f\u5230\u81ea\u5df1\u662f\u5973\u6027\uff0c\u5c3d\u7ba1\u51fa\u751f\u65f6\u88ab\u6307\u6d3e\u4e3a\u7537\u6027\u300d",
      answer: "identity",
      explain: "\u63cf\u8ff0\u7684\u662f\u6027\u522b\u8ba4\u540c\uff08gender identity\uff09\u2014\u2014\u5185\u5728\u3001\u4e3b\u89c2\u7684\u4f53\u9a8c\u3002",
    },
    {
      text: "\u5375\u5de2\u3001\u809a\u4e38\u7b49\u751f\u6b96\u5668\u5b98\u7684\u7ed3\u6784",
      answer: "sex",
      explain: "\u5c5e\u4e8e\u751f\u7269\u5b66\u4e0a\u7684\u6027\u7279\u5f81\u3002",
    },
    {
      text: "\u6cd5\u5f8b\u3001\u6559\u80b2\u3001\u5a92\u4f53\u518d\u751f\u4ea7\u7684\u300c\u7537\u5b50\u6c14\u6982\u300d\u300c\u5973\u6027\u6c14\u8d28\u300d\u6807\u51c6",
      answer: "gender",
      explain: "\u5c5e\u4e8e\u6027\u522b\uff08gender\uff09\u4f5c\u4e3a\u793e\u4f1a\u89c4\u8303\u4e0e\u89d2\u8272\u7684\u5c42\u9762\u3002",
    },
    {
      text: "\u4e2a\u4eba\u5bf9\u81ea\u5df1\u662f\u7537\u5b69\u3001\u5973\u5b69\u3001\u975e\u4e8c\u5143\u6216\u5176\u4ed6\u6027\u522b\u7684\u6df1\u5207\u611f\u53d7",
      answer: "identity",
      explain: "WHO \u5c06\u6b64\u7c7b\u4f53\u9a8c\u5b9a\u4e49\u4e3a\u6027\u522b\u8ba4\u540c\u3002",
    },
    {
      text: "\u51fa\u751f\u8bc1\u660e\u4e0a\u57fa\u4e8e\u5916\u751f\u6b96\u5668\u767b\u8bb0\u7684\u300c\u7537/\u5973\u300d",
      answer: "sex",
      explain: "\u901a\u5e38\u4f9d\u636e\u751f\u7269\u5b66\u7279\u5f81\uff08\u6027\uff09\u8fdb\u884c\u6307\u6d3e\uff1b\u4e0e\u8ba4\u540c\u53ef\u80fd\u4e0d\u4e00\u81f4\u3002",
    },
    {
      text: "\u5a5a\u793c\u3001\u804c\u573a\u7740\u88c5\u7b49\u573a\u5408\u5bf9\u300c\u7537\u6027/\u5973\u6027\u300d\u884c\u4e3a\u7684\u793c\u4eea\u8981\u6c42",
      answer: "gender",
      explain: "\u5c5e\u4e8e\u793e\u4f1a\u6027\u522b\u89d2\u8272\u4e0e\u8868\u8fbe\uff0c\u800c\u975e\u5185\u5728\u8ba4\u540c\u672c\u8eab\u3002",
    },
    {
      text: "\u8de8\u6027\u522b\u8005\u81ea\u8ff0\u7684\u300c\u771f\u5b9e\u6027\u522b\u81ea\u6211\u300d",
      answer: "identity",
      explain: "\u5c5e\u4e8e\u6027\u522b\u8ba4\u540c\u8303\u792e\uff1bAPA \u5f3a\u8c03\u987b\u4e0e\u6027\u53d6\u5411\u533a\u5206 [4]\u3002",
    },
    {
      text: "\u5b55\u671f\u9a8c\u916e\u6c34\u5e73\u5bf9\u5927\u8111\u53d1\u80b2\u7684\u7ec4\u7ec7\u6548\u5e94",
      answer: "sex",
      explain: "\u5c5e\u4e8e\u751f\u7269\u5b66\u56e0\u7d20\uff1b\u53ef\u5f71\u54cd\u53d1\u5c55\u8def\u5f84\uff0c\u4f46\u4e0d\u5355\u72ec\u51b3\u5b9a\u8ba4\u540c [8][15]\u3002",
    },
    {
      text: "\u4e0d\u7b26\u5408\u4e3b\u6d41\u6027\u522b\u89c4\u8303\u8005\u9762\u4e34\u7684\u6c61\u540d\u4e0e\u6b67\u89c6",
      answer: "gender",
      explain: "WHO \u6307\u51fa\u8fd9\u6e90\u4e8e\u793e\u4f1a\u6027\u522b\u89c4\u8303\uff08gender\uff09\u7684\u518d\u751f\u4ea7 [2]\u3002",
    },
    {
      text: "\u987a\u6027\u522b\u5973\u6027\u300c\u6211\u5c31\u662f\u5973\u6027\u300d\u7684\u5185\u5728\u786e\u8ba4",
      answer: "identity",
      explain: "\u6027\u522b\u8ba4\u540c\u9002\u7528\u4e8e\u6240\u6709\u4eba\uff0c\u4e0d\u4ec5\u9650\u4e8e\u8de8\u6027\u522b\u7fa4\u4f53 [5]\u3002",
    },
  ];

  const STORAGE_KEY = "gender-sort-highscore";

  let selectedCard = null;
  let draggedCard = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function init() {
    const pool = document.getElementById("game-pool");
    const submitBtn = document.getElementById("game-submit");
    const resetBtn = document.getElementById("game-reset");
    if (!pool || !submitBtn) return;

    resetGame();

    submitBtn.addEventListener("click", grade);
    resetBtn.addEventListener("click", resetGame);

    document.querySelectorAll(".game-bucket").forEach((bucket) => {
      bucket.addEventListener("dragover", onDragOver);
      bucket.addEventListener("dragleave", onDragLeave);
      bucket.addEventListener("drop", onDrop);
    });

    pool.addEventListener("dragover", onDragOver);
    pool.addEventListener("dragleave", onDragLeave);
    pool.addEventListener("drop", onDropPool);
  }

  function resetGame() {
    const pool = document.getElementById("game-pool");
    const feedback = document.getElementById("game-feedback");
    const scoreEl = document.getElementById("game-score");

    pool.innerHTML = "";
    document.querySelectorAll(".game-bucket .game-cards").forEach((el) => {
      el.innerHTML = "";
    });

    shuffle(QUESTIONS).forEach((q, i) => {
      pool.appendChild(createCard(q, i));
    });

    if (feedback) {
      feedback.hidden = true;
      feedback.innerHTML = "";
    }
    if (scoreEl) scoreEl.textContent = "";

    const high = localStorage.getItem(STORAGE_KEY);
    const highEl = document.getElementById("game-highscore");
    if (highEl && high) {
      highEl.textContent = "\u5386\u53f2\u6700\u9ad8\uff1a" + high + " / " + QUESTIONS.length;
    }
  }

  function createCard(q, index) {
    const card = document.createElement("div");
    card.className = "game-card";
    card.textContent = q.text;
    card.draggable = true;
    card.dataset.answer = q.answer;
    card.dataset.index = String(index);
    card.dataset.explain = q.explain;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-grabbed", "false");

    card.addEventListener("dragstart", onDragStart);
    card.addEventListener("dragend", onDragEnd);
    card.addEventListener("click", onCardClick);
    card.addEventListener("keydown", onCardKeydown);

    return card;
  }

  function onCardClick(e) {
    const card = e.currentTarget;
    if (card.classList.contains("placed") && document.getElementById("game-feedback")?.hidden === false) {
      return;
    }

    document.querySelectorAll(".game-card.selected").forEach((c) => c.classList.remove("selected"));
    if (selectedCard === card) {
      selectedCard = null;
      return;
    }
    selectedCard = card;
    card.classList.add("selected");
  }

  function onCardKeydown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick(e);
    }
  }

  document.addEventListener("click", (e) => {
    const bucket = e.target.closest(".game-bucket");
    if (bucket && selectedCard) {
      bucket.querySelector(".game-cards").appendChild(selectedCard);
      selectedCard.classList.remove("selected");
      selectedCard.classList.add("placed");
      selectedCard = null;
    }
  });

  function onDragStart(e) {
    draggedCard = e.currentTarget;
    draggedCard.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", draggedCard.dataset.index);
  }

  function onDragEnd() {
    if (draggedCard) {
      draggedCard.classList.remove("dragging");
      draggedCard = null;
    }
    document.querySelectorAll(".game-bucket.drag-over").forEach((b) => b.classList.remove("drag-over"));
  }

  function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    e.currentTarget.classList.add("drag-over");
  }

  function onDragLeave(e) {
    e.currentTarget.classList.remove("drag-over");
  }

  function onDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("drag-over");
    const cardsContainer = e.currentTarget.querySelector(".game-cards");
    if (draggedCard && cardsContainer) {
      cardsContainer.appendChild(draggedCard);
      draggedCard.classList.add("placed");
    }
  }

  function onDropPool(e) {
    e.preventDefault();
    if (draggedCard) {
      document.getElementById("game-pool").appendChild(draggedCard);
    }
  }

  function grade() {
    const pool = document.getElementById("game-pool");
    const unplaced = pool.querySelectorAll(".game-card").length;
    const feedback = document.getElementById("game-feedback");
    const scoreEl = document.getElementById("game-score");

    if (unplaced > 0) {
      feedback.hidden = false;
      feedback.innerHTML = "<p>\u8bf7\u5148\u5c06\u6240\u6709\u5361\u7247\u62d6\u5165\u4e09\u4e2a\u5206\u7c7b\u6876\u4e2d\uff0c\u518d\u63d0\u4ea4\u3002</p>";
      return;
    }

    let correct = 0;
    const mistakes = [];

    document.querySelectorAll(".game-bucket").forEach((bucket) => {
      const bucketId = bucket.dataset.bucket;
      bucket.querySelectorAll(".game-card").forEach((card) => {
        const ans = card.dataset.answer;
        if (ans === bucketId) {
          correct++;
          card.classList.add("correct");
          card.classList.remove("incorrect");
        } else {
          card.classList.add("incorrect");
          card.classList.remove("correct");
          mistakes.push({
            text: card.textContent,
            expected: BUCKETS[ans].label,
            got: BUCKETS[bucketId].label,
            explain: card.dataset.explain,
          });
        }
      });
    });

    const total = QUESTIONS.length;
    scoreEl.textContent = "\u5f97\u5206\uff1a" + correct + " / " + total;

    const prev = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    if (correct > prev) localStorage.setItem(STORAGE_KEY, String(correct));
    const highEl = document.getElementById("game-highscore");
    if (highEl) {
      highEl.textContent = "\u5386\u53f2\u6700\u9ad8\uff1a" + Math.max(correct, prev) + " / " + total;
    }

    let html =
      "<p>" +
      (correct === total
        ? "\u5168\u90e8\u6b63\u786e\uff01\u4f60\u5df2\u638c\u63e1 WHO \u4e09\u6982\u5ff5\u7684\u57fa\u672c\u533a\u5206\u3002"
        : "\u90e8\u5206\u9898\u76ee\u9700\u8981\u518d\u60f3\u60f3\u3002\u53ef\u53c2\u8003\u6b63\u6587\u7b2c\u4e00\u8282\u4e0e\u53c2\u8003\u6587\u732e [1][3]\u3002") +
      "</p>";
    if (mistakes.length) {
      html += "<ul>";
      mistakes.forEach((m) => {
        html +=
          "<li><strong>" +
          escapeHtml(m.text) +
          "</strong>\uff1a\u5e94\u5f52\u5165\u300c" +
          escapeHtml(m.expected) +
          "\u300d\uff0c\u4f60\u653e\u5728\u4e86\u300c" +
          escapeHtml(m.got) +
          "\u300d\u3002 " +
          escapeHtml(m.explain) +
          "</li>";
      });
      html += "</ul>";
      html += '<p><a href="#ref-1">\u67e5\u770b\u53c2\u8003\u6587\u732e [1]</a></p>';
    }
    feedback.innerHTML = html;
    feedback.hidden = false;
  }

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
