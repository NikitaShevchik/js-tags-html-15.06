"use strict"

const htmlTags = [
    {
        name: 'a',
        description: 'Создаёт гипертекстовые ссылки.'
    },
    {
        name: 'abbr',
        description: 'Определяет текст как аббревиатуру или акроним. Поясняющий текст задаётся с помощью атрибута title.'
    }
]

function findTag(userTag) {
    console.log(htmlTags.find(result => result.name == userTag).description)
}

// console.log(htmlTags.find(result => result.name == 'a').description)