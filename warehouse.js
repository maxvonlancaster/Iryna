const warehouse = [,
    { id: 'ware1', company: "Samsung", model: "Samsung Galaxy M15 5G 4/128GB", image: "images/samsung.jpg", description: "6,5-дюймовий FHD+ Super AMOLED дисплей Galaxy M15 5G демонструє насичене й плавне зображення, яке залишається чітким навіть за яскравого сонячного світла завдяки частоті оновлення до 90 Гц, яскравості 800 ніт і технології Vision Booster.Лаконічний корпус смартфона Galaxy M15 5G зі співвідношенням сторін 19,5:9 відрізняється оптимальною компактністю та зручністю тримання у руці. Тонкі рамки, лінійне розташування камер і глянцева задня кришка зі світловідбиваючими візерунками – ваш пристрій буде завжди в центрі уваги. Доступний у блакитному, темно-синьому та сірому кольорах."},
    { id: 'ware2', company: "Google Pixel", model: "Google Pixel 7a 8/128GB Snow (US)", image: "images/google.jpg", description: "Pixel 7a забезпечує дивовижну чіткість і яскраві деталі на кожній світлині - навіть за слабкого освітлення.Програмне забезпечення камери Pixel було налаштоване на точне і красиве відображення різних відтінків шкіри на ваших фотографіях.Google Tensor G2 - це той самий користувацький чип, що і в Pixel 7 Pro. Tensor G2 - разом із 8 ГБ оперативної пам'яті - робить Pixel 7a швидким, безпечним та ефективним, з поліпшеними аудіовикликами, чудовим часом автономної роботи та приголомшливими фото і відео." },
    { id: 'ware3', company: "Google Pixel", model: "Google Pixel 8 8/256GB Obsidian (US)", image: "images/google1.jpg", description: "Повністю оновлена камера Pixel 8 використовує штучний інтелект Google, щоб допомогти вам створювати фотографії, що запам'ятовуються, і відео вдень і вночі.За допомогою Live Translate ви можете перекладати особисті розмови 49 мовами в режимі реального часу, розшифровувати повідомлення та перекладати знаки." },
    { id: 'ware4', company: "Samsung", model: "Samsung Galaxy S24 8/128GB", image: "images/samsung11.jpg", description: "Зустрічайте нову еру високоякісних дисплеїв завдяки збільшеному розміру дисплея та ультратонкій рамці 6,2-дюймовий FHD+ дисплей Galaxy S24 та 6,7-дюймовий QHD+ дисплей Galaxy S24+ мають більшу площу, ніж будь-коли дотепер, забезпечуючи максимальний ефект занурення під час перегляду Щобільше, технологія Vision Booster оптимізує колірну гаму та контрастність, завдяки чому графіка стає ще виразнішою."},
    { id: 'ware5', company: "Google Pixel", model: "Google Pixel 8 Pro 12/128GB Bay (US)", image: "images/google2.jpg",description: "Новий чіп Google Tensor G3 спеціально розроблений з використанням штучного інтелекту Google для використання передових функцій фото та відео та більш розумних способів допомоги протягом дня. І він робить Pixel 8 Pro супер швидким та ефективним.Телеоб'єктив з роздільною здатністю 48 Мп - найкращий зум Pixel. Спеціальний 5-кратний телеоб'єктив з оптичним зумом забезпечує найвищу якість зображення на пристроях Pixel та 30-кратне збільшення за допомогою Super Res Zoom." },
    { id: 'ware6', company: "Samsung", model: "Samsung Galaxy A25 5G 8/256GB ", image: "images/samsung2.jpg", description: "Оцініть витончений дизайн Galaxy з оптимальним розташуванням блоку камер та великим вибором модних відтінків. Оригінальна матова текстура задньої поверхні ідеально завершує лаконічний образ. Обирайте ваш смартфон А25 серед доступних варіантів палітри кольорів і насолоджуйтесь кожним використанням.Зберігайте яскраві враження важливих подій за допомогою барвистих та чітких відео. Технології OIS та VDIS забезпечують покращену стабілізацію та частоту дискретизації рухів до 500 Гц, створюючи кінематографічний ефект для зйомки у будь-яких умовах."},
   
];

function loadWares(filter) {
    let wares = '';

    let styleSheet = document.getElementsByTagName('style')[0].sheet;
    document.getElementById("wares").innerHTML = '';

    warehouse.forEach(ware => {
        if (filter === "All" || ware.company === filter) {
            wares += `<div class="ware-wrapper" id="${ware.id}">
                    <img src="${ware.image}">
                    <div>
                        <p class="ware-header">
                            ${ware.company} ${ware.model}
                        </p>

                        <p class="ware-description">
                            ${ware.description}
                        </p>
                    </div>
                </div>`
            let styles = `#${ware.id}:hover * {
                text-overflow:unset;
                overflow:visible;
                white-space: normal;
                }`;
            // let styleSheet = document.getElementsByTagName('style')[0].sheet;
            document.getElementById("wares").innerHTML = wares;
            styleSheet.insertRule(styles);
        }
        
    });
}

loadWares("All");

