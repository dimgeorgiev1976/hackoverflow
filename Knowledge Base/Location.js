; (function() {
	'use strict'

	const Location = {}


	Location.getId = function getId() {
		if (!location.search) {
			return false
		}

		const array = location.search.slice(1).split('=')
		const index = array.indexOf('id')

		if (index === -1) {
			return false
		}

		return parseInt(array[index + 1])
	}
	window.Location = Location
})();