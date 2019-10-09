/* модуль вывода*/

// Получим все вопросы (проблемы)
const problems = Database.getProblems()

// Элемент, в который будут вставлены карточки вопросов
// (шаблоны cardTemplate со вставленными данными)
const cardsplaceElement = document.querySelector('[data-cardsplace]')

// из базы problems в константу problem
for (problem of problems) {

    // для каждого вопроса создадим вёрстку
	const html = Card.getHTML(problem)
	
    // Добавляем в конец списка карточку вопроса
	cardsplaceElement.append(html)


}

