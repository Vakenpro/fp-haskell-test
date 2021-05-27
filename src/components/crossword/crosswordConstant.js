export const crosswordData = [
  {
    id: 0,
    data: {
      across: {
        1: {
          clue: 'Какое имя у человека, фамилия которого легла в основу языка Haskell',
          answer: 'КАРРИ',
          row: 0,
          col: 9,
        },
        3: {
          clue: 'Функциональное программирование –это стиль программирования, который опирается на вычисление …',
          answer: 'ВЫРАЖЕНИЙ',
          row: 2,
          col: 6,
        },
        4: {
          clue:
            'В системе исполнения функциональной программы обязательным компонентом становится высокоэффективный сборщик …',
          answer: 'МУСОРА',
          row: 5,
          col: 6,
        },
        5: {
          clue: 'В функциональных языках цикл обычно реализуется в виде …',
          answer: 'РЕКУРСИИ',
          row: 9,
          col: 11,
        },
        8: {
          clue: 'В отличии от других языков, в функциональном языке отсутствуют …',
          answer: 'ПЕРЕМЕННЫЕ',
          row: 10,
          col: 0,
        },
      },
      down: {
        2: {
          clue: 'Самое большое преимущество функционального программирования – ',
          answer: 'КРАТКОСТЬ',
          row: 0,
          col: 9,
        },
        6: {
          clue: 'Если результат чистой функции не используется, её вызов может быть …',
          answer: 'УДАЛЕН',
          row: 5,
          col: 7,
        },
        7: {
          clue: 'Какая фамилия у создателя первого функционального языка программирования “Lisp”?',
          answer: 'МАККАРТИ',
          row: 4,
          col: 11,
        },
      },
    },
  },
  {
    id: 1,
    data: {
      across: {
        1: {
          clue: 'Модуль состоит из двух частей, одна из которых определения. Назовите вторую. ',
          answer: 'ШАПКА',
          row: 3,
          col: 0,
        },
        4: { clue: 'Как называют кортеж, содержащий два элемента?', answer: 'ГЕТЕРОГЕННОСТЬ', row: 6, col: 1 },
        6: { clue: 'При объявлении функции что указывается после символа :: ?', answer: 'ТИП', row: 8, col: 11 },
        7: {
          clue: 'Что используется для осуществления повторяющихся вычислений?',
          answer: 'РЕКУРСИЯ',
          row: 11,
          col: 10,
        },
      },
      down: {
        2: { clue: 'Как называют кортеж, содержащий два элемента?', answer: 'ПАРА', row: 0, col: 1 },
        3: { clue: 'Это особый вид списка, который имеет круглые скобки.', answer: 'КОРТЕЖ', row: 3, col: 3 },
        5: {
          clue:
            'Функция … порядка – уникальная особенность Haskell, где можно использовать функцию в качестве входного или выходного аргумента. Какое слово пропущено?',
          answer: 'ВЫСШЕГО',
          row: 2,
          col: 8,
        },
        8: { clue: 'Эта структура представляет собой набор данных одного типа.', answer: 'СПИСОК', row: 6, col: 12 },
        9: { clue: 'Правило: один … – один файл. Какое слово пропущено?', answer: 'МОДУЛЬ', row: 1, col: 14 },
        10: {
          clue: 'Основная управляющая структура функционального языка Haskell.',
          answer: 'ФУНКЦИЯ',
          row: 5,
          col: 17,
        },
      },
    },
  },
  {
    id: 2,
    data: {
      across: {
        1: {
          clue: 'Гомогенные структуры данных, содержащие несколько элементов одного типа',
          answer: 'СПИСКИ',
          row: 2,
          col: 7,
        },
        4: {
          clue: 'В каком виде полиморфизма функция реализуется для всех типов одинаково.',
          answer: 'ПАРАМЕТРИЧЕСКОМ',
          row: 10,
          col: 0,
        },
        6: {
          clue: 'Ограничения, накладываемые на тип параметрической переменной в типе функции называется…',
          answer: 'КОНТЕКСТОМ',
          row: 0,
          col: 8,
        },
        8: { clue: 'При сравнении разных типов используются разные … сравнения', answer: 'ФУНКЦИИ', row: 8, col: 12 },
      },
      down: {
        7: {
          clue: 'Только ключевое слово instance позволяет связывать … и типы данных',
          answer: 'КЛАССЫ',
          row: 8,
          col: 3,
        },
        3: {
          clue:
            'Cпособность программы автоматически выбирать правильный метод для использования в зависимости от типа данных, полученных для обработки.',
          answer: 'ПОЛИМОРФИЗМ',
          row: 2,
          col: 8,
        },
        2: {
          clue: 'Стандартная структура данных, содержащая несколько элементов как одного, так и разных типов',
          answer: 'КОРТЕЖ',
          row: 2,
          col: 11,
        },
        5: {
          clue: 'В каком виде полиморфизма разные типы имеют различную структуру и различное представление',
          answer: 'СПЕЦИАЛЬНОМ',
          row: 0,
          col: 14,
        },
      },
    },
  },
  {
    id: 3,
    data: {
      across: {
        1: { clue: 'набор объектов и морфизмов между конструкциями', answer: 'КАТЕГОРИЯ', row: 12, col: 0 },
        6: { clue: 'С помощью функции runState мы … нашу монаду', answer: 'ЗАПУСКАЕМ', row: 9, col: 7 },
        7: { clue: 'Монады позволяют задавать … выполнения операций', answer: 'ПОСЛЕДОВАТЕЛЬНОСТЬ', row: 3, col: 6 },
      },
      down: {
        5: {
          clue:
            'Если нам необходимо произвести в монаде некоторые вычисления, не связанные с данной монадой, то мы можем воспользоваться функцией (писать на русском)',
          answer: 'РЕТУРН',
          row: 11,
          col: 3,
        },
        3: {
          clue:
            'особый тип данных, для которого возможно задать императивную последовательность выполнения операций над хранимыми значениями',
          answer: 'МОНАДА',
          row: 11,
          col: 5,
        },
        8: { clue: 'Оператор >>= является функцией …', answer: 'СВЯЗЫВАНИЯ', row: 3, col: 8 },
        4: {
          clue:
            '… функтор — это обычный функтор с некоторыми дополнительными функциями, предоставляемыми классом Applicative Type.',
          answer: 'АППЛИКАТИВНЫЙ',
          row: 0,
          col: 17,
        },
        2: {
          clue: 'распространённая в программировании конструкция, позволяющая использовать объект как функцию',
          answer: 'ФУНКТОР',
          row: 1,
          col: 19,
        },
      },
    },
  },
  {
    id: 4,
    data: {
      across: {
        7: { clue: '', answer: 'АБСТРАКЦИЯМИ', row: 2, col: 5 },
        1: { clue: '', answer: 'ФУНКЦИЯ', row: 6, col: 0 },
        5: { clue: '', answer: 'КАРРИНГ', row: 8, col: 4 },
        3: { clue: '', answer: 'КОМБИНАТОРЫ', row: 10, col: 1 },
        6: { clue: '', answer: 'ТЕРМАМИ', row: 13, col: 10 },
      },
      down: {
        2: { clue: '', answer: 'АППЛИКАЦИЯ', row: 2, col: 5 },
        4: { clue: '', answer: 'РЕДЕКС', row: 10, col: 11 },
        8: { clue: '', answer: 'ПРИЛОЖЕНИЯМ', row: 0, col: 13 },
      },
    },
  },
];
