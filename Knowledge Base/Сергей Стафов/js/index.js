/* модуль вывода
console.log('Hello, there!)');*/

// Получим все вопросы (проблемы)
const problems = Database.getProblems();

// Элемент, в который будут вставлены карточки вопросов
// (шаблоны cardTemplate со вставленными данными)
const cardplaceElement = document.querySelector ('[data-cardsplace]');

// из базы problems в константу problem
for (const problem of problems) {
    // для каждого вопроса создадим вёрстку
    const html = Card.getHTML(problem);
    // Добавляем в конец списка карточку вопроса
    cardplaceElement.append(html);
}