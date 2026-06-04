// ===== LANGUAGE SWITCHER =====
let currentLang = 'ru';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
  });
  document.querySelectorAll('[data-ru]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
}

// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===== FEATURE PREVIEW =====
const featurePreviews = [
  {
    label: { ru: 'AI-ПОМОЩНИК', uz: 'AI-YORDAMCHI' },
    progress: '68%',
    question: {
      ru: 'Что означает этот дорожный знак с красным треугольником и восклицательным знаком?',
      uz: "Qizil uchburchak va undov belgisi bo'lgan bu yo'l belgisi nimani anglatadi?"
    },
    hint: {
      ru: 'Вы перепутали знак 1.17 с предупреждающим знаком. Запомните: этот знак всегда в треугольнике с чёрным восклицательным знаком.',
      uz: "Siz 1.17 belgisini ogohlantiruvchi belgi bilan adashtirdingiz. Yodda tuting: bu belgi doimo qora undov belgisi bilan uchburchakda bo'ladi."
    }
  },
  {
    label: { ru: 'СЛАБЫЕ ТЕМЫ', uz: 'ZAIF MAVZULAR' },
    progress: '45%',
    question: {
      ru: 'Система обнаружила: вы ошибаетесь в теме "Дорожная разметка" — 8 из 10 раз. Тренируем прямо сейчас.',
      uz: "Tizim aniqladiki: siz \"Yo'l belgilash\" mavzusida — 10 marta ichida 8 martada xato qilasiz. Hozir mashq qilamiz."
    },
    hint: {
      ru: 'Рекомендация: повторите тему «Разметка» — там 3 ловушки, которые ловят 60% сдающих.',
      uz: "Tavsiya: «Belgilash» mavzusini takrorlang — u erda topshiruvchilarning 60%ini ushlaydi 3 tuzoq bor."
    }
  },
  {
    label: { ru: 'РЕЖИМ ГАИ', uz: 'GAI REJIMI' },
    progress: '100%',
    question: {
      ru: 'СИМУЛЯЦИЯ ЭКЗАМЕНА · 20 вопросов · 20 минут · Без подсказок. Нажмите «Начать» когда будете готовы.',
      uz: "IMTIHON SIMULYATSIYASI · 20 savol · 20 daqiqa · Maslahatlar yo'q. Tayyor bo'lganingizda \"Boshlash\"ni bosing."
    },
    hint: {
      ru: 'Режим «как в ГАИ» — никаких подсказок, строгий таймер. Психологическая подготовка к реальному экзамену.',
      uz: "«GAIdagi kabi» rejim — hech qanday maslahat yo'q, qat'iy taymer. Haqiqiy imtihonga psixologik tayyorgarlik."
    }
  },
  {
    label: { ru: 'ПРОГНОЗ', uz: 'PROGNOZ' },
    progress: '87%',
    question: {
      ru: 'Ваша готовность к экзамену: 87%. Осталось улучшить: «Знаки приоритета» и «Проезд перекрёстков».',
      uz: "Imtihonga tayyorligingiz: 87%. Yaxshilash kerak: «Ustuvorlik belgilari» va «Chorrahalarda o'tish»."
    },
    hint: {
      ru: 'Совет: позанимайтесь ещё 2–3 дня и ваши шансы сдачи вырастут до 96%. Вы почти готовы!',
      uz: "Maslahat: yana 2-3 kun mashg'ulot o'tkazing va topshirish imkoniyatingiz 96%gacha oshadi. Deyarli tayyorsiz!"
    }
  }
];

function selectFeature(el, idx) {
  document.querySelectorAll('.feature-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  const p = featurePreviews[idx];
  const lang = currentLang;
  document.getElementById('previewProgress').style.width = p.progress;
  document.querySelector('.preview-label').textContent = p.label[lang] || p.label.ru;
  document.getElementById('previewQuestion').textContent = p.question[lang] || p.question.ru;
  document.getElementById('hintText').textContent = p.hint[lang] || p.hint.ru;
}

// ===== SCROLL FADE IN =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
