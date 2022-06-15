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
        description: 'Представляет собой гиперссылку с текстом, соответствующей определенной области на карте-изображении или активную область внутри карты-изображения. Всегда вложен внутрь элемента < map >.'
    },
    {
        name: 'article',
        description: ''
    },
    {
        name: 'aside',
        description: ''
    },
    {
        name: 'audio',
        description: ''
    },
    {
        name: 'b',
        description: ''
    },
    {
        name: 'base',
        description: ''
    },
    {
        name: 'bdi',
        description: ''
    },
    {
        name: 'bdo',
        description: ''
    },
    {
        name: 'blockquote',
        description: ''
    },
    {
        name: 'body',
        description: ''
    },
    {
        name: 'br',
        description: ''
    },
    {
        name: 'button',
        description: ''
    },
    {
        name: 'canvas',
        description: ''
    },
    {
        name: 'caption',
        description: ''
    },
    {
        name: 'cite',
        description: ''
    },
    {
        name: 'code',
        description: ''
    },
    {
        name: 'col',
        description: ''
    },
    {
        name: 'colgroup',
        description: ''
    },
    {
        name: 'data',
        description: ''
    },
    {
        name: 'datalist',
        description: ''
    },
    {
        name: 'dd',
        description: ''
    },
    {
        name: 'del',
        description: ''
    },
    {
        name: 'details',
        description: ''
    },
    {
        name: 'dfn',
        description: ''
    },
    {
        name: 'dialog',
        description: ''
    },
    {
        name: 'div',
        description: ''
    },
    {
        name: 'dl',
        description: ''
    },
    {
        name: 'dt',
        description: ''
    },
    {
        name: 'em',
        description: ''
    },
    {
        name: 'embed',
        description: ''
    },
    {
        name: 'fieldset',
        description: ''
    },
    {
        name: 'figcaption',
        description: ''
    },
    {
        name: 'figure',
        description: ''
    },
    {
        name: 'footer',
        description: ''
    },
    {
        name: 'form',
        description: ''
    },
    {
        name: 'h1',
        description: ''
    },
    {
        name: 'h2',
        description: ''
    },
    {
        name: 'h3',
        description: ''
    },
    {
        name: 'h4',
        description: ''
    },
    {
        name: 'h5',
        description: ''
    },
    {
        name: 'h6',
        description: ''
    },
    {
        name: 'head',
        description: ''
    },
    {
        name: 'header',
        description: ''
    },
    {
        name: 'hr',
        description: ''
    },
    {
        name: 'html',
        description: ''
    },
    {
        name: 'i',
        description: ''
    },
    {
        name: 'iframe',
        description: ''
    },
    {
        name: 'img',
        description: ''
    },
    {
        name: 'input',
        description: ''
    },
    {
        name: 'ins',
        description: ''
    },
    {
        name: 'kbd',
        description: ''
    },
    {
        name: 'label',
        description: ''
    },
    {
        name: 'legend',
        description: ''
    },
    {
        name: 'li',
        description: ''
    },
    {
        name: 'link',
        description: ''
    },
    {
        name: 'main',
        description: ''
    },
    {
        name: 'map',
        description: ''
    },
    {
        name: 'mark',
        description: ''
    },
    {
        name: 'meta',
        description: ''
    },
    {
        name: 'meter',
        description: ''
    },
    {
        name: 'nav',
        description: ''
    },
    {
        name: 'noscript',
        description: ''
    },
    {
        name: 'object',
        description: ''
    },
    {
        name: 'ol',
        description: ''
    },
    {
        name: 'optgroup',
        description: ''
    },
    {
        name: 'option',
        description: ''
    },
    {
        name: 'output',
        description: ''
    },
    {
        name: 'p',
        description: ''
    },
    {
        name: 'param',
        description: ''
    },
    {
        name: 'picture',
        description: ''
    },
    {
        name: 'pre',
        description: ''
    },
    {
        name: 'progress',
        description: ''
    },
    {
        name: 'q',
        description: ''
    },
    {
        name: 'ruby',
        description: ''
    },
    {
        name: 'rb',
        description: ''
    },
    {
        name: 'rt',
        description: ''
    },
    {
        name: 'rtc',
        description: ''
    },
    {
        name: 'rp',
        description: ''
    },
    {
        name: 's',
        description: ''
    },
    {
        name: 'samp',
        description: ''
    },
    {
        name: 'script',
        description: ''
    },
    {
        name: 'section',
        description: ''
    },
    {
        name: 'select',
        description: ''
    },
    {
        name: 'small',
        description: ''
    },
    {
        name: 'source',
        description: ''
    },
    {
        name: 'span',
        description: ''
    },
    {
        name: 'strong',
        description: ''
    },
    {
        name: 'style',
        description: ''
    },
    {
        name: 'sub',
        description: ''
    },
    {
        name: 'summary',
        description: ''
    },
    {
        name: 'sup',
        description: ''
    },
    {
        name: 'table',
        description: ''
    },
    {
        name: 'tbody',
        description: ''
    },
    {
        name: 'td',
        description: ''
    },
    {
        name: 'template',
        description: ''
    },
    {
        name: 'textarea',
        description: ''
    },
    {
        name: 'tfoot',
        description: ''
    },
    {
        name: 'th',
        description: ''
    },
    {
        name: 'thead',
        description: ''
    },
    {
        name: 'time',
        description: ''
    },
    {
        name: 'title',
        description: ''
    },
    {
        name: 'tr',
        description: ''
    },
    {
        name: 'track',
        description: ''
    },
    {
        name: 'u',
        description: ''
    },
    {
        name: 'ul',
        description: ''
    },
    {
        name: 'var',
        description: ''
    },
    {
        name: 'video',
        description: ''
    },
    {
        name: 'wbr',
        description: ''
    }
]



function isHtml(e) {
    for (let i of htmlTags) {
        if (i.name === e) {
            userResult.innerHTML = i.description;
            break
        } else {
            userResult.innerHTML = `Тег '${e}' не найден в базе`
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
