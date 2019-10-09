// Достат Id problem и разпарсит Url
const problemId = Location.getId()

// Oбратится к базу даннъй через метода getProblemId()
const problem = Database.getProblemId(problemId)

// Oбратится к базу даннъй for badge
const badgeTemplate = `  <a href="#" class="badge badge-dark">%BADGE_LABEL%</a> `

// If not have a problem
if (!problem) {
	throw Error('Problem is not defined!')
}

// Find inner HTML template and inject html title 
document.querySelector('[data-tatelplace]').textContent = problem.title

// Find inner HTML template and inject html content
document.querySelector('[data-contentplace]').textContent = problem.content

// Find Element для Mecто вставки наше badge 
document.querySelector('[data-badgesplace]').append(
	// Проходимся по вес масив badges и вернюм/саздаем нов масив badges через map()
	...problem.badges.map(badge => {
		const divElement = document.createElement('div')
		divElement.innerHTML = badgeTemplate.replace('%BADGE_LABEL%', badge)
		return divElement.firstElementChild
	})
)
// Find inner HTML template and inject html comments
document.querySelector('[data-commentsnumberplace]')
	.textContent = problem.comments.length

// Find Element для Mecто вставки наше comments
document.querySelector('[data-commentsplace]').append(
// Проходимся по вес масив comments и вернюм/саздаем нов масив comments масив comments map()
// Отсортируем масив comments по количество очков через sort()
	...problem.comments.sort((a , b) => b.points - a.points)
		.map(comment => {
		const commentHTML =  CommentView.getCommentHTML(comment)
		// Прослушаем собитие click() comment data-plus
		commentHTML
			.querySelector('[data-plus]')
			.addEventListener('click', function (event) {
				// Oтменит стандадртнъй обработку собитие 
				event.preventDefault()
				// Увеличит количества очков обратится к конкретного id
				const result = Database.commentPointPlus(comment.id)
				if (result) {
					// найдюм елемент Points увеличим количества очков на 1
					const commentElement = commentHTML
						.querySelector('[data-pointsplace]')
					const points = parseInt(commentElement.textContent)	
					commentElement.textContent = points + 1
				}
		})
		
		// Навешат обработчик собитие у етого Element na собитие click() comment
		commentHTML
			.querySelector('[data-minus]')
			.addEventListener('click', function (event) {
				// Oтменит стандадртнъй обработку собитие 
				event.preventDefault()
				// Увеличит количества очков обратится к конкретного id
				const result = Database.commentPointMinus(comment.id)
				if (result) {
					// найдюм елемент Points увеличим количества очков на 1
					const commentElement = commentHTML
						.querySelector('[data-pointsplace]')
					const points = parseInt(commentElement.textContent)	
					commentElement.textContent = points - 1
				}
		})
		return commentHTML
	})
)
		// Find Element для Mecто вставки first comments

	document
		.querySelector('[data-addcommentbutton]')
		.addEventListener('click', function(event) {
			// Oтменит стандадртнъй обработку собитие 
				event.preventDefault()
				 // Считат все содержимое каторую в текст поле
				 const commentContent = document.querySelector('[data-commentplace]').value
					// создание новъй комментарий
					const result = Database.addComment(problemId , commentContent)

				// метод перезагрузка страница с постами через location
				if (result) {
					location.reload()
				}
			})



// console.log(problem)