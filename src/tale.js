// Задание 1:

//     В файле tale.js cоздать функцию kolobok.
//     Функция kolobok принимает на вход имя персонажа, возвращает, что сделал колобок после встречи с персонажем.
//     Список персонажей: дедушка; заяц; лиса.
//     Пример работы функции:
//     kolobok('дедушка') // Я от дедушки ушёл
//     kolobok('лиса') // Меня съели

function kolobok1(name) {
    if (name === 'дедушка') {
        return 'Я от дедушки ушел'
    } else if (name === 'заяц') {
        return 'Я от зайца ушел'
    } else if (name === 'лиса') {
        return 'Меня съели'
    }
}

function kolobok2(name) {
    switch (name) {
        case 'дедушка':
            return 'Я от дедушки ушел'
        case 'заяц':
            return 'Я от зайца ушел'
        case 'лиса':
            return 'Меня съели'
    }
}


// console.log(kolobok1('дедушка'))
// console.log(kolobok1('заяц'))
// console.log(kolobok1('лиса'))

// console.log(kolobok2('дедушка'))
// console.log(kolobok2('заяц'))
// console.log(kolobok2('лиса'))


// Задание 2:

//     В файле tale.js cоздать функцию newYear.
//     Функция на вход принимает имя персонажа. Дед Мороз или Снегурочка.
//     Функция возвращает: "Дед Мороз! Дед Мороз! Дед Мороз!" или "Снегурочка! Снегурочка! Снегурочка!";
//     В функции используйте шаблонные строки;

function newYear(name) {
    return `${name}! ${name}! ${name}!`
}

// console.log(newYear('Дед Мороз'))