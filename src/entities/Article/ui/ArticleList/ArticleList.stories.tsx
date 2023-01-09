import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleList } from './ArticleList';

import {
    Article,
    ArticleView,
    ArticleBlockType,
    ArticleType,
} from '@/entities/Article';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://i.pinimg.com/originals/7a/fb/04/7afb0491c91b2f9e9aac56667c3be677.jpg',
    views: 1022,
    user: {
        id: '1',
        username: 'sergey',
        avatar: 'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg',
    },
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;

const articles = new Array(15).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
}));

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const TileNormal = Template.bind({});
TileNormal.args = {
    view: ArticleView.TILE,
    articles,
    isLoading: false,
};

export const TileDark = Template.bind({});
TileDark.args = {
    view: ArticleView.TILE,
    articles: new Array(15).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    })),
    isLoading: false,
};
TileDark.decorators = [themeDecorator(Theme.DARK)];

export const TileOrange = Template.bind({});
TileOrange.args = {
    view: ArticleView.TILE,
    articles,
    isLoading: false,
};
TileOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const TileNormalIsLoading = Template.bind({});
TileNormalIsLoading.args = {
    view: ArticleView.TILE,
    articles: [],
    isLoading: true,
};

export const TileDarkIsLoading = Template.bind({});
TileDarkIsLoading.args = {
    view: ArticleView.TILE,
    articles: [],
    isLoading: true,
};
TileDarkIsLoading.decorators = [themeDecorator(Theme.DARK)];

export const TileOrangeIsLoading = Template.bind({});
TileOrangeIsLoading.args = {
    view: ArticleView.TILE,
    articles: [],
    isLoading: true,
};
TileOrangeIsLoading.decorators = [themeDecorator(Theme.ORANGE)];

export const BlockNormal = Template.bind({});
BlockNormal.args = {
    view: ArticleView.BLOCK,
    articles,
    isLoading: false,
};

export const BlockDark = Template.bind({});
BlockDark.args = {
    view: ArticleView.BLOCK,
    articles,
    isLoading: false,
};
BlockDark.decorators = [themeDecorator(Theme.DARK)];

export const BlockOrange = Template.bind({});
BlockOrange.args = {
    view: ArticleView.BLOCK,
    articles,
    isLoading: false,
};
BlockOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const BlockNormalIsLoading = Template.bind({});
BlockNormalIsLoading.args = {
    view: ArticleView.BLOCK,
    articles: [],
    isLoading: true,
};

export const BlockDarkIsLoading = Template.bind({});
BlockDarkIsLoading.args = {
    view: ArticleView.BLOCK,
    articles: [],
    isLoading: true,
};
BlockDarkIsLoading.decorators = [themeDecorator(Theme.DARK)];

export const BlockOrangeIsLoading = Template.bind({});
BlockOrangeIsLoading.args = {
    view: ArticleView.BLOCK,
    articles: [],
    isLoading: true,
};
BlockOrangeIsLoading.decorators = [themeDecorator(Theme.ORANGE)];
