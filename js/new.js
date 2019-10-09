

	// Find Element для Mecто вставки вопроса
	document
		.querySelector('[data-addproblem]')
		.addEventListener('click', function(event) {
			// Oтменит стандадртнъй обработку собитие 
				event.preventDefault()

				// Проходимся по вес масив comments и вернюм/саздаем нов масив comments 
				//масив comments

				const title = document.querySelector('[data-titleplace]').value
				const content = document.querySelector('[data-contentplace]').value

				// Проходимся по вес масив badges  и разпаарсит & трим на 
				// каждой елемент

				const badges = document.querySelector('[data-badges]').value.split(',')
					.map(x => x.trim())

				// console.log(title, content)
					// Создать новъй problem и Возврашаем Id problem
				const problemId =	Database.addProblem(title, content, badges)
				// пернаправлят страницана искомую problem на другой адресс
				location.replace('./inner.html?id=' + problemId )
			})