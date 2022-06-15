"use strict"
const userInput = document.querySelector('.finder__input');
const userResult = document.querySelector('.tagsfind__result');

const htmlTags = [
    {
        name: 'a',
        description: 'Создаёт гипертекстовые ссылки.'
    },
    {
        name: 'abbr',
        description: 'Определяет текст как аббревиатуру или акроним. Поясняющий текст задаётся с помощью атрибута title.'
    },
    {
        name: 'address',
        description: 'Задает контактные данные автора/владельца документа или статьи. Отображается в браузере курсивом.'
    },
    {
        name: 'area',
        description: 'Представляет собой гиперссылку с текстом, соответствующей определенной области на карте-изображении или активную область внутри карты-изображения. Всегда вложен внутрь элемента <code>&ltmap&gt</code>.'
    },
    {
        name: 'article',
        description: 'Раздел контента, который образует независимую часть документа или сайта, например, статья в журнале, запись в блоге, комментарий.'
    },
    {
        name: 'aside',
        description: 'Представляет контент страницы, который имеет косвенное отношение к основному контенту страницы/сайта.'
    },
    {
        name: 'audio',
        description: 'Загружает звуковой контент на веб-страницу.'
    },
    {
        name: 'b',
        description: 'Задает полужирное начертание отрывка текста, не придавая акцент или важность выделенному.'
    },
    {
        name: 'base',
        description: 'Задает базовый адрес (URL), относительно которого вычисляются все относительные адреса. Это поможет избежать проблем при переносе страницы в другое место, так как все ссылки будут работать, как и прежде.'
    },
    {
        name: 'bdi',
        description: 'Изолирует отрывок текста, написанный на языке, в котором чтение текста происходит справа налево, от остального текста.'
    },
    {
        name: 'bdo',
        description: 'Отображает текст в направлении, указанном в атрибуте dir, переопределяя текущее направление написания текста.'
    },
    {
        name: 'blockquote',
        description: 'Выделяет текст как цитату, применяется для описания больших цитат.'
    },
    {
        name: 'body',
        description: 'Представляет тело документа (содержимое, не относящееся к метаданным документа).'
    },
    {
        name: 'br',
        description: 'Перенос текста на новую строку.'
    },
    {
        name: 'button',
        description: 'Создает интерактивную кнопку. Элемент может содержать текст или изображение.'
    },
    {
        name: 'canvas',
        description: 'Холст-контейнер для динамического отображения изображений, таких как простые изображения, диаграммы, графики и т.п. Для рисования используется скриптовый язык JavaScript.'
    },
    {
        name: 'caption',
        description: 'Добавляет подпись к таблице. Вставляется сразу после открывающего тега <code>&lttable&gt</code>.'
    },
    {
        name: 'cite',
        description: 'Используется для указания источника цитирования. Отображается курсивом.'
    },
    {
        name: 'code',
        description: `<code>Представляет фрагмент программного кода, отображается шрифтом семейства monospace.</code>`
    },
    {
        name: 'col',
        description: 'Выбирает для форматирования один или несколько столбцов таблицы, не содержащих информацию одного типа.'
    },
    {
        name: 'colgroup',
        description: 'Создает структурную группу столбцов, выделяющую множество логически однородных ячеек.'
    },
    {
        name: 'data',
        description: 'Элемент используется для связывания значения атрибута <code>value</code>, которое представлено в машиночитаемом формате и может быть обработано компьютером, с содержимым элемента.'
    },
    {
        name: 'datalist',
        description: 'Элемент-контейнер для выпадающего списка элемента <code>&ltinput&gt</code>. Варианты значений помещаются в элементы <code>&ltoption&gt</code>.'
    },
    {
        name: 'dd',
        description: 'Используется для описания термина из элемента <code>&ltdt&gt</code>.'
    },
    {
        name: 'del',
        description: 'Помечает текст как удаленный, перечёркивая его. <del>Элемент в теге выглядит так</del>'
    },
    {
        name: 'details',
        description: 'Создаёт интерактивный виджет, который пользователь может открыть или закрыть. Представляет собой контейнер для контента, видимый заголовок виджета помещается в элемент <code>&ltsummary&gt</code>.'
    },
    {
        name: 'dfn',
        description: 'Определяет слово как термин, выделяя его курсивом. Текст, идущий следом, должен содержать расшифровку этого термина.'
    },
    {
        name: 'dialog',
        description: 'Интерактивный элемент, с которым взаимодействует пользователь для выполнения задачи, например, диалоговое окно, инспектор или окно. Без атрибута open не виден для пользователя.'
    },
    {
        name: 'div',
        description: 'Элемент-контейнер для разделов HTML-документа. Используется для группировки блочных элементов с целью форматирования стилями.'
    },
    {
        name: 'dl',
        description: 'Элемент-контейнер, внутри которого находятся термин и его описание.'
    },
    {
        name: 'dt',
        description: 'Используется для задания термина.'
    },
    {
        name: 'em',
        description: 'Выделяет важные фрагменты текста, отображая их курсивом.'
    },
    {
        name: 'embed',
        description: 'Элемент-контейнер для встраивания внешнего интерактивного контента или плагина.'
    },
    {
        name: 'fieldset',
        description: 'Группирует связанные элементы в форме, рисуя рамку вокруг них.'
    },
    {
        name: 'figcaption',
        description: 'Заголовок/подпись для элемента <code>&ltfigure&gt</code>.'
    },
    {
        name: 'figure',
        description: 'Самодостаточный элемент-контейнер для такого контента как иллюстрации, диаграммы, фотографии, примеры кода, обычно с подписью.'
    },
    {
        name: 'footer',
        description: 'Определяет завершающую область (нижний колонтитул) документа или раздела.'
    },
    {
        name: 'form',
        description: 'Форма для сбора и отправки на сервер информации от пользователей. Не работает без атрибута action.'
    },
    {
        name: 'h1',
        description: 'Создает заголовок 1го уровня для связанных с ним разделов.'
    },
    {
        name: 'h2',
        description: 'Создает заголовок 2го уровня для связанных с ним разделов.'
    },
    {
        name: 'h3',
        description: 'Создает заголовок 3го уровня для связанных с ним разделов.'
    },
    {
        name: 'h4',
        description: 'Создает заголовок 4го уровня для связанных с ним разделов.'
    },
    {
        name: 'h5',
        description: 'Создает заголовок 5го уровня для связанных с ним разделов.'
    },
    {
        name: 'h6',
        description: 'Создает заголовок 6го уровня для связанных с ним разделов.'
    },
    {
        name: 'head',
        description: 'Элемент-контейнер для метаданных HTML-документа, таких как <code>&lttitle&gt</code>, <code>&ltmeta&gt</code>, <code>&ltscript&gt</code>, <code>&ltlink&gt</code>, <code>&ltstyle&gt</code>.'
    },
    {
        name: 'header',
        description: 'Секция для вводной информации сайта или группы навигационных ссылок. Может содержать один или несколько заголовков, логотип, информацию об авторе.'
    },
    {
        name: 'hr',
        description: 'Горизонтальная линия для тематического разделения параграфов.'
    },
    {
        name: 'html',
        description: 'Корневой элемент HTML-документа. Сообщает браузеру, что это HTML-документ. Является контейнером для всех остальных html-элементов.'
    },
    {
        name: 'i',
        description: 'Выделяет отрывок текста курсивом, не придавая ему дополнительный акцент.'
    },
    {
        name: 'iframe',
        description: 'Создает встроенный фрейм, загружая в текущий HTML-документ другой документ.'
    },
    {
        name: 'img',
        description: 'Встраивает изображения в HTML-документ с помощью атрибута src, значением которого является адрес встраиваемого изображения.'
    },
    {
        name: 'input',
        description: 'Создает многофункциональные поля формы, в которые пользователь может вводить данные.'
    },
    {
        name: 'ins',
        description: 'Выделяет текст подчеркиванием. Применяется для выделения изменений, вносимых в документ.'
    },
    {
        name: 'kbd',
        description: 'Выделяет текст, который должен быть введён пользователем с клавиатуры, шрифтом семейства monospace.'
    },
    {
        name: 'label',
        description: 'Добавляет текстовую метку для элемента <code>&ltinput&gt</code>.'
    },
    {
        name: 'legend',
        description: 'Заголовок элементов формы, сгруппированных с помощью элемента <code>&ltfieldset&gt</code>.'
    },
    {
        name: 'li',
        description: 'Элемент маркированного или нумерованного списка.'
    },
    {
        name: 'link',
        description: 'Определяет отношения между документом и внешним ресурсом. Также используется для подключения внешних таблиц стилей.'
    },
    {
        name: 'main',
        description: 'Контейнер для основного уникального содержимого документа. На одной странице должно быть не более одного элемента <code>&ltmain&gt</code>.'
    },
    {
        name: 'map',
        description: 'Создаёт активные области на карте-изображении. Является контейнером для элементов <code>&ltarea&gt</code>.'
    },
    {
        name: 'mark',
        description: 'Выделяет фрагменты текста, помечая их желтым фоном.'
    },
    {
        name: 'meta',
        description: 'Используется для хранения дополнительной информации о странице. Эту информацию используют браузеры для обработки страницы, а поисковые системы — для ее индексации. В блоке <code>&lthead&gt</code> может быть несколько элементов <code>&ltmeta&gt</code>, так как в зависимости от используемых атрибутов они несут разную информацию.'
    },
    {
        name: 'meter',
        description: 'Индикатор измерения в заданном диапазоне.'
    },
    {
        name: 'nav',
        description: 'Раздел документа, содержащий навигационные ссылки по сайту.'
    },
    {
        name: 'noscript',
        description: 'Определяет секцию, не поддерживающую сценарий (скрипт).'
    },
    {
        name: 'object',
        description: 'Контейнер для встраивания мультимедиа (например, аудио, видео, Java-апплеты, ActiveX, PDF и Flash). Также можно вставить другую веб-страницу в текущий HTML-документ. Для передачи параметров встраиваемого плагина используется элемент <code>&ltparam&gt</code>.'
    },
    {
        name: 'ol',
        description: 'Упорядоченный нумерованный список. Нумерация может быть числовая или алфавитная.'
    },
    {
        name: 'optgroup',
        description: 'Контейнер с заголовком для группы элементов <code>&ltoption&gt</code>.'
    },
    {
        name: 'option',
        description: 'Определяет вариант/опцию для выбора в раскрывающемся списке <code>&ltselect&gt</code>, <code>&ltoptgroup&gt</code> или <code>&ltdatalist&gt</code>.'
    },
    {
        name: 'output',
        description: 'Поле для вывода результата вычисления, рассчитанного с помощью скрипта.'
    },
    {
        name: 'p',
        description: 'Параграфы в тексте.'
    },
    {
        name: 'param',
        description: 'Определяет параметры для плагинов, встраиваемых с помощью элемента <code>&ltobject&gt</code>.'
    },
    {
        name: 'picture',
        description: 'Элемент-контейнер, содержащий один элемент <code>&ltimg&gt</code> и ноль или несколько элементов <code>&ltsource&gt</code>. Сам по себе ничего не отображает. Дает возможность браузеру выбирать наиболее подходящее изображение.'
    },
    {
        name: 'pre',
        description: 'Выводит текст без форматирования, с сохранением пробелов и переносов текста. Может быть использован для отображения компьютерного кода, сообщения электронной почты и т.д.'
    },
    {
        name: 'progress',
        description: 'Индикатор выполнения задачи любого рода.'
    },
    {
        name: 'q',
        description: 'Определяет краткую цитату.'
    },
    {
        name: 'ruby',
        description: 'Контейнер для Восточно-Азиатских символов и их расшифровки.'
    },
    {
        name: 'rb',
        description: 'Определяет вложенный в него текст как базовый компонент аннотации.'
    },
    {
        name: 'rt',
        description: 'Добавляет краткую характеристику сверху или снизу от символов, заключенных в элементе <code>&ltruby&gt</code>, выводится уменьшенным шрифтом.'
    },
    {
        name: 'rtc',
        description: 'Отмечает вложенный в него текст как дополнительную аннотацию.'
    },
    {
        name: 'rp',
        description: 'Выводит альтернативный текст в случае если браузер не поддерживает элемент <code>&ltruby&gt</code>.'
    },
    {
        name: 's',
        description: 'Отображает текст, не являющийся актуальным, перечеркнутым.'
    },
    {
        name: 'samp',
        description: 'Используется для вывода текста, представляющего результат выполнения программного кода или скрипта, а также системные сообщения. Отображается моноширинным шрифтом.'
    },
    {
        name: 'script',
        description: 'Используется для определения сценария на стороне клиента (обычно JavaScript). Содержит либо текст скрипта, либо указывает на внешний файл сценария с помощью атрибута src.'
    },
    {
        name: 'section',
        description: 'Определяет логическую область (раздел) страницы, обычно с заголовком.'
    },
    {
        name: 'select',
        description: 'Элемент управления, позволяющий выбирать значения из предложенного множества. Варианты значений помещаются в <code>&ltoption&gt</code>.'
    },
    {
        name: 'small',
        description: 'Отображает текст шрифтом меньшего размера.'
    },
    {
        name: 'source',
        description: 'Указывает местоположение и тип альтернативных медиаресурсов для элементов <code>&ltpicture&gt</code>, <code>&ltvideo&gt</code>, <code>&ltaudio&gt</code>.'
    },
    {
        name: 'span',
        description: 'Контейнер для строчных элементов. Можно использовать для форматирования отрывков текста, например, выделения цветом отдельных слов.'
    },
    {
        name: 'strong',
        description: 'Расставляет акценты в тексте, выделяя полужирным.'
    },
    {
        name: 'style',
        description: 'Подключает встраиваемые таблицы стилей.'
    },
    {
        name: 'sub',
        description: 'Задает подстрочное написание символов, например, индекса элемента в химических формулах.'
    },
    {
        name: 'summary',
        description: 'Создаёт видимый заголовок для элемента <code>&ltdetails&gt</code>. Отображается с закрашенным треугольником, кликнув по которому можно просмотреть подробности заголовка.'
    },
    {
        name: 'sup',
        description: 'Задает надстрочное написание символов.'
    },
    {
        name: 'table',
        description: 'Элемент для создания таблицы.'
    },
    {
        name: 'tbody',
        description: 'Определяет тело таблицы.'
    },
    {
        name: 'td',
        description: 'Создает ячейку таблицы.'
    },
    {
        name: 'template',
        description: 'Используется для объявления фрагментов HTML-кода, которые могут быть клонированы и вставлены в документ скриптом. Содержимое элемента не является его дочерним элементом.'
    },
    {
        name: 'textarea',
        description: 'Создает большие поля для ввода текста.'
    },
    {
        name: 'tfoot',
        description: 'Определяет нижний колонтитул таблицы.'
    },
    {
        name: 'th',
        description: 'Создает заголовок ячейки таблицы.'
    },
    {
        name: 'thead',
        description: 'Определяет заголовок таблицы.'
    },
    {
        name: 'time',
        description: 'Определяет дату/время.'
    },
    {
        name: 'title',
        description: 'Заголовок HTML-документа, отображаемый в верхней части строки заголовка браузера. Также может отображаться в результатах поиска, поэтому это следует принимать во внимание предоставление названия.'
    },
    {
        name: 'tr',
        description: 'Создает строку таблицы.'
    },
    {
        name: 'track',
        description: 'Добавляет субтитры для элементов <code>&ltaudio&gt</code> и <code>&ltvideo&gt</code>.'
    },
    {
        name: 'u',
        description: 'Выделяет отрывок текста подчёркиванием, без дополнительного акцента.'
    },
    {
        name: 'ul',
        description: 'Создает маркированный список.'
    },
    {
        name: 'var',
        description: 'Выделяет переменные из программ, отображая их курсивом.'
    },
    {
        name: 'video',
        description: 'Добавляет на страницу видео-файлы. Поддерживает 3 видео формата: MP4, WebM, Ogg.'
    },
    {
        name: 'wbr',
        description: 'Указывает браузеру возможное место разрыва длинной строки.'
    }
]

function isHtml(e) {
    for (let i of htmlTags) {
        if (i.name === e) {
            userResult.innerHTML = i.description;
            break
        } else {
            userResult.innerHTML = `Тег <code>&lt${e}&gt</code> не найден в базе`
        }
    }
}


userInput.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        const userInputValue = userInput.value;
        isHtml(userInputValue)
    }
})




















// console.log(htmlTags.includes(res => res.name('abbr')))

// function findTag(userTag) {
//     console.log(htmlTags.includes(res => res.includes(userInput.value)))
//     const resultTag = htmlTags.find(result => result.name == userTag).description;
//     if (htmlTags.find(result => result.name == userTag).description) {
//         userResult.innerHTML = resultTag;
//     } else {
//         userResult.innerHTML = `Тег <${userTag}> не найден в базе`
//     }

// }

// userInput.addEventListener('keydown', e => {
//     if (e.key == 'Enter') {
//         const userInputValue = userInput.value;
//         findTag(userInputValue)
//     }
// })

// // console.log(htmlTags.find(result => result.name == 'a').description)
