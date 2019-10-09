/* модуль, отвечающий за хранение базы данных */

/*
	Первые две строки ниже и закрывающая строка - конструкция IIFE
	(Immediately Invoked Function Expression).
	Это JavaScript функция, которая выполняется сразу же после того, как она была определена.
	Переменные и функции внутри нее не видны извне.
*/
;(function() {
	'use strict'
	// Создаём базу с постами
    // idCounter - задает id следующего поста
    // problems - пост
    // comments - содержимое комментов поста
	let database = {
		idProblemCounter: 2,
    // считает Id  комментap поста
		idCommentCounter : 2,
		problems:[{
					id: 1,
					title: 'Как конвертировать JSON строку с кавычками “” (вместо кавычек ") в JSON формат в PHP',
					content: 'Post title',
					points: 0,
					viewsNumber: 10,
					badges: ['js', 'javascript'],
					comments: [
						{
							id: 1,
							content: 'Comment content',
							points: 0,
						}
					]
				},
				{
					id: 2,
					title: 'this is the secound',
					content: 'where I am going ',
					points: 22,
					viewsNumber: 54,
					badges: ['js', 'PhP', 'React'],
					comments: [
						{
							id: 2,
							content: 'where I am going',
							points: 22
						}
					]
				},
				{
					id: 3,
					title: 'this is the thirth',
					content: 'that is over 50 ',
					points: 8,
					viewsNumber: 7,
					badges: ['Vue.js', 'javascript'],
					comments: [
						{
							id: 3,
							content: 'that is over 50',
							points: 8,

						}
					]
				},
				{
					id: 4,
					title: 'this is the fourth',
					content: 'Post is super long',
					points: 15,
					viewsNumber: 18,
					badges: ['jQuery', 'javascript'],
					comments: [
						{
							id: 4,
							content: 'Post is super long',
							points: 15
						}
					]
				}
			]
		}

		load()
	// Для создание запис в LocalStorage	
		save()


	const Database = {}

	// метод добавления постов
	Database.addProblem = function addProblem (title, content, badges = []) {
		// то что Id problem бъйла создана 
		const problem = {
			id: database.idProblemCounter,
			title: title,
			content: content,
			points: 0,
			badges: badges,
			viewsNumber: 0, 
			comments: []
		}
		// Id problem бъйла добавлена
		database.problems.push(problem)

		database.idProblemCounter++
		console.log(database.idProblemCounter)

		save()
		// Возврашаем Id problem 
		return problem.id
	}
	// метод добавления нов comment принемает Id && content
	Database.addComment = function addComment (problemId , commentContent) {
		// Найти етого проблему и добавления new comment
		// Проходимся по все problems
		for (const problem of database.problems  ) {
				// Проверяем если мъй нашли таково Id
				if (problem.id === problemId) {
					// создание объект comment
					const comment = {
						id: database.CommentCounter,
						content: commentContent,
						points: 0
					}
					// Увеличит на 1 idCommentCounter хранит id next comment
					database.CommentCounter ++
					// console.log(idCommentCounter)
					// добавления comment в наше проблему
					problem.comments.push(comment)
					// сохранения и обновлени базу данных в Localstorage
					save()
					return true
				}
			}
			return false
		}

	// метод получения объекта с постами
	Database.getProblems = function getProblems () {
		return JSON.parse(JSON.stringify(database.problems))
	}
	// метода получения Id 
	Database.getProblemId = function getProblemById(problemId) {
		for (const problem of database.problems ) {
			if (problem.id === problemId) {
			// Возврощаем копию обекта а не тот же обект
				return JSON.parse(JSON.stringify(problem))
			}
		}

		return null
	}

	// метод Увеличит количества очков обратится к конкретного id
	Database.commentPointPlus = function commentPointPlus (commentId) {
		// Проходимся по все problems
		for (const problem of database.problems) {
		// Проходимся по все комментарий
			for (const comment of problem.comments) {
				//If нашли таково Id
				if (comment.id === commentId ) {
					// Увеличит на 1
					comment.points++
					// сохранения базу данных
					save()
					return true
				}
			}
		}

		return false
	}

	// метод Уменшат количества очков обратится к конкретного id
	Database.commentPointMinus = function commentPointMinus (commentId) {
		// Проходимся по все problems
		for (const problem of database.problems) {
		// Проходимся по все комментарий
			for (const comment of problem.comments) {
				//If нашли таково Id
				if (comment.id === commentId ) {
					// Увеличит на 1
					comment.points--
					// сохранения базу данных
					save()
					return true
				}
			}
		}

		return false
	}



  	// делаем доступный наш объект Database  т.к. его описали в объекте window
	window.Database = Database

    // функция сохранения в localStorage
	function save () {
		localStorage.setItem('db', JSON.stringify(database))
	}

    // функция получения из localStorage
	function load() {
		const jsonString = localStorage.getItem('db')
		if (jsonString) {
			database = JSON.parse(jsonString)
		} 
	}
})();

