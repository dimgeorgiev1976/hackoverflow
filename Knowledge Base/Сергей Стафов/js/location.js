/* модуль нахождения */
;(function () {
    'use strict'

    const Location = {};

    // ф-я возвращает параметр id для передачи в адресной строке
    Location.getId = function getId() {
        if (!location.search) {
            return false;
        }

        // в этом массиве распарсили параметр из адресной строки
        const array = location.search.slice(1).split('=');
        // если элемент найден, возвращаем его индекс
        const index = array.indexOf('id');

        array.push(-1);

        if (index === -1) {
            return false;
        }

        // возвращаем id числом
        return parseInt(array[index + 1]);
    }

    window.Location = Location;

})();