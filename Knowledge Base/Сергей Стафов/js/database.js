/* модуль, отвечающий за хранение базы данных */

/*
	Первые две строки ниже и закрывающая строка - конструкция IIFE
	(Immediately Invoked Function Expression).
	Это JavaScript функция, которая выполняется сразу же после того, как она была определена.
	Переменные и функции внутри нее не видны извне.
*/

;(function () {
    'use strict'

    // содержимое базы
    // idCounter - задает id следующего поста
    // problems - пост
    // comments - содержимое комментов поста
    let database = {
        // id, который будет присвоен следующему вопросу (посту)
        idCounter: 2,
        // массив постов
        problems: [
            {
                id: 1,
                title: 'Отчего люди не летают',
                content: 'Почему люди не летают, как птицы?',
                points: 0,
                viewsNumber: 10,
                badges: ['live', 'fly', 'people'],
                comments: [
                    {
                        id: 1,
                        content: 'Потому что отрастили большие ягодицы!',
                    }
                ]
            },
            {
                id: 2,
                title: 'Как конвертировать JSON строку с кавычками “” (вместо кавычек ") в JSON формат в PHP',
                content: 'Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют определения и уточнения соответствующий условий активизации. Разнообразный и богатый опыт новая модель организационной деятельности требуют определения и уточнения модели развития.                Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке модели развития.',
                points: 0,
                viewsNumber: 10,
                badges: ['js', 'json', 'php'],
                comments: [
                    {
                        id: 1,
                        content: 'Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют определения и уточнения соответствующий условий активизации. Разнообразный и богатый опыт новая модель организационной деятельности требуют определения и уточнения модели развития.',
                    },
                    {
                        id: 2,
                        content: 'Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют определения и уточнения соответствующий условий активизации. Разнообразный и богатый опыт новая модель организационной деятельности требуют определения и уточнения модели развития.',
                    },
                ]
            },
            {
                id: 3,
                title: 'Post title',
                content: 'Post content',
                points: 0,
                viewsNumber: 10,
                badges: ['js', 'json', 'php'],
                comments: [
                    {
                        id: 1,
                        content: 'Comment content',
                    }
                ]
            },
            {
                id: 4,
                title: 'Post title',
                content: 'Post content',
                points: 0,
                viewsNumber: 10,
                badges: ['js', 'json', 'php'],
                comments: [
                    {
                        id: 1,
                        content: 'Comment content',
                    }
                ]
            },
            {
                id: 5,
                title: 'Post title',
                content: 'Post content',
                points: 0,
                viewsNumber: 10,
                badges: ['js', 'json', 'php'],
                comments: [
                    {
                        id: 1,
                        content: 'Comment content',
                    }
                ]
            },
        ]
    };
    
    // загружаем
    load();

    const Database = {};

    // возвращаем копию БД
    Database.getProblems = function getProblems () {
        // перегоняем объект в строку и обратно (это называют глубокое копирование)
		// получим копию объекта
		// будет гарантия, что исходный объект не изменится
        return JSON.parse(JSON.stringify(database.problems));
    }

    // добавляем пост
    Database.addProblem = function addProblem (title, content) {
        database.problems.push ({
            id: database.idCounter,
            title: title,
            content: content,
            points: 0,
            comments: []
        })

        database.idCounter++

        // сохраняем
        save();
    };

    // функции, описаные в объекте Database, будут доступны извне, т.к. его описали в объекте window
    window.Database = Database;

    // ф-я сохранения в localStorage
    function save() {
        localStorage.setItem('db', JSON.stringify(database));
    };

    // ф-я загрузки из localStorag
    function load() {
        const jsonString = localStorage.getItem('db');

        if (jsonString) {
            database = JSON.parse(jsonString);
        }
    };
}) ();