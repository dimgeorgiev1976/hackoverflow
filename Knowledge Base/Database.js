;(function() {
	'use strict'

	let database = {
		idCounter: 2,
		problems:[{
					id: 1,
					title: 'Post title',
					content: 'Post title',
					points: 0,
					viewsNumber: 10,
					badges: ['js', 'javascript'],
					comments: [
						{
							id: 1,
							content: 'Comment content'
						}
					]
				}
			]
		}

		load()


	const Database = {}

	Database.getProblems = function getProblems () {
		return JSON.parse(JSON.stringify(database.problems))
	}
	Database.addProblem = function addProblem (title, content) {
		database.problems.push({
			id: database.idCounter,
			title: title,
			content: content,
			points: 0,
			comments: []

		})

		database.idCounter++

		save()

	}

	window.Database = Database

	function save () {
		localStorage.setItem('db', JSON.stringify(database))
	}

	function load() {
		const jsonString = localStorage.getItem('db')
		if (jsonString) {
			database = JSON.parse(jsonString)
		} 
	}
})();

