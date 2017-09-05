const interns = [
    {
        id: 0,
        name: 'Симона Георгиева',
        department: 'Digital Channels',
        position: 'Digital Channels Specialist',
        description: 'Little Miss Sunshine ти намига всеки път когато отвориш мобилното приложение My Telenor',
        picture: 'Simona.jpg'
    },
    {
        id: 1,
        name: 'Люба Петрова',
        department: 'ЛП department',
        position: 'ЛП position',
        description: 'Пикасо – открива нови перспективи във визуализацията на данни',
        picture: 'Luba.jpg'
    },
    {
        id: 2,
        name: 'Кая Парашкевова',
        department: 'КП department',
        position: 'КП position',
        description: 'Кара офис процесите да танцуват в дигиталния свят',
        picture: 'Kaya.jpg'
    },
    {
        id: 3,
        name: 'Георги Челенков',
        department: 'ГЧ department',
        position: 'ГЧ Position',
        description: 'Нинджа програмист – кодира неуморно в големите проекти на Теленор',
        picture: 'Georgi.jpg'
    },
    {
        id: 4,
        name: 'Христо Димитров',
        department: 'ХД department',
        position: 'ХД position',
        description: 'Шерлок Холмс на данните',
        picture: 'Hristo.jpg'
    },
    {
        id: 5,
        name: 'Дениз Стефанов',
        department: 'ДС department',
        position: 'ДС position',
        description: 'Професор Х в извличането на важна информация и откриването на данни',
        picture: 'Denis.jpg'
    },
]

// TODO: Are the questions different for every intern position?
const internQuestionInfo = [
    {
        internId: 0,
        questions: [
            {
                id: '0',
                title: 'Защо избра да кандидатстваш в Теленор',
                videoId: 'n6ryV8WGctE',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '1',
                title: 'Какви са впечатленията ти за колегите ти',
                videoId: 'jpmWHPpaiso',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '2',
                title: 'В какъв проект участваш',
                videoId: 'FkOyTwAE4HE',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '3',
                title: 'Разкажи ми за твой успех по време на стажа',
                videoId: 'ocB530rxUFA',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '4',
                title: 'Какво ще посъветваш бъдещите стажанти',
                videoId: 'es1D1lWI3x8',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            }
        ]
    },
    {
        internId: 1,
        questions: [
            {
                id: 0,
                title: 'Question 1',
                videoId: 'n6ryV8WGctE',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: 'jpmWHPpaiso',
                text: 'Text to question 2'
            }
        ]
    },
    {
        internId: 2,
        questions: [
            {
                id: 0,
                title: 'Question 1',
                videoId: 'n6ryV8WGctE',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: 'jpmWHPpaiso',
                text: 'Text to question 2'
            }
        ]
    },
    {
        internId: 3,
        questions: [
            {
                id: 0,
                title: 'Question 1',
                videoId: 'n6ryV8WGctE',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: 'jpmWHPpaiso',
                text: 'Text to question 2'
            }
        ]
    },
    {
        internId: 4,
        questions: [
            {
                id: 0,
                title: 'Question 1',
                videoId: 'n6ryV8WGctE',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: 'jpmWHPpaiso',
                text: 'Text to question 2'
            }
        ]
    },
    {
        internId: 5,
        questions: [
            {
                id: 0,
                title: 'Question 1',
                videoId: 'n6ryV8WGctE',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: 'jpmWHPpaiso',
                text: 'Text to question 2'
            }
        ]
    },
]

define({
    getAllInterns: () => interns,
    getSingleIntern: (id) => interns[id],
    getAllInternQuestions: (internId) => internQuestionInfo[internId],
    getQuestionInfo: (internId, id) => internQuestionInfo[internId].questions[id]
})