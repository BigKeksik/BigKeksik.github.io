index.html

<!DOCTYPE html>
<html>  
    <head>
        <meta charset="utf-8">
        <title>My tilt!</title>
        <link href="style/style.css" rel="stylesheet" type="text/css">
    </head>

    <body>
        <p id="Headline">
            Распродажа в нашем магазине!
        </p>

        <p title="It's real joke!">
            <img src="image/prikol.jpg" alt="Это котик, который предупреждает вас, что цены изменились">
        </p>

        <h1 title="I'm backpack!">
            Приветствуем вас, друзья!
        </h1>

        <p title="Я Даша, а это мой рюкзак. Рюкзак мой друг.">
            Мы рады сообщить, что в нашем магазине проходят <strong>грандиозные</strong> предновогодние скидки!
        </p>
        
        <p>Список самых горячих предложений:</p>

        <ol>
            <li>Детские игрушки</li>
            <li><strong>Взрослые</strong> игрушки</li>
            <li><a href="https://vk.com/id186270944">Котики</a></li>
            <li>Собачки</li>
            <li>Внутренние органы</li>
        </ol>

        <p>
            Системное программирование: <a href="https://kdenisb.org/">Сайт Кузнецова   </a>, 

            <a href="https://drive.google.com/drive/folders/1-j1NW8kbTzQn3BMwNTs0dBU1DhCmqeTI?usp=sharing">Диск Кузнецова</a>,

            <a href="https://bottlecaps.de/rr/ui">Диаграммы для курсача</a>
        </p>

        <button>Смена пользователя</button>

        <script src="scripts/main.js"></script>
    </body>

</html>

style.css

html {
    font-size: 25px;
    font-family: Calibri;
    background-color: #928E8B;
}

body {
    line-height: 2;
    letter-spacing: 1px;
    padding: 0 20px 20px 20px;
    margin: 0 auto;
    width: 1000px;
    border: 5px solid black;
    background-color: white;
}

#Headline {
    color: #E90708;
    width: 970px;
    font-size: 69px;
    margin: 0 auto;
    text-shadow: 2px 2px 1px black;
    display: block;
    
}

h1 {
    text-align: center;
}

img {
    margin: 0 auto;
    display: block;
}

