
/* =====================================================
   RAID PREMIUM — FULL PRESENTATION + QUIZ
   15 ORIGINAL SLIDES + 1 INTERACTIVE QUIZ
   ===================================================== */

(() => {
  "use strict";

  const CONFIG = {
    presentationId: "presentation",
    heroId: "heroSection",
    startButtonId: "startBtn",
    animationEvent: "raid:slidechange"
  };

  const state = {
    slides: [],
    current: 0,
    started: false,
    fullscreen: false
  };

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const escapeHTML = value =>
    String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  const root = () =>
    document.getElementById(CONFIG.presentationId);

  /* =====================================================
     QUIZ QUESTIONS — 25 QUESTIONS
     ===================================================== */

  const RAID_QUIZ = [
    {
      q: "RAID atamasi nimani anglatadi?",
      a: [
        "Redundant Array of Independent Disks",
        "Random Access Internet Data",
        "Rapid Automatic Information Drive",
        "Read And Insert Disk"
      ],
      c: 0
    },
    {
      q: "RAID texnologiyasining asosiy vazifasi nima?",
      a: [
        "Faqat internet tezligini oshirish",
        "Disklar ishlashi, tezlik va ishonchlilikni yaxshilash",
        "Monitor sifatini oshirish",
        "Operatsion tizimni almashtirish"
      ],
      c: 1
    },
    {
      q: "HDD qanday qurilma?",
      a: [
        "Qattiq disk",
        "Protsessor",
        "Operativ xotira",
        "Videokarta"
      ],
      c: 0
    },
    {
      q: "SSD ning HDD dan asosiy farqi nima?",
      a: [
        "Har doim kattaroq bo‘ladi",
        "Harakatlanuvchi mexanik qismlarsiz ishlaydi",
        "Faqat internet bilan ishlaydi",
        "Faqat serverlarda ishlaydi"
      ],
      c: 1
    },
    {
      q: "NVMe texnologiyasi asosan qaysi interfeysdan foydalanadi?",
      a: [
        "PCI Express",
        "VGA",
        "HDMI",
        "USB 1.0"
      ],
      c: 0
    },
    {
      q: "DAS nimani anglatadi?",
      a: [
        "Direct Attached Storage",
        "Digital Access System",
        "Data Automatic Server",
        "Disk Array Software"
      ],
      c: 0
    },
    {
      q: "NAS qanday saqlash tizimi?",
      a: [
        "Tarmoqqa ulangan saqlash tizimi",
        "Faqat bitta kompyuter xotirasi",
        "Grafik protsessor",
        "Internet brauzeri"
      ],
      c: 0
    },
    {
      q: "SAN nimani anglatadi?",
      a: [
        "Storage Area Network",
        "System Access Number",
        "Server Automatic Node",
        "Storage Application Name"
      ],
      c: 0
    },
    {
      q: "Striping nima?",
      a: [
        "Ma’lumotlarni disklar orasida bo‘lib yozish",
        "Diskni formatlash",
        "Faylni o‘chirish",
        "Parolni shifrlash"
      ],
      c: 0
    },
    {
      q: "Mirroring nima?",
      a: [
        "Ma’lumotni bir nechta diskka nusxalash",
        "Disk tezligini pasaytirish",
        "Fayllarni siqish",
        "Diskni bo‘lish"
      ],
      c: 0
    },
    {
      q: "Parity nima uchun ishlatiladi?",
      a: [
        "Xatolikni aniqlash va ma’lumotni tiklashga yordam berish",
        "Monitorni sozlash",
        "Internetni ulash",
        "Fayllarni nomlash"
      ],
      c: 0
    },
    {
      q: "XOR amali qaysi sohada ishlatiladi?",
      a: [
        "Parity hisoblashda",
        "Rasm chizishda",
        "Matn tarjimasida",
        "Ovoz yozishda"
      ],
      c: 0
    },
    {
      q: "RAID 0 ning asosiy xususiyati nima?",
      a: [
        "Striping orqali tezlikni oshirish",
        "Ikki nusxa yaratish",
        "Ikki parity saqlash",
        "Faqat bitta disk ishlatish"
      ],
      c: 0
    },
    {
      q: "RAID 0 da disk ishdan chiqsa nima bo‘ladi?",
      a: [
        "Ma’lumotlar yo‘qolishi mumkin",
        "Ma’lumotlar avtomatik tiklanadi",
        "Tezlik ikki baravar oshadi",
        "Hech narsa bo‘lmaydi"
      ],
      c: 0
    },
    {
      q: "RAID 1 qanday ishlaydi?",
      a: [
        "Ma’lumotlarni nusxalab saqlaydi",
        "Ma’lumotlarni faqat bitta diskka yozadi",
        "Parity ishlatmaydi va tezlikni oshiradi",
        "Disklarni formatlaydi"
      ],
      c: 0
    },
    {
      q: "RAID 5 uchun kamida nechta disk kerak?",
      a: [
        "2 ta",
        "3 ta",
        "4 ta",
        "5 ta"
      ],
      c: 1
    },
    {
      q: "RAID 5 nechta disk ishdan chiqishiga bardosh beradi?",
      a: [
        "1 ta",
        "2 ta",
        "3 ta",
        "Hech qaysisiga"
      ],
      c: 0
    },
    {
      q: "RAID 6 nechta disk ishdan chiqishiga bardosh beradi?",
      a: [
        "1 ta",
        "2 ta",
        "3 ta",
        "4 ta"
      ],
      c: 1
    },
    {
      q: "RAID 10 qaysi RAID darajalarining birikmasi?",
      a: [
        "RAID 0 va RAID 1",
        "RAID 5 va RAID 6",
        "RAID 1 va RAID 6",
        "RAID 0 va RAID 5"
      ],
      c: 0
    },
    {
      q: "RAID 10 ishlashi uchun kamida nechta disk kerak?",
      a: [
        "2 ta",
        "3 ta",
        "4 ta",
        "6 ta"
      ],
      c: 2
    },
    {
      q: "RAID 50 qaysi darajalar birikmasi?",
      a: [
        "RAID 5 va RAID 0",
        "RAID 1 va RAID 0",
        "RAID 6 va RAID 1",
        "RAID 10 va RAID 1"
      ],
      c: 0
    },
    {
      q: "RAID 60 qaysi darajalar birikmasi?",
      a: [
        "RAID 0 va RAID 1",
        "RAID 6 va RAID 0",
        "RAID 5 va RAID 1",
        "RAID 10 va RAID 5"
      ],
      c: 1
    },
    {
      q: "RAID 5 da 4 ta 1 TB disk bo‘lsa, foydali sig‘im qancha?",
      a: [
        "4 TB",
        "3 TB",
        "2 TB",
        "1 TB"
      ],
      c: 1
    },
    {
      q: "Rebuild jarayoni nima?",
      a: [
        "Ishdan chiqqan disk ma’lumotlarini qayta tiklash jarayoni",
        "Diskni sotib olish",
        "Kompyuterni o‘chirish",
        "Fayllarni siqish"
      ],
      c: 0
    },
    {
      q: "SMART texnologiyasi nima uchun ishlatiladi?",
      a: [
        "Disk holatini kuzatish",
        "Internet tezligini o‘lchash",
        "Monitor rangini sozlash",
        "Operatsion tizimni o‘rnatish"
      ],
      c: 0
    }
  ];

  const quiz = {
    student: 0,
    answers: Array(23).fill(null),
    finished: false,
    feedback: null
  };

  /* =====================================================
     IMAGE RENDERER
     ===================================================== */

  function renderImage(src, alt = "") {
    if (!src) return "";

    return `
      <div class="raid-image-wrap">
        <img
          class="raid-slide-image"
          src="${escapeHTML(src)}"
          alt="${escapeHTML(alt)}"
          loading="lazy"
          onerror="this.parentElement.remove()"
        >
      </div>
    `;
  }

  /* =====================================================
     LIST RENDERER
     ===================================================== */

  function renderPoints(points = []) {
    if (!Array.isArray(points) || !points.length) {
      return "";
    }

    return `
      <ul class="raid-points">
        ${points.map(point => `
          <li>${escapeHTML(point)}</li>
        `).join("")}
      </ul>
    `;
  }

  /* =====================================================
     NORMAL CONTENT SLIDE
     ===================================================== */

  function renderContent(slide) {
    const sections = Array.isArray(slide.sections)
      ? slide.sections
      : [];

    return `
      <div class="slide-content raid-content-slide">

        <header class="raid-slide-header">
          <h2 class="slide-title">
            ${escapeHTML(slide.title)}
          </h2>

          ${slide.subtitle ? `
            <p class="slide-subtitle">
              ${escapeHTML(slide.subtitle)}
            </p>
          ` : ""}
        </header>

        ${slide.lead ? `
          <p class="slide-lead">
            ${escapeHTML(slide.lead)}
          </p>
        ` : ""}

        <div class="sections-grid">

          ${sections.map((section, index) => `
            <article class="section-card">

              ${section.image ? `
                ${renderImage(
                  section.image,
                  section.imageAlt || section.heading
                )}
              ` : ""}

              <div class="section-card-body">

                <span class="card-number">
                  ${String(index + 1).padStart(2, "0")}
                </span>

                <h3>${escapeHTML(section.heading)}</h3>

                ${section.body ? `
                  <p>${escapeHTML(section.body)}</p>
                ` : ""}

                ${renderPoints(section.points)}

              </div>

            </article>
          `).join("")}

        </div>

        ${slide.note ? `
          <aside class="slide-note">
            ${escapeHTML(slide.note)}
          </aside>
        ` : ""}

      </div>
    `;
  }

  /* =====================================================
     CODE SLIDE — NO IMAGES
     ===================================================== */

  function renderCode(slide) {
    const explanations = Array.isArray(slide.explanation)
      ? slide.explanation
      : [];

    return `
      <div class="slide-content code-slide-content">

        <header class="raid-slide-header">
          <h2 class="slide-title">
            ${escapeHTML(slide.title)}
          </h2>

          ${slide.subtitle ? `
            <p class="slide-subtitle">
              ${escapeHTML(slide.subtitle)}
            </p>
          ` : ""}
        </header>

        ${slide.lead ? `
          <p class="slide-lead">
            ${escapeHTML(slide.lead)}
          </p>
        ` : ""}

        <div class="code-layout">

          <article class="code-card">

            <div class="code-header">
              <h3>
                ${escapeHTML(slide.codeLanguage || "Python")}
              </h3>
              <span class="code-label">CODE</span>
            </div>

            <div class="code-scroll">
              <pre><code>${escapeHTML(slide.code || "")}</code></pre>
            </div>

          </article>

          ${explanations.length ? `
            <article class="code-explanation">
              <h3>Kodning tushuntirilishi</h3>
              ${renderPoints(explanations)}
            </article>
          ` : ""}

        </div>

        ${slide.note ? `
          <aside class="slide-note">
            ${escapeHTML(slide.note)}
          </aside>
        ` : ""}

      </div>
    `;
  }

  /* =====================================================
     QUESTIONS SLIDE
     ===================================================== */

  function renderQuestions(slide) {
    const questions = Array.isArray(slide.questions)
      ? slide.questions
      : [];

    return `
      <div class="slide-content">
        <h2 class="slide-title">${escapeHTML(slide.title)}</h2>
        ${slide.subtitle ? `<p class="slide-subtitle">${escapeHTML(slide.subtitle)}</p>` : ""}

        <div class="questions-grid">
          ${questions.map((question, index) => `
            <article class="question-item">
              <strong>${index + 1}.</strong>
              ${escapeHTML(question)}
            </article>
          `).join("")}
        </div>

        ${slide.note ? `<aside class="slide-note">${escapeHTML(slide.note)}</aside>` : ""}
      </div>
    `;
  }

  /* =====================================================
     ANSWERS SLIDE
     ===================================================== */

  function renderAnswers(slide) {
    const answers = Array.isArray(slide.answers)
      ? slide.answers
      : [];

    return `
      <div class="slide-content">
        <h2 class="slide-title">${escapeHTML(slide.title)}</h2>
        ${slide.subtitle ? `<p class="slide-subtitle">${escapeHTML(slide.subtitle)}</p>` : ""}

        <div class="answers-grid">
          ${answers.map((answer, index) => `
            <article class="answer-item">
              <strong>${index + 1}.</strong>
              ${escapeHTML(answer)}
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  /* =====================================================
     CONCLUSION SLIDE
     ===================================================== */

  function renderConclusion(slide) {
    return `
      <div class="slide-content">
        <h2 class="slide-title">${escapeHTML(slide.title)}</h2>

        ${slide.subtitle ? `<p class="slide-subtitle">${escapeHTML(slide.subtitle)}</p>` : ""}
        ${slide.lead ? `<p class="slide-lead">${escapeHTML(slide.lead)}</p>` : ""}

        ${renderPoints(slide.points)}

        ${slide.finalMessage ? `
          <div class="conclusion-message">
            ${escapeHTML(slide.finalMessage)}
          </div>
        ` : ""}

        ${slide.note ? `<aside class="slide-note">${escapeHTML(slide.note)}</aside>` : ""}
      </div>
    `;
  }

  /* =====================================================
     QUIZ HTML
     ===================================================== */

  function renderQuiz() {
    return `
      <div class="slide-content raid-quiz">
        <div id="raidQuizScreen"></div>
      </div>
    `;
  }

  function renderQuizScreen() {
    const screen = $("#raidQuizScreen");

    if (!screen) return;

    if (quiz.finished) {
      screen.innerHTML = renderQuizResults();
      return;
    }

    const studentIndex = quiz.student;
    const question = RAID_QUIZ[studentIndex];
    const answer = quiz.answers[studentIndex];

    if (!question) {
      quiz.finished = true;
      screen.innerHTML = renderQuizResults();
      return;
    }

    screen.innerHTML = `
      <div class="quiz-topline">
        <span>RAID PREMIUM • INTERACTIVE TEST</span>
        <span>${studentIndex + 1} / 23</span>
      </div>

      <h2 class="slide-title">Bilimingizni sinab ko‘ring</h2>

      <div class="quiz-progress">
        <div style="width:${((studentIndex + 1) / 23) * 100}%"></div>
      </div>

      <div class="quiz-student">
        <span>Talaba</span>
        <strong>${studentIndex + 1}</strong>
      </div>

      <article class="quiz-question">
        <span class="quiz-question-number">
          SAVOL ${studentIndex + 1}
        </span>

        <h3>${escapeHTML(question.q)}</h3>

        <div class="quiz-options">
          ${question.a.map((option, index) => `
            <button
              class="quiz-option ${answer && answer.selected === index ? (answer.correct ? "correct" : "wrong") : ""}"
              data-answer="${index}"
              ${answer ? "disabled" : ""}
              type="button"
            >
              <span>${String.fromCharCode(65 + index)}</span>
              ${escapeHTML(option)}
            </button>
          `).join("")}
        </div>

        ${answer ? `
          <div class="quiz-feedback ${answer.correct ? "success" : "error"}">
            ${answer.correct
              ? "✓ To‘g‘ri javob!"
              : "✗ Noto‘g‘ri javob! To‘g‘ri javob: " + String.fromCharCode(65 + question.c) + ". " + escapeHTML(question.a[question.c])
            }
          </div>
        ` : ""}
      </article>

      <div class="quiz-actions">
        <button id="skipStudent" type="button" class="quiz-secondary">
          Kelmagan — o‘tkazish
        </button>

        <button id="finishQuiz" type="button" class="quiz-danger">
          Testni tugatish
        </button>

        <button
          id="nextStudent"
          type="button"
          class="quiz-primary"
          ${answer ? "" : "disabled"}
        >
          Boshqa testga o‘tish →
        </button>
      </div>
    `;

    screen.querySelectorAll("[data-answer]").forEach(button => {
      button.addEventListener("click", () => {
        selectQuizAnswer(Number(button.dataset.answer));
      });
    });

    $("#skipStudent")?.addEventListener("click", skipStudent);
    $("#nextStudent")?.addEventListener("click", nextStudent);
    $("#finishQuiz")?.addEventListener("click", finishQuiz);
  }

  /* =====================================================
     QUIZ ACTIONS
     ===================================================== */

  function selectQuizAnswer(selected) {
    if (quiz.answers[quiz.student] !== null) return;

    const correct = RAID_QUIZ[quiz.student].c === selected;

    quiz.answers[quiz.student] = {
      status: correct ? "correct" : "wrong",
      selected,
      correct
    };

    renderQuizScreen();
  }

  function skipStudent() {
    if (quiz.answers[quiz.student] !== null) return;

    quiz.answers[quiz.student] = {
      status: "absent"
    };

    moveToNextStudent();
  }

  function nextStudent() {
    if (quiz.answers[quiz.student] === null) return;

    moveToNextStudent();
  }

  function moveToNextStudent() {
    if (quiz.student >= 22) {
      quiz.finished = true;
    } else {
      quiz.student++;
    }

    renderQuizScreen();
  }

  function finishQuiz() {
    quiz.finished = true;
    renderQuizScreen();
  }

  /* =====================================================
     QUIZ RESULTS
     ===================================================== */

  function renderQuizResults() {
    const correct = quiz.answers.filter(
      item => item?.status === "correct"
    ).length;

    const wrong = quiz.answers.filter(
      item => item?.status === "wrong"
    ).length;

    const absent = quiz.answers.filter(
      item => item?.status === "absent"
    ).length;

    const unanswered = 23 - correct - wrong - absent;

    return `
      <div class="quiz-results">
        <div class="quiz-topline">
          RAID PREMIUM • TEST NATIJALARI
        </div>

        <h2 class="slide-title">Test yakunlandi!</h2>

        <div class="quiz-stats">
          <div><strong>${correct}</strong><span>To‘g‘ri</span></div>
          <div><strong>${wrong}</strong><span>Noto‘g‘ri</span></div>
          <div><strong>${absent}</strong><span>Kelmagan</span></div>
          <div><strong>${unanswered}</strong><span>Javobsiz</span></div>
        </div>

        <div class="quiz-result-list">
          ${quiz.answers.map((item, index) => `
            <div class="quiz-result-row">
              <strong>Talaba ${index + 1}</strong>
              <span class="result-status ${item?.status || "unanswered"}">
                ${
                  item?.status === "correct" ? "To‘g‘ri" :
                  item?.status === "wrong" ? "Noto‘g‘ri" :
                  item?.status === "absent" ? "Kelmagan" :
                  "Javob bermadi"
                }
              </span>
            </div>
          `).join("")}
        </div>

        <button id="restartQuiz" class="quiz-primary" type="button">
          Testni qayta boshlash
        </button>
      </div>
    `;
  }

  function restartQuiz() {
    quiz.student = 0;
    quiz.answers = Array(23).fill(null);
    quiz.finished = false;
    renderQuizScreen();
  }

  /* =====================================================
     SLIDE RENDERER
     ===================================================== */

  function renderSlide(slide, index) {
    let content = "";

    switch (slide.type) {
      case "content":
        content = renderContent(slide);
        break;

      case "code":
        content = renderCode(slide);
        break;

      case "questions":
        content = renderQuestions(slide);
        break;

      case "answers":
        content = renderAnswers(slide);
        break;

      case "conclusion":
        content = renderConclusion(slide);
        break;

      case "quiz":
        content = renderQuiz();
        break;

      default:
        content = renderContent(slide);
    }

    return `
      <section
        class="slide"
        id="slide-${index + 1}"
        data-slide-index="${index}"
        aria-label="${escapeHTML(slide.title || `Slayd ${index + 1}`)}"
        aria-hidden="${index === 0 ? "false" : "true"}"
      >
        ${content}
      </section>
    `;
  }

  /* =====================================================
     NAVIGATION CONTROLS
     ===================================================== */

  function createControls() {
    const controls = document.createElement("div");

    controls.className = "raid-controls";

    controls.innerHTML = `
      <div class="raid-progress">
        <div class="raid-progress-track">
          <div class="raid-progress-fill" id="raidProgressFill"></div>
        </div>
      </div>

      <div class="raid-control-inner">
        <button class="nav-btn" id="prevSlide" type="button">←</button>

        <span class="raid-counter" id="slideCounter">
          1 / ${state.slides.length}
        </span>

        <button class="nav-btn" id="nextSlide" type="button">→</button>

        <button class="control-btn" id="fullscreenBtn" type="button">
          ⛶ To‘liq ekran
        </button>
      </div>
    `;

    root().appendChild(controls);
  }

  /* =====================================================
     SLIDE NAVIGATION
     ===================================================== */

  function getSlideElements() {
    return [...root().querySelectorAll(".slide")];
  }

  function showSlide(index) {
    const slides = getSlideElements();

    if (!slides.length) return;

    state.current = Math.max(0, Math.min(index, slides.length - 1));

    slides.forEach((slide, i) => {
      const active = i === state.current;

      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });

    $("#slideCounter").textContent =
      `${state.current + 1} / ${slides.length}`;

    $("#raidProgressFill").style.width =
      `${((state.current + 1) / slides.length) * 100}%`;

    $("#prevSlide").disabled = state.current === 0;
    $("#nextSlide").disabled = state.current === slides.length - 1;

    if (state.current === 15) {
      renderQuizScreen();
    }

    window.dispatchEvent(new CustomEvent(CONFIG.animationEvent, {
      detail: {
        slide: slides[state.current],
        index: state.current
      }
    }));
  }

  function nextSlide() {
    showSlide(state.current + 1);
  }

  function previousSlide() {
    showSlide(state.current - 1);
  }

  /* =====================================================
     FULLSCREEN
     ===================================================== */

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await root().requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen xatosi:", error);
    }
  }

  /* =====================================================
     EVENT LISTENERS
     ===================================================== */

  function bindControls() {
    $("#prevSlide").addEventListener("click", previousSlide);
    $("#nextSlide").addEventListener("click", nextSlide);
    $("#fullscreenBtn").addEventListener("click", toggleFullscreen);

    document.addEventListener("keydown", event => {
      if (!state.started) return;

      if (
        event.target instanceof Element &&
        event.target.closest(".raid-quiz")
      ) {
        return;
      }

      if (["ArrowRight", "PageDown"].includes(event.key)) {
        event.preventDefault();
        nextSlide();
      }

      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previousSlide();
      }

      if (event.key === "Home") showSlide(0);

      if (event.key === "End") {
        showSlide(getSlideElements().length - 1);
      }

      if (event.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    });

    root().addEventListener("click", event => {
      if (event.target.closest("#restartQuiz")) {
        restartQuiz();
      }
    });
  }

  /* =====================================================
     START PRESENTATION
     ===================================================== */

  function startPresentation() {
    const hero = document.getElementById(CONFIG.heroId);

    if (!hero) return;

    hero.classList.add("hidden");
    root().classList.remove("hidden");

    state.started = true;
    showSlide(0);
  }

  /* =====================================================
     INITIALIZATION
     ===================================================== */

  function init() {
    if (!root()) {
      console.error("RAID: presentation topilmadi.");
      return;
    }

    if (!Array.isArray(window.RAID_SLIDES)) {
      console.error("RAID: RAID_SLIDES topilmadi.");
      return;
    }

    state.slides = [
      ...window.RAID_SLIDES,
      {
        type: "quiz",
        title: "RAID PREMIUM TEST"
      }
    ];

    root().innerHTML = state.slides
      .map(renderSlide)
      .join("");

    createControls();
    bindControls();

    root().classList.add("hidden");

    const startButton =
      document.getElementById(CONFIG.startButtonId);

    if (startButton) {
      startButton.addEventListener("click", startPresentation);
    }

    document.addEventListener("fullscreenchange", () => {
      state.fullscreen = Boolean(document.fullscreenElement);

      const button = $("#fullscreenBtn");

      if (button) {
        button.textContent = state.fullscreen
          ? "⛶ Ekrandan chiqish"
          : "⛶ To‘liq ekran";
      }
    });

    console.info(
      `RAID PREMIUM: ${state.slides.length} ta slayd tayyor.`
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  window.RAIDPresentation = {
    next: nextSlide,
    previous: previousSlide,
    goTo: showSlide,
    start: startPresentation,

    get currentSlide() {
      return state.current + 1;
    },

    get totalSlides() {
      return state.slides.length;
    }
  };

})();
