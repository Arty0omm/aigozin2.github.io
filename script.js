document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const hamburgerBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const body = document.body;
  const langButton = document.querySelector(".lang-button");
  const langDropdown = document.querySelector(".lang-dropdown");
  const langOptions = document.querySelectorAll(".lang-dropdown button");

  // Translation data
  const translations = {
    ru: {
      "nav-about": "О компании",
      "nav-services": "Услуги",
      "nav-advantages": "Преимущества",
      "nav-contacts": "Контакты",
      "theme-toggle": "Сменить тему",
      "about-title": "Вам нужна помощь? Обратитесь к специалисту!",
      "about-text1": "ИП Айгожина — IT-компания с 5-летним опытом в ремонте компьютеров, заправке картриджей и обслуживании техники.",
      "about-text2": "Мы обеспечиваем надёжную работу вашей техники с использованием сертифицированных комплектующих.",
      "about-text3": "Наши специалисты регулярно обучаются и следят за новыми технологиями.",
      "about-warranty": "Гарантийное Сервисное Обслуживание Вашей Техники.",
      "advantages-title": "Ваша техника в надежных руках",
      "advantages-quality-title": "Качество",
      "advantages-quality-text": "Перед проведением ремонтных работ специалист выполняет диагностику, программы или аппаратный средств. Точно по результату диагностики можно определить сроки и стоимость проведения необходимых ремонтных работ.",
      "advantages-reliability-title": "Надежность",
      "advantages-reliability-text": "Наши специалисты проходят ежегодный Сервисный Центр профессиональной ремонтный инженеров, которые способны ежегодно аттестовать и отремонтировать устройство, поэтому вам не придется долго. Чтобы вернуть вам исправное устройство, чтобы вы могли пользоваться только исправными запчастями и расходами на ремонт техники.",
      "advantages-speed-title": "Быстрота",
      "advantages-speed-text": "Мы проводим ремонт максимально быстро. Несложные поломки устраняются в день обращения от 1 часа. При этом мы гарантируем высокое качество ремонта компьютеров!",
      "advantages-specialists-title": "Специалисты",
      "advantages-specialists-text": "Мы предоставляем гарантию на выполненный ремонт и замененные оригинальные запасные части. Мы начинаем гарантийный ремонт вашей техники.",
      "services-title": "Услуги",
      "services-computer-repair-title": "Ремонт компьютеров",
      "services-computer-repair-text1": "Мы предлагаем полный спектр услуг по ремонту компьютеров, включая диагностику аппаратных и программных неисправностей, замену комплектующих, настройку операционных систем и устранение вирусов. Наши специалисты используют современное оборудование для точной диагностики, что позволяет быстро выявить проблему и устранить её с минимальными затратами времени.",
      "services-computer-repair-text2": "Будь то проблемы с запуском, медленная работа или аппаратные сбои, мы гарантируем качественный ремонт с использованием сертифицированных деталей. Вы получите полностью работоспособное устройство с гарантией на выполненные работы.",
      "services-cartridge-refill-title": "Заправка картриджей",
      "services-cartridge-refill-text1": "Наша компания предоставляет профессиональные услуги по заправке и восстановлению картриджей для лазерных и струйных принтеров. Мы используем только высококачественные расходные материалы, что обеспечивает отличное качество печати и долгий срок службы картриджей.",
      "services-cartridge-refill-text2": "Заправка выполняется в кратчайшие сроки, а при необходимости мы проводим профилактическую чистку и тестирование картриджей. Это экономичное решение для вашего офиса, которое позволяет сократить расходы на печать без потери качества.",
      "services-office-maintenance-title": "Обслуживание офисной техники",
      "services-office-maintenance-text1": "Мы предлагаем комплексное техническое обслуживание офисной техники, включая принтеры, сканеры, копировальные аппараты и МФУ. Наши услуги включают регулярную профилактику, диагностику, ремонт и замену изношенных деталей, что помогает продлить срок службы оборудования и избежать непредвиденных поломок.",
      "services-office-maintenance-text2": "Мы понимаем, насколько важна бесперебойная работа офисной техники для вашего бизнеса, поэтому наши специалисты работают оперативно и с максимальной ответственностью, чтобы ваше оборудование всегда было в идеальном состоянии.",
      "services-learn-more": "Узнать подробнее",
      "contacts-title": "Контакты",
      "contacts-phone": "Телефон: +7 87472061807",
      "contacts-email": "Email: armashka.91@mail.ru",
      "contacts-address": "Адрес: Академика Чокина улица, 38/1",
      "footer-text": "© 2025 ИП Айгожина. Все права защищены."
    },
    kk: {
      "nav-about": "Компания туралы",
      "nav-services": "Қызметтер",
      "nav-advantages": "Артықшылықтар",
      "nav-contacts": "Байланыстар",
      "theme-toggle": "Теманы өзгерту",
      "about-title": "Сізге көмек керек пе? Маманға хабарласыңыз!",
      "about-text1": "ИП Айгожина — компьютерлерді жөндеу, картридждерді толтыру және техникаға қызмет көрсету бойынша 5 жылдық тәжірибесі бар IT-компания.",
      "about-text2": "Біз сіздің техникаңыздың сенімді жұмысын сертификатталған компоненттерді пайдалана отырып қамтамасыз етеміз.",
      "about-text3": "Біздің мамандар үнемі оқудан өтіп, жаңа технологияларды бақылайды.",
      "about-warranty": "Сіздің техникаңызға кепілдікті қызмет көрсету.",
      "advantages-title": "Сіздің техникаңыз сенімді қолдарда",
      "advantages-quality-title": "Сапа",
      "advantages-quality-text": "Жөндеу жұмыстарын жүргізер алдында маман бағдарламалық немесе аппараттық құралдарды диагностикалайды. Диагностика нәтижесі бойынша жөндеу жұмыстарының мерзімі мен құнын анықтауға болады.",
      "advantages-reliability-title": "Сенімділік",
      "advantages-reliability-text": "Біздің мамандар жыл сайынғы кәсіби жөндеу инженерлерінің қызмет көрсету орталығынан өтеді, олар құрылғыны аттестациялап, жөндей алады, сондықтан сізге ұзақ күтуге тура келмейді. Сізге тек қана түзетілген бөлшектер мен техниканы жөндеуге кеткен шығындармен жұмыс істейтін құрылғыны қайтару үшін.",
      "advantages-speed-title": "Жылдамдық",
      "advantages-speed-text": "Біз жөндеуді мүмкіндігінше тез жүргіземіз. Күрделі емес ақаулар өтініш берген күні 1 сағаттан бастап жойылады. Бұл ретте біз компьютерлерді жөндеудің жоғары сапасын кепілдендіреміз!",
      "advantages-specialists-title": "Мамандар",
      "advantages-specialists-text": "Біз орындалған жөндеуге және ауыстырылған түпнұсқа қосалқы бөлшектерге кепілдік береміз. Біз сіздің техникаңызға кепілдікті жөндеуді бастаймыз.",
      "services-title": "Қызметтер",
      "services-computer-repair-title": "Компьютерлерді жөндеу",
      "services-computer-repair-text1": "Біз компьютерлерді жөндеудің толық спектрін ұсынамыз, оның ішінде аппараттық және бағдарламалық ақауларды диагностикалау, компоненттерді ауыстыру, операциялық жүйелерді баптау және вирустарды жою. Біздің мамандар мәселені тез анықтау және оны ең аз уақыт шығындарымен жою үшін заманауи жабдықтарды пайдаланады.",
      "services-computer-repair-text2": "Іске қосу мәселелері, баяу жұмыс немесе аппараттық ақаулар болсын, біз сертификатталған бөлшектерді пайдалана отырып, сапалы жөндеуді кепілдендіреміз. Сіз орындалған жұмыстарға кепілдікпен толық жұмыс істейтін құрылғы аласыз.",
      "services-cartridge-refill-title": "Картридждерді толтыру",
      "services-cartridge-refill-text1": "Біздің компания лазерлік және сиялы принтерлер үшін картридждерді толтыру және қалпына келтіру бойынша кәсіби қызметтерді ұсынады. Біз тек жоғары сапалы шығын материалдарын қолданамыз, бұл басып шығарудың тамаша сапасын және картридждердің ұзақ қызмет ету мерзімін қамтамасыз етеді.",
      "services-cartridge-refill-text2": "Толтыру қысқа мерзімде орындалады, ал қажет болған жағдайда біз картридждерді профилактикалық тазалауды және тестілеуді жүргіземіз. Бұл сіздің кеңсеңіз үшін басып шығару шығындарын сапаны жоғалтпай азайтуға мүмкіндік беретін үнемді шешім.",
      "services-office-maintenance-title": "Кеңсе техникасына қызмет көрсету",
      "services-office-maintenance-text1": "Біз принтерлер, сканерлер, көшіру аппараттары және МФУ қоса алғанда, кеңсе техникасына кешенді техникалық қызмет көрсетеміз. Біздің қызметтер жабдықтың қызмет ету мерзімін ұзартуға және күтпеген ақауларды болдырмауға көмектесетін тұрақты профилактика, диагностика, жөндеу және тозған бөлшектерді ауыстыруды қамтиды.",
      "services-office-maintenance-text2": "Біз сіздің бизнесіңіз үшін кеңсе техникасының үздіксіз жұмысының қаншалықты маңызды екенін түсінеміз, сондықтан біздің мамандар сіздің жабдықтарыңыз әрқашан тамаша күйде болуы үшін жедел және жауапкершілікпен жұмыс істейді.",
      "services-learn-more": "Толығырақ білу",
      "contacts-title": "Байланыстар",
      "contacts-phone": "Телефон: +7 87472061807",
      "contacts-email": "Email: armashka.91@mail.ru",
      "contacts-address": "Мекенжай: Академика Чокина көшесі, 38/1",
      "footer-text": "© 2025 ИП Айгожина. Барлық құқықтар қорғалған."
    },
    en: {
      "nav-about": "About Us",
      "nav-services": "Services",
      "nav-advantages": "Advantages",
      "nav-contacts": "Contacts",
      "theme-toggle": "Switch Theme",
      "about-title": "Need Help? Contact a Specialist!",
      "about-text1": "IP Aigozhina is an IT company with 5 years of experience in computer repair, cartridge refilling, and equipment maintenance.",
      "about-text2": "We ensure reliable operation of your equipment using certified components.",
      "about-text3": "Our specialists undergo regular training and keep up with new technologies.",
      "about-warranty": "Warranty Service for Your Equipment.",
      "advantages-title": "Your Equipment in Reliable Hands",
      "advantages-quality-title": "Quality",
      "advantages-quality-text": "Before performing repair work, our specialist conducts diagnostics of software or hardware. Based on the diagnostics results, we can determine the timeline and cost of the necessary repair work.",
      "advantages-reliability-title": "Reliability",
      "advantages-reliability-text": "Our specialists undergo annual professional repair engineer training at a service center, capable of certifying and repairing devices, so you won’t have to wait long. We return a fully functional device to you, using only reliable parts and repair costs.",
      "advantages-speed-title": "Speed",
      "advantages-speed-text": "We perform repairs as quickly as possible. Simple issues are resolved on the same day within 1 hour. At the same time, we guarantee high-quality computer repairs!",
      "advantages-specialists-title": "Specialists",
      "advantages-specialists-text": "We provide a warranty for the performed repairs and replaced original spare parts. We start warranty repairs for your equipment.",
      "services-title": "Services",
      "services-computer-repair-title": "Computer Repair",
      "services-computer-repair-text1": "We offer a full range of computer repair services, including diagnostics of hardware and software issues, component replacement, operating system setup, and virus removal. Our specialists use modern equipment for accurate diagnostics, allowing us to quickly identify and resolve issues with minimal time expenditure.",
      "services-computer-repair-text2": "Whether it’s startup issues, slow performance, or hardware failures, we guarantee quality repairs using certified parts. You will receive a fully functional device with a warranty on the performed work.",
      "services-cartridge-refill-title": "Cartridge Refilling",
      "services-cartridge-refill-text1": "Our company provides professional cartridge refilling and restoration services for laser and inkjet printers. We use only high-quality consumables, ensuring excellent print quality and long cartridge lifespan.",
      "services-cartridge-refill-text2": "Refilling is done in the shortest possible time, and if necessary, we perform preventive cleaning and testing of cartridges. This is a cost-effective solution for your office, allowing you to reduce printing costs without compromising quality.",
      "services-office-maintenance-title": "Office Equipment Maintenance",
      "services-office-maintenance-text1": "We offer comprehensive technical maintenance for office equipment, including printers, scanners, copiers, and MFPs. Our services include regular preventive maintenance, diagnostics, repairs, and replacement of worn parts, helping to extend equipment lifespan and prevent unexpected breakdowns.",
      "services-office-maintenance-text2": "We understand how important uninterrupted operation of office equipment is for your business, so our specialists work promptly and responsibly to keep your equipment in perfect condition.",
      "services-learn-more": "Learn More",
      "contacts-title": "Contacts",
      "contacts-phone": "Phone: +7 87472061807",
      "contacts-email": "Email: armashka.91@mail.ru",
      "contacts-address": "Address: Akademika Chokina Street, 38/1",
      "footer-text": "© 2025 IP Aigozhina. All rights reserved."
    }
  };

  // Проверяем, есть ли сохранённая тема в localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  // Проверяем, есть ли сохранённый язык в localStorage
  let currentLang = localStorage.getItem("language") || "ru";
  langButton.textContent = currentLang.toUpperCase();
  updateLanguage(currentLang);

  // Функция для переключения темы
  themeToggleBtn.addEventListener("click", function () {
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
    updateLanguage(currentLang); // Обновляем текст кнопки смены темы
  });

  // Функция для гамбургер-меню
  hamburgerBtn.addEventListener("click", function () {
    hamburgerBtn.classList.toggle("active");
    menu.classList.toggle("active");
    langDropdown.classList.remove("active"); // Закрываем выпадающее меню языка
  });

  // Закрытие меню при клике на ссылку
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      menu.classList.remove("active");
    });
  });

  // Закрытие меню при клике вне меню
  document.addEventListener("click", function (event) {
    if (!hamburgerBtn.contains(event.target) && !menu.contains(event.target)) {
      hamburgerBtn.classList.remove("active");
      menu.classList.remove("active");
    }
    if (!langButton.contains(event.target) && !langDropdown.contains(event.target)) {
      langDropdown.classList.remove("active");
    }
  });

  // Функция для переключения языка
  langButton.addEventListener("click", function () {
    langDropdown.classList.toggle("active");
  });

  langOptions.forEach(option => {
    option.addEventListener("click", function () {
      currentLang = this.getAttribute("data-lang");
      langButton.textContent = currentLang.toUpperCase();
      localStorage.setItem("language", currentLang);
      updateLanguage(currentLang);
      langDropdown.classList.remove("active");
    });
  });

  // Функция для обновления текста на странице
  function updateLanguage(lang) {
    document.querySelectorAll("[data-lang-key]").forEach(element => {
      const key = element.getAttribute("data-lang-key");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
        // Если это contacts-phone, оборачиваем номер в ссылку
        if (key === "contacts-phone") {
          const phoneNumber = "+7 87472061807";
          const phoneLink = document.createElement("a");
          phoneLink.href = "https://wa.me/787472061807?text=Здравствуйте,%20хочу%20узнать%20подробнее%20о%20ваших%20услугах";
          phoneLink.target = "_blank";
          phoneLink.textContent = phoneNumber;
          element.innerHTML = element.innerHTML.replace(phoneNumber, phoneLink.outerHTML);
        }
      }
    });
    document.documentElement.lang = lang; // Обновляем атрибут lang
  }

  // Инициализация AOS с улучшенными настройками
  AOS.init({
    duration: 800,
    easing: 'ease-in-out-cubic',
    once: false,
    offset: 100,
    anchorPlacement: 'top-center',
    mirror: true,
    delay: 100,
    disable: function () {
      return window.innerWidth < 768 && !window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    }
  });

  // Добавляем кастомные задержки для элементов в секциях
  document.querySelectorAll('.tech-items .tech-item').forEach((item, index) => {
    item.setAttribute('data-aos-delay', index * 150);
  });

  document.querySelectorAll('.services-container .service-item').forEach((item, index) => {
    item.setAttribute('data-aos-delay', index * 200);
  });

  // Полное обновление AOS при загрузке
  AOS.refreshHard();

  // Плавное обновление AOS при скролле
  window.addEventListener("scroll", function () {
    AOS.refresh();
  });
});