/* модуль вывода Запрос с возможност изменение очков */
;(function() {
	'use strict'

	const CommentView = {}

	// метод  для получения объекта с comment
	CommentView.getCommentHTML = function getCommentHTML (comment) {
		// метод получения готов Dom Element из Template
		const divElement = document.createElement('div')
		// вставим все Елементс из шаблона
		divElement.innerHTML = commentTemplate
			.replace('%POINTS%', comment.points)
			.replace('%CONTENT%', comment.content)
		return divElement.firstElementChild

	}




	window.CommentView = CommentView

	const commentTemplate = `
<div class="my-3 p-3 bg-white rounded shadow-sm">
	<div class="row">
		<div class="col-1">
			<div class="vote">
				<a href="#" class="vote__plus " data-plus>
					<i class="fas fa-chevron-up"></i>
				</a>
				<div class="vote__value" data-pointsplace>
					%POINTS%
				</div>
				<a href="#" class="vote__minus" data-minus>
					<i class="fas fa-chevron-down"></i>
				</a>
			</div>
		</div>
		<div class="col" data-content>%CONTENT%</div>
	</div>
</div>`





})();