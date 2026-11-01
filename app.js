<<<<<<< HEAD

const teachers = [
  { name: "Nosirjonov Ibrohimjon", subject: "Математика", experience: 15, description: "Опытный педагог, помогающий ученикам раскрывать математические способности." },
  { name: "Оксана Орифовна", subject: "Родной язык", experience: 17, description: "Развивает грамотность, речь и интерес к родному языку." },
  { name: "Zayniddinova Sanobarxon", subject: "Английский язык", experience: 10, description: "English Teacher 1st category teacherC1 level IELTS 7.5 TESOL Master at Webster University" },
  { name: "SHaxnoza Zakirjanovna", subject: "Физика", experience: 20, description: "Объясняет законы природы через исследования и практические задачи." },
  { name: "Muxsin Nasirovich", subject: "Информатика", experience: 29, description: "Знакомит учеников с алгоритмами, программированием и цифровыми технологиями." },
  { name: "Oygul Nadirovna ", subject: "История", experience: 8, description: "Самая молодая учительница в школе и она хорошо ладит с учениками" },
  { name: "Zilola Abduvasiyevna", subject: "Химия", experience: 24, description: "Знакомит с химическими процессами и научным мышлением." },
  { name: "Malika Alisherovna", subject: "Биология", experience: 21, description: "Учит понимать живую природу и бережно относиться к окружающей среде." },
  { name: "Qodirova Komilaxon", subject: "География", experience: 25, description: "Открывает мир стран, природных явлений и географических исследований." },
  { name: "SHaxida Mansurovna", subject: "Литература", experience: 36, description: "Развивает любовь к чтению, анализу текстов и творческому мышлению." }
];

const subjects = [
  { name: "Математика", icon: "∑", teacher: 3, progress: 87, description: "Логика, числа и решение задач." },
  { name: "Родной язык", icon: "文", teacher: 7, progress: 91, description: "Грамотность и культура речи." },
  { name: "Английский язык", icon: "A", teacher: 6, progress: 84, description: "Язык международного общения." },
  { name: "Физика", icon: "ϟ", teacher: 8, progress: 80, description: "Законы и явления природы." },
  { name: "Информатика", icon: "</>", teacher: 3, progress: 93, description: "Алгоритмы и цифровые навыки." },
  { name: "История", icon: "⌛", teacher: 4, progress: 99, description: "События прошлого и наследие." },
  { name: "Химия", icon: "⚗", teacher: 5, progress: 80, description: "Вещества и их превращения." },
  { name: "Биология", icon: "❋", teacher: 9, progress: 89, description: "Жизнь и окружающий мир." }
];

const monthNames = [
  "Январь", "Февраль", "Март", "Апрель",
  "Май", "Июнь", "Июль", "Август",
  "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

const events = [
  [
    ["14", "День знаний и новых целей", "Обсуждение планов, учебных целей и достижений нового года."],
    ["27", "Неделя чтения", "Книжные выставки, чтение и литературные викторины."]
  ],
  [
    ["09", "Неделя родного языка", "Конкурсы грамотности, выразительного чтения и сочинений."],
    ["21", "Интеллектуальный турнир", "Командные задания по школьным предметам."]
  ],
  [
    ["08", "Праздник весны", "Творческие выступления и школьные мероприятия к весенним праздникам."],
    ["21", "Навруз", "Знакомство с традициями, национальной культурой и обычаями."]
  ],
  [
    ["07", "Неделя здоровья", "Спортивные состязания и занятия о здоровом образе жизни."],
    ["22", "День Земли", "Экологические проекты и уборка школьного двора."]
  ],
  [
    ["09", "День памяти и почестей", "Познавательные встречи и мероприятия памяти."],
    ["25", "Праздник знаний", "Выставка проектов и награждение учеников."]
  ],
  [
    ["01", "День защиты детей", "Творческие конкурсы, игры и спортивные занятия."],
    ["15", "Летняя читательская неделя", "Книги, чтение и рекомендации на лето."]
  ],
  [
    ["10", "Летняя школа проектов", "Развитие исследовательских и творческих навыков."],
    ["24", "День открытий", "Знакомство с интересными научными фактами."]
  ],
  [
    ["20", "Подготовка к учебному году", "Организационные встречи и подготовка учебных кабинетов."],
    ["29", "День школьных идей", "Планирование новых кружков и ученических проектов."]
  ],
  [
    ["02", "День знаний", "Торжественное начало учебного года и встреча учеников."],
    ["27", "Неделя языков", "Викторины, выступления и языковые конкурсы."]
  ],
  [
    ["01", "Неделя учителей", "Поздравления педагогов и творческие выступления учеников."],
    ["21", "День школьных проектов", "Презентация исследований, идей и командных работ."]
  ],
  [
    ["16", "Неделя интеллектуальных игр", "Командные соревнования и вопросы на эрудицию."],
    ["25", "День благодарности", "Творческие письма и добрые слова учителям."]
  ],
  [
    ["08", "Зимний творческий фестиваль", "Выставки, музыка и праздничные выступления."],
    ["25", "Итоги учебного полугодия", "Подведение результатов и планирование новых целей."]
  ]
];

const news = [
  {
    date: "30.10.2026",
    category: "Объявление",
    title: "Новости школьной жизни",
    text: "Сегодня пришли гости из горано и посмотрели что умеют наши ученики.",
    icon: "✦"
  },
  {
    date: "28.09.2026",
    category: "Достижения",
    title: "Успехи наших учеников",
    text: "В наших не которых учениках есть свой оссобенный талант, к примеру самая молодая ученица с самым большим талантом Д.Нигора(ielts:6 level:b2 или Б.Аюбхон из 9г:создал этот сайт для школы)",
    icon: "🏆"
  },
  {
    date: "01.11.2026",
    category: "События",
    title: "Праздники школы",
    text: "Скоро у нас новый год если хотите самых лучших чуств для праздника приезжайте сюда будем вместе отмечать",
    icon: "✧"
  }
];

const faqs = [
  {
    question: "Где находится школа №1?",
    answer: "Школа расположена в городе Коканде Ферганской области Узбекистана. Точный адрес необходимо указать после проверки."
  },
  {
    question: "Как связаться с администрацией?",
    answer: "Используйте два телефонных номера, размещённых в разделе «Контакты». Перед публикацией укажите действующие номера школы."
  },
  {
    question: "Как узнать расписание уроков?",
    answer: "Добавьте актуальное расписание в раздел новостей или создайте отдельную страницу с расписанием для каждого класса."
  },
  {
    question: "Где посмотреть школьные мероприятия?",
    answer: "В разделе «Школьная жизнь» размещён календарь на все 12 месяцев. Выберите месяц, чтобы увидеть мероприятия."
  },
  {
    question: "Как узнать о достижениях учеников?",
    answer: "Посетите стену достижений. Там можно размещать подтверждённые результаты олимпиад, турниров и языковых экзаменов."
  },
  {
    question: "Как добавить новость на сайт?",
    answer: "Измените массив news в файле script.js. Для постоянного обновления сайта несколькими сотрудниками в будущем можно подключить систему управления контентом."
  }
];

const teachersGrid = document.getElementById("teachersGrid");
const subjectsGrid = document.getElementById("subjectsGrid");
const monthList = document.getElementById("monthList");
const monthEvents = document.getElementById("monthEvents");
const newsGrid = document.getElementById("newsGrid");
const faqList = document.getElementById("faqList");

function renderTeachers() {
  teachersGrid.innerHTML = teachers.map((teacher, index) => `
    <article class="teacher-card reveal">
      <span class="teacher-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="teacher-avatar">${String(index + 1).padStart(2, "0")}</div>
      <h3>${teacher.name}</h3>
      <p>${teacher.subject}</p>
      <p>${teacher.description}</p>
      <span class="teacher-experience">Стаж: ${teacher.experience} лет</span>
    </article>
  `).join("");
}

function renderSubjects() {
  subjectsGrid.innerHTML = subjects.map((subject, index) => `
    <button class="subject-card reveal" type="button" data-subject="${index}" aria-pressed="false">
      <span class="subject-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="subject-icon">${subject.icon}</span>
      <h3>${subject.name}</h3>
      <p>${subject.description}</p>
      <div class="subject-teacher">${teachers[subject.teacher].name}</div>
      <div class="subject-progress-label">
        <span>Освоение материала</span>
        <strong>${subject.progress}%</strong>
      </div>
      <div class="progress-track">
        <div class="progress-fill" data-progress="${subject.progress}%"></div>
      </div>
    </button>
  `).join("");

  subjectsGrid.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => {
      subjectsGrid.querySelectorAll(".subject-card").forEach(item => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });

      card.classList.add("active");
      card.setAttribute("aria-pressed", "true");
    });
  });
}

function renderMonths() {
  monthList.innerHTML = monthNames.map((month, index) => `
    <button class="month-button ${index === 0 ? "active" : ""}" type="button" data-month="${index}" aria-pressed="${index === 0}">
      ${month}
    </button>
  `).join("");

  monthList.querySelectorAll(".month-button").forEach(button => {
    button.addEventListener("click", () => {
      monthList.querySelectorAll(".month-button").forEach(item => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      renderMonthEvents(Number(button.dataset.month));
    });
  });

  renderMonthEvents(0);
}

function renderMonthEvents(index) {
  monthEvents.innerHTML = `
    <div class="month-events-heading">
      <h3>${monthNames[index]}</h3>
      <span>2 мероприятия</span>
    </div>
    ${events[index].map(event => `
      <article class="event-item">
        <div class="event-date">${event[0]}</div>
        <div>
          <h4>${event[1]}</h4>
          <p>${event[2]}</p>
        </div>
      </article>
    `).join("")}
  `;
}

function renderNews() {
  newsGrid.innerHTML = news.map((item, index) => `
    <article class="news-card reveal">
      <div class="news-art art-${["one", "two", "three", "four", "five", "six"][(index % 6)]}">
        <span>${item.icon}</span>
      </div>
      <div class="news-body">
        <div class="news-meta"><span>${item.date}</span><span>№ ${String(index + 1).padStart(2, "0")}</span></div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <span class="news-badge">${item.category}</span>
      </div>
    </article>
  `).join("");
}

function renderFaqs() {
  faqList.innerHTML = faqs.map((item, index) => `
    <article class="faq-item">
      <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}">
        <span>${item.question}</span>
        <span aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${index}">
        <div><p>${item.answer}</p></div>
      </div>
    </article>
  `).join("");

  faqList.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const willOpen = !item.classList.contains("open");

      faqList.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("open");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (willOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function setTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark", isDark);
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? "Включить светлую тему" : "Включить тёмную тему");

  try {
    localStorage.setItem("school-theme", theme);
  } catch (error) {
    return;
  }
}

let initialTheme = "light";

try {
  initialTheme = localStorage.getItem("school-theme") || "light";
} catch (error) {
  initialTheme = "light";
}

setTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("dark") ? "light" : "dark");
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.textContent = isOpen ? "×" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

let revealObserver;

function initRevealAnimations() {
  if (revealObserver) revealObserver.disconnect();

  const elements = document.querySelectorAll(".reveal:not(.visible)");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(element => revealObserver.observe(element));
}

const progressObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".progress-fill").forEach(bar => {
            bar.style.width = bar.dataset.progress;
          });
          progressObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 })
  : null;

if (progressObserver) {
  progressObserver.observe(subjectsGrid);
} else {
  subjectsGrid.querySelectorAll(".progress-fill").forEach(bar => {
    bar.style.width = bar.dataset.progress;
  });
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lightboxImage.src = "";
}

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

renderTeachers();
renderSubjects();
renderMonths();
renderNews();
renderFaqs();
initRevealAnimations();
=======
/* =========================
   1. ЗАГРУЗКА
========================= */

window.addEventListener("load", () => {

    const intro = document.querySelector(".intro");
    const loadingText = document.querySelector(".loading-text");

    let number = 0;

    const counter = setInterval(() => {

        number++;

        loadingText.textContent =
            "ЗАГРУЗКА " + String(number).padStart(2, "0") + "...";

        if (number >= 100) {
            clearInterval(counter);
        }

    }, 25);

});


/* =========================
   2. КУРСОР
========================= */

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


/* Стили курсора */

const cursorStyle = document.createElement("style");

cursorStyle.innerHTML = `
.custom-cursor {
    position: fixed;
    width: 15px;
    height: 15px;

    border: 1px solid #111;
    border-radius: 50%;

    pointer-events: none;

    z-index: 99999;

    transform: translate(-50%, -50%);

    transition:
        width .2s ease,
        height .2s ease,
        background .2s ease;
}
`;

document.head.appendChild(cursorStyle);


/* =========================
   3. НАВИГАЦИЯ
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.height = "65px";
        navbar.style.background = "rgba(245,245,240,0.95)";

    } else {

        navbar.style.height = "85px";
        navbar.style.background = "rgba(245,245,240,0.8)";

    }

});


/* =========================
   4. МОБИЛЬНОЕ МЕНЮ
========================= */

const menu = document.querySelector(".menu");
const nav = document.querySelector(".navbar nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Стили мобильного меню */

const menuStyle = document.createElement("style");

menuStyle.innerHTML = `
@media (max-width: 1000px) {

    .navbar nav.active {

        display: flex;

        position: absolute;

        top: 85px;
        left: 0;

        width: 100%;

        padding: 30px;

        background: #111;

        flex-direction: column;

        gap: 20px;

    }

    .navbar nav.active a {
        color: white;
        font-size: 14px;
    }

}
`;

document.head.appendChild(menuStyle);


/* =========================
   5. АНИМАЦИЯ ЧИСЕЛ
========================= */

const stats = document.querySelectorAll(".stat strong");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const element = entry.target;

            const text = element.textContent;

            const number = parseInt(
                text.replace(/\D/g, "")
            );

            let current = 0;

            const duration = 1500;

            const step = number / (duration / 20);

            const timer = setInterval(() => {

                current += step;

                if (current >= number) {

                    current = number;

                    clearInterval(timer);

                }

                element.textContent =
                    Math.floor(current) + "+";

            }, 20);

            observer.unobserve(element);

        }

    });

});


stats.forEach(stat => {

    observer.observe(stat);

});


/* =========================
   6. ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-text, .stat, .subject-card, .timeline-item, .achievement, .gallery-item, .future h2, .contact h2"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* Стили анимации */

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.reveal {

    opacity: 0;

    transform:
        translateY(60px)
        scale(.95);

    transition:
        opacity .8s ease,
        transform .8s ease;

}

.reveal.show {

    opacity: 1;

    transform:
        translateY(0)
        scale(1);

}

`;

document.head.appendChild(revealStyle);


/* =========================
   7. ПАРАЛЛАКС
========================= */

const heroNumber =
    document.querySelector(".big-number");

const heroCircle =
    document.querySelector(".circle-text");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 30;

    const y =
        (window.innerHeight / 2 - e.clientY) / 30;

    heroNumber.style.transform =
        `translate(${x}px, ${y}px)`;

    heroCircle.style.transform =
        `translate(${-x}px, ${-y}px)`;

});


/* =========================
   8. 3D КАРТОЧКИ ПРЕДМЕТОВ
========================= */

const subjectCards =
    document.querySelectorAll(".subject-card");

subjectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            (y - centerY) / 15;

        const rotateY =
            (centerX - x) / 15;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) scale(1)";

    });

});


/* =========================
   9. АНИМАЦИЯ ДОСТИЖЕНИЙ
========================= */

const achievements =
    document.querySelectorAll(".achievement");

achievements.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform =
            "translateX(15px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform =
            "translateX(0)";

    });

});


/* =========================
   10. ГАЛЕРЕЯ
========================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX =
            (x - rect.width / 2) / 20;

        const moveY =
            (y - rect.height / 2) / 20;

        item.style.transform =
            `scale(0.98)
             translate(${moveX}px, ${moveY}px)`;

    });


    item.addEventListener("mouseleave", () => {

        item.style.transform =
            "scale(1) translate(0,0)";

    });

});


/* =========================
   11. ПЛАВНАЯ НАВИГАЦИЯ
========================= */

document.querySelectorAll("a[href^='#']")
.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

        nav.classList.remove("active");

    });

});


/* =========================
   12. ПЛАВАЮЩИЕ ЧАСТИЦЫ
========================= */

const hero = document.querySelector(".hero");

setInterval(() => {

    const particle =
        document.createElement("span");

    particle.style.position = "absolute";

    particle.style.width = "4px";
    particle.style.height = "4px";

    particle.style.background = "#111";

    particle.style.borderRadius = "50%";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.opacity = "0.15";

    particle.style.pointerEvents = "none";

    particle.style.transition =
        "transform 4s ease, opacity 4s ease";

    hero.appendChild(particle);


    setTimeout(() => {

        particle.style.transform =
            "translateY(-100px)";

        particle.style.opacity = "0";

    }, 100);


    setTimeout(() => {

        particle.remove();

    }, 4000);

}, 800);


/* =========================
   13. АКТИВНАЯ НАВИГАЦИЯ
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.fontWeight = "400";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.fontWeight = "900";

        }

    });

});


/* =========================
   14. КОНСОЛЬ
========================= */

console.log(
    "%c 1-Я ШКОЛА — ЦИФРОВОЙ КАМПУС ",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "Добро пожаловать в будущее образования 🚀"
);
>>>>>>> 67efd540e0d42bfb2fa8c18ce345bc09596b3b7f
