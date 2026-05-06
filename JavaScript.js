// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "Металіст 1925 Харків";
document.body.appendChild(h1);

// Навигация
const nav = document.createElement('div');
nav.id = 'nav';
nav.style.display = 'flex';
nav.style.alignItems = 'center';
nav.style.gap = '20px';
document.body.appendChild(nav);

// Контент
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);
nav.style.position = 'relative';


// Страницы сайта
const pages = {
  Головна: {
    title: 'Вітаємо вас на сайті ФК Металіст 1925',
    text: ` <div style="text-align:center;">
      <h3 style="color:blue;">🔥Металіст 1925 - це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та емоції. Ми - Металіст 1925, Ми - Сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчамі, купуйте квитки та підтримуйте команду!</strong></p>
      <p>❗ Цей сайт не є офіційним сайтом Металіста 1925.</p>
      <button onclick="showPage('Квитки')" class="shop-btn">🎟️ Купити квитки на матч!</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читайте новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://xsport.ua/_next/image/?url=https%3A%2F%2Fems.xsport.ua%2Fsites%2Fdefault%2Ffiles%2F2025-06%2Fb6eNxnSVrTgItxMZJtwj5jVCe8VYVlHQ.jpg&w=1920&q=70"
     style="max-width:100%; border-radius:10px; margin:20px auto; display:block;">
    </div>`
  },
  Новини: { title: `Новини Металіста 1925` },
  Клуб: {
  title: `Клуб - Металіст 1925`,
  text: `
  <h3>ФК Металіст 1925 Харків — український футбольний клуб із Харкова, який відроджує футбольні традиції міста та виступає в українських професійних лігах.</h3>

  <p>Клуб було засновано у 2016 році після зникнення легендарного «Металіста». «Металіст 1925» швидко пройшов шлях від аматорського рівня до професійного футболу, отримавши велику підтримку вболівальників.</p>

  <h4>🏆 Досягнення:</h4>
  <ul>
    <li>Срібний призер Другої ліги України — 2017/18</li>
    <li>Бронзовий призер Першої ліги України — 2020/21</li>
    <li>Вихід до Української Прем'єр-ліги — 2021/22</li>
  </ul>

  <h4>Клуб сьогодні:</h4>
  <ul>
    <li>Місто: Харків</li>
    <li>Стадіон: ОСК «Металіст»</li>
    <li>Клуб активно розвиває молодих українських гравців</li>
    <li>Має потужну підтримку фанатів</li>
    <li>Амбіція клубу — боротьба за призові місця</li>
  </ul>
  `
},
Інфраструктура: {
  text: `
  <h2>ОСК «Металіст»</h2>
  <p>Домашній стадіон ФК «Металіст 1925» — ОСК «Металіст» — один із найбільших стадіонів України. Він був відкритий у 1926 році та реконструйований до Євро-2012. Наразі клуб проводить домашні матчу на стадіоні Полісся в Житомирі.</p>

  <h4>Місткість та характеристики:</h4>
  <ul>
    <li>Місткість: близько 40 000 глядачів</li>
    <li>Тип поля: натуральне покриття</li>
    <li>Розташування: Харків, Україна</li>
    <li>Рік відкриття: 1926 (реконструкція — 2012)</li>
  </ul>

  <img src="https://fc-metalist.com/club/foto/metalist.jpg" style="width:550px;">
  <img src="https://metalist1925.com/sys/files/foto/02/img_53802.jpg" style="width:550px;">

  <br>

  <h2>Тренувальна база</h2>
  <p>ФК «Металіст 1925» використовує сучасні тренувальні поля та інфраструктуру в Харкові для підготовки команди та розвитку молодих гравців. Наразі клуб не тренеруеться в Харкові через війну.</p>

  <h4>Характеристики:</h4>
  <ul>
    <li>Кілька тренувальних полів</li>
    <li>Тип поля: натуральні та штучні покриття</li>
    <li>Розташування: Харків, Україна</li>
    <li>Акцент на розвиток молоді</li>
  </ul>

  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Vysokyi_Metalist_Training_Base_1.jpg" style="width:550px;">
  `
},
Історія: {
  title: `Історія ФК Металіст 1925`,
  text: `
    <br>
    <img src="https://metalist1925.com/players/img/2025.jpg"
         style="max-width:100%; border-radius:10px; display:block; margin:20px auto;">
    <br>

    <p>ФК «Металіст 1925» Харків — український футбольний клуб, створений після зникнення легендарного «Металіста», щоб зберегти футбольні традиції міста Харкова.</p>

    <h4>Заснування клубу</h4>
    <p>Клуб було засновано у 2016 році з ініціативи харківських уболівальників. «Металіст 1925» розпочав свій шлях з аматорських змагань, швидко здобувши підтримку фанатів.</p>

    <h4>Шлях до професійного футболу</h4>
    <p>У сезоні 2016/17 команда виступала в аматорському чемпіонаті України, після чого отримала професійний статус і почала грати у Другій лізі.</p>

    <h4>Поступовий прогрес</h4>
    <p>Клуб стабільно розвивався, підвищуючись у класі. У сезоні 2017/18 «Металіст 1925» став срібним призером Другої ліги та піднявся до Першої ліги України.</p>

    <h4>Боротьба за УПЛ</h4>
    <p>У Першій лізі команда кілька сезонів боролася за підвищення і в сезоні 2020/21 здобула бронзові медалі, що дозволило вийти до Української Прем'єр-ліги.</p>

    <h4>Дебют у Прем'єр-лізі</h4>
    <p>Сезон 2021/22 став історичним — клуб дебютував в УПЛ. «Металіст 1925» показав конкурентну гру та закріпився серед найкращих команд країни.</p>

    <h4>Домашня арена</h4>
    <p>Домашнім стадіоном клубу є ОСК «Металіст» у Харкові — сучасна арена, яка приймала матчі Євро-2012.</p>

    <img class="history-picture"
         src="https://upl.ua/glide/uploads/1611/QGK15rGROYEKsJ83HQXPsELpJaLXZ1E9.jpg?w=1024&h=1024&fit=contain&s=b9b47c2ed42cb08cc055f008d75a7403"
         title="ОСК Металіст">

    <h4>Сучасний етап</h4>
    <p>Сьогодні клуб продовжує розвиватися, робить ставку на українських гравців та прагне стабільно виступати на високому рівні.</p>

    <h4>Майбутнє клубу</h4>
    <p>«Металіст 1925» ставить перед собою мету закріпитися в еліті українського футболу та повернути Харків на футбольну карту Європи.</p>
  `,
},
Логотип: {
  title: `Logo`,
text: `<h3>Логотип клубу:</h3> <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/FC_Metalist_1925_Kharkiv_logo.png"      title="Логотип ФК Металіст 1925"      style="max-width:300px; border-radius:10px; display:block; margin:20px auto;">`},
  Команда: { title: `Team` },
  Матчі: { 
    title: `Матчі`, 
    text:  `<p>Місце в УПЛ: 5 місце</p><p>Місце в Кубку України: виліт в 1/2 кубку України</p>`
  },
   Тренери: { title: `Coaches` },
   Легенди: { title: `Legends` },
Таблиця: {
  title: 'Таблиця',
  text: `
  <h4>УПЛ</h4>
  <div class="table-wrapper">
    <table class="league-table">
      <thead>
        <tr>
          <th>М</th>
          <th>КОМАНДА</th>
          <th>И</th>
          <th>В</th>
          <th>Н</th>
          <th>П</th>
          <th>З</th>
          <th>П</th>
          <th>О</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>1</td>
          <td class="team">Шахтар Донецьк</td>
          <td>26</td>
          <td>19</td>
          <td>6</td>
          <td>1</td>
          <td>62</td>
          <td>17</td>
          <td>63</td>
        </tr>

         <tr>
          <td>2</td>
          <td class="team">ЛНЗ Черкаси</td>
          <td>26</td>
          <td>16</td>
          <td>5</td>
          <td>5</td>
          <td>36</td>
          <td>16</td>
          <td>53</td>
        </tr>

        <tr>
          <td>3</td>
          <td class="team">Полісся Житомир</td>
          <td>26</td>
          <td>16</td>
          <td>4</td>
          <td>6</td>
          <td>45</td>
          <td>17</td>
          <td>52</td>
        </tr>


         <tr>
          <td>4</td>
          <td class="team">Динамо Київ</td>
          <td>26</td>
          <td>14</td>
          <td>5</td>
          <td>7</td>
          <td>59</td>
          <td>33</td>
          <td>47</td>
        </tr>

         <tr  class="highlight-shakhtar">
          <td>5</td>
          <td class="team">Металіст 1925</td>
          <td>26</td>
          <td>12</td>
          <td>9</td>
          <td>5</td>
          <td>31</td>
          <td>15</td>
          <td>45</td>
        </tr>

     <tr>
          <td>6</td>
          <td class="team">Колос Ковалівка</td>
          <td>26</td>
          <td>11</td>
          <td>10</td>
          <td>5</td>
          <td>27</td>
          <td>21</td>
          <td>43</td>
        </tr>

         <tr>
          <td>7</td>
          <td class="team">Кривбас</td>
          <td>26</td>
          <td>11</td>
          <td>8</td>
          <td>7</td>
          <td>46</td>
          <td>31</td>
          <td>41</td>
        </tr>


           <tr>
          <td>8</td>
          <td class="team">Зоря Луганьск</td>
          <td>26</td>
          <td>10</td>
          <td>8</td>
          <td>8</td>
          <td>38</td>
          <td>33</td>
          <td>38</td>
        </tr>

          <tr>
          <td>9</td>
          <td class="team">Карпати Львів</td>
          <td>26</td>
          <td>9</td>
          <td>10</td>
          <td>7</td>
          <td>35</td>
          <td>26</td>
          <td>37</td>
        </tr>

  <tr>
          <td>10</td>
          <td class="team">Верес Рівне</td>
          <td>26</td>
          <td>7</td>
          <td>9</td>
          <td>10</td>
          <td>25</td>
          <td>34</td>
          <td>30</td>
        </tr>
        
         <tr>
          <td>11</td>
          <td class="team">Епіцентр</td>
          <td>26</td>
          <td>7</td>
          <td>5</td>
          <td>14</td>
          <td>30</td>
          <td>40</td>
          <td>26</td>
        </tr>

<tr>
          <td>12</td>
          <td class="team">Оболонь Київ</td>
          <td>25</td>
          <td>5</td>
          <td>9</td>
          <td>11</td>
          <td>20</td>
          <td>43</td>
          <td>24</td>
        </tr>


        
         <tr>
          <td>13</td>
          <td class="team">Кудрівка</td>
          <td>26</td>
          <td>5</td>
          <td>7</td>
          <td>14</td>
          <td>27</td>
          <td>43</td>
          <td>22</td>
        </tr>

        <tr>
          <td>14</td>
          <td class="team">Рух Львів</td>
          <td>26</td>
          <td>6</td>
          <td>2</td>
          <td>18</td>
          <td>18</td>
          <td>44</td>
          <td>20</td>
        </tr>


         <tr>
          <td>15</td>
          <td class="team">Олександрія</td>
          <td>25</td>
          <td>2</td>
          <td>7</td>
          <td>16</td>
          <td>18</td>
          <td>49</td>
          <td>13</td>
        </tr>

         <tr>
          <td>16</td>
          <td class="team">Полтава</td>
          <td>26</td>
          <td>2</td>
          <td>6</td>
          <td>18</td>
          <td>23</td>
          <td>66</td>
          <td>12</td>
        </tr>

      </tbody>
    </table>
    </div>
  `
},
  Квитки: {
    title: `Купити квітки`,
    text: `Квитки на матч можно купити <a href="https://metalist1925.club/" target="_blank">тут</a>.<br><img src="https://metalist1925.com/sys/files/foto/61/img_59161.jpg">`
  },
  Магазин: {
    title: `Магазин`,
    text: `Магазин Металіста можно знайти <a href="https://shop1925.com/" target="_blank">тут</a>.<img src="https://metalist1925.com/sys/files/foto/85/img_53785.jpg">`
  },
  Телеграм: {
    title: `Телеграм Канал`,
    text: `<p>Підпісуйтесь на наш <a href="https://t.me/Metalist1925Kharkiv" target="_blank">Телеграм канал</a> заради більше новин.</p>
    <img src="https://metalist1925.com/sys/files/foto/54/img_59354.jpg" >`
  },
  Менеджмент: {
    title: "Менеджмент",
  },
  Результати: {
    title: "Результати",
  },

  
};

const menuGroups = {
  'Головна': [],
  'Клуб': ['Історія', 'Інфраструктура', 'Логотип', 'Менеджмент',],
  'Матчі': ['Таблиця', 'Результати'],
  'Магазин': ['Квитки'],
  'Команда': ['Тренери',],
  'Телеграм': [],
  
};


// Результати
function showResults() {
  content.innerHTML = '<h2>Результати матчів</h2>';

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.results || window.results.length === 0) {
    grid.innerHTML = '<p>Результатів ще нема</p>';
    content.appendChild(grid);
    return;
  }

  window.results.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Дата:</strong> ${match.date}</p>
      <p><strong>⚔️ Суперник:</strong> ${match.opponent}</p>
      <p><strong>🎯 Рахунок:</strong> ${match.score}</p>
      <p><strong>📍 Місце:</strong> ${match.place}</p>
      <p><strong>🏆 Турнір:</strong> ${match.competition}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}



// Создаем кнопки навигации + dropdown
// всі підсторінки з dropdown
const subPages = Object.values(menuGroups).flat();

for (const key in pages) {

  // ❌ не створюємо кнопку, якщо це підсторінка
  if (subPages.includes(key)) continue;


  const navItem = document.createElement('div');
  navItem.className = 'nav-item';

  const btn = document.createElement('button');
  btn.textContent = key;
  btn.className = 'nav-btn';

  btn.onclick = () => {
    document.querySelectorAll('.nav-btn')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');
    showPage(key);
  };

  navItem.appendChild(btn);

  // 🔽 dropdown як у Металіста
  // 🔽 dropdown як у Металіста
if (menuGroups[key]) {
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  // Додаємо головну кнопку в підменю
  const mainItem = document.createElement('div');
  mainItem.className = 'dropdown-item';
  mainItem.textContent = key;
  mainItem.onclick = () => showPage(key);
  dropdown.appendChild(mainItem); // або dropdown.prepend(mainItem) якщо хочеш першою

  menuGroups[key].forEach(subPage => {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.textContent = subPage;

    item.onclick = () => showPage(subPage);

    dropdown.appendChild(item);
  });

  navItem.appendChild(dropdown);
  nav.appendChild(navItem);
}
}


// Показ страницы
function showPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return;

  content.innerHTML = '';

  if (pageKey === 'Команда') {
    showTeam();
    return;
  }
  if (pageKey === 'Новини') {
    showNews();
    return;
  }
  if (pageKey === 'Матчі') {
    showMatches();
    return;
  }
 if (pageKey === 'Тренери') {
    showCoaches(); 
    return;
  }
   if (pageKey === 'Легенди') {
    showLegends(); 
    return;
  }
  if (pageKey === 'Менеджмент') {
    showManagment(); 
    return;
  }
  if (pageKey === 'Результати') {
  showResults();
  return;
}
  const titleElem = document.createElement('h2');
  titleElem.textContent = page.title;
  content.appendChild(titleElem);

  if (page.text) {
    const textElem = document.createElement('div');
    textElem.innerHTML = page.text;
    content.appendChild(textElem);
  }
}

// легенди
function showLegends() {
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Легенди ФК Шахтар';
  content.appendChild(title);

  const container = document.createElement('div');
  container.className = 'legends-container';

  window.legends.forEach(legend => {
    const card = document.createElement("div");
    card.className = "legend-card";

    card.innerHTML = `
      <img src="${legend.photo}" alt="${legend.name}">
      <h3>${legend.name}</h3>

      <p><strong>Національність:</strong> ${legend.nationality}</p>
      <p><strong>Вік:</strong> ${legend.age}</p>
      <p><strong>Позиція:</strong> ${legend.position}</p>

      <div class="legend-stats">
        <span>🏟️ ${legend.matches}</span>
        <span>⚽ ${legend.goals}</span>
        <span>🎯 ${legend.assist}</span>
      </div>
    `;

    container.appendChild(card);
  });

  content.appendChild(container);
}
// менеджмент
function showManagment() {
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Менеджмент Металіста 1925';
  content.appendChild(title);

  const container = document.createElement('div');
  container.className = 'legends-container';

  window.managment.forEach(person => {
    const card = document.createElement('div');
    card.className = 'legend-card';

    card.innerHTML = `
      <img src="${person.photo}" alt="${person.name}">
      <h3>${person.name}</h3>
      <p><strong>Роль:</strong> ${person.role}</p>
      <p><strong>Національність:</strong> ${person.nationality}</p>
      <p><strong>Вік:</strong> ${person.age}</p>
    `;

    container.appendChild(card);
  });

  content.appendChild(container);
}


// Функція інформації гравців 

function showPlayerDetails(player) {
  content.innerHTML = ''; // очищаємо контент

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Повернутися';
  backBtn.className = 'back-btn';
  backBtn.onclick = showTeam;
  content.appendChild(backBtn);

  const title = document.createElement('h2');
  title.textContent = `${player.name}`;
  content.appendChild(title);

  const img = document.createElement('img');
  img.src = player.photo2;
  img.alt = player.name;
  img.className = 'player-photo-large';
  img.style.maxWidth = '500px';
  img.style.borderRadius = '15px';
  img.style.display = 'block';
  img.style.margin = '20px auto';
  content.appendChild(img);

  const info = document.createElement('div');
  info.className = 'player-info';
  info.innerHTML = `
    <p><strong>Номер:</strong> ${player.number}</p>
    <p><strong>Позіція:</strong> ${player.position}</p>
    <p><strong>Вік:</strong> ${player.age}</p>
    <p><strong>Національність:</strong> ${player.nationality}</p>
    <h4>Статистика:</h4>
    <p>⚽ <strong>Голи:</strong> ${player.goals || "0"}</p>
    <p>👟 <strong>Передачі:</strong> ${player.assist || "0"}</p>
    <p>🏟️ <strong>Матчі:</strong> ${player.matches || "0"}</p>
  `;
  content.appendChild(info);
}


// Показ команды с разделами по позициям + тренеры
function showTeam() {
  content.innerHTML = ''; // очищаем перед выводом

  const title = document.createElement('h2');
  title.textContent = 'Команда';
  content.appendChild(title);

  // Категории игроков
  const groups = {
    'Воротарі': ['GK', 'Воротар'],
    'Захистники': ['DF', 'Захистник',],
    'Півзахісники': ['MF', 'Півзахисник'],
    'Нападники': ['FW', 'Нападник',]
  };

  // Перебор категорий
  for (const groupName in groups) {
    const groupTitle = document.createElement('h3');
    groupTitle.textContent = groupName;
    content.appendChild(groupTitle);

    const groupList = document.createElement('div');
    groupList.className = 'players-list';

    window.team
      .filter(player => groups[groupName].some(pos => player.position.includes(pos)))
      .forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';

        card.innerHTML = `
          <img src="${player.photo}" alt="${player.name}" class="player-photo" />
          <p><strong>#${player.number} ${player.name}</strong></p>
          <p>${player.position}</p>
        `;

        card.onclick = () => showPlayerDetails(player);
groupList.appendChild(card);

      });

    if (groupList.children.length > 0) {
      content.appendChild(groupList);
    }
  }
}
  // ---- Тренеры ----
 function showCoaches () {

    const coachesList = document.createElement('div');
    coachesList.className = 'coaches-list';

    window.coaches.forEach(coach => {
      const card = document.createElement('div');
      card.className = 'coach-card';

      card.innerHTML = `
        <img src="${coach.photo}" alt="${coach.name}" class="coach-photo" />
        <p><strong>${coach.coach}</strong></p>
        <p>${coach.name}</p>
        <p>Вік: ${coach.age}</p>
        <p><strong>Національність:</strong> ${coach.nationality}</p>

      `;

      coachesList.appendChild(card);
    });

    content.appendChild(coachesList);
  }


 
function showMatches() {
  content.innerHTML = '<h2>Матчі</h2>';

  // берем текст из pages
  const info = document.createElement('div');
  info.innerHTML = pages['Матчі'].text;
  content.appendChild(info);

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.matches || window.matches.length === 0) {
    grid.innerHTML = '<p>Матчів ще нема</p>';
    content.appendChild(grid);
    return;
  }

  window.matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Дата:</strong> ${match.date}</p>
      <p><strong>⚔️ Суперник:</strong> ${match.opponent}</p>
      <p><strong>🕒 Час (УКР):</strong> ${match.time || "Час ще не відомо"}</p>
      <p><strong>📍 Місце: </strong> ${match.place}</p>
      <p><strong>🏆 Турнір:</strong> ${match.competition}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}

// Новости
function showNews() {
  content.innerHTML = '<h2>Новини</h2>';

  const grid = document.createElement('div');
  grid.className = 'news-grid';

  // Сортируем новости: сначала закрепленные, потом остальные, внутри по дате
  const sortedNews = [...window.news].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date); // по дате внутри групп
  });

  sortedNews.forEach(item => {
    const preview = document.createElement('div');
    preview.className = 'news-card';
    preview.onclick = () => showFullNews(item.id);

    preview.innerHTML = `
      <h3>${item.title}</h3>
      <p style="color: white;">${item.datum}</p>
      ${item.pinned ? '<p style="color: yellow;">📌 Закріплено</p>' : ''}
    `;

    grid.appendChild(preview);
  });

  content.appendChild(grid);
}

function showFullNews(id) {
  const item = window.news.find(n => n.id === id);
  content.innerHTML = '';

  if (!item) {
    content.innerHTML = '<p>There is no news</p>';
    return;
  }

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Назад';
  backBtn.className = 'back-btn';
  backBtn.onclick = showNews;
  content.appendChild(backBtn);

  const title = document.createElement('h2');
  title.textContent = item.title;
  content.appendChild(title);

  if (item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.style.maxWidth = '100%';
    img.style.borderRadius = '10px';
    img.style.margin = '20px auto';
    img.style.display = 'block';
    content.appendChild(img);
  }

  const fullText = document.createElement('div');
  fullText.innerHTML = item.text;
  content.appendChild(fullText);
}




// Запуск - показываем главную страницу
showPage('Головна');
