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

const internQuestionInfo = [
    {
        internId: 0,
        videoId: 'Ro3PUQQ84Nc',
        questions: [
            {
                id: '0',
                title: 'Защо избра Теленор',
                video: {
                    end: 16
                },
                text: 'Защо избра Теленор: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '1',
                title: 'С какво се занимаваше по време на стажа',
                video: {
                    start: 16,
                    end: 31
                },
                text: 'С какво се занимаваше по време на стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '2',
                title: 'Какво е най-ценното, което научи от стажа',
                video: {
                    start: 31,
                    end: 47
                },
                text: 'Какво е най-ценното, което научи от стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '3',
                title: 'Промени ли се мнението ти за Теленор след края на стажа',
                video: {
                    start: 47,
                    end: 65
                },
                text: 'Промени ли се мнението ти за Теленор след края на стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '4',
                title: 'Каква е екипната атмосфера в офиса',
                video: {
                    start: 65,
                    end: 84
                },
                text: 'Каква е екипната атмосфера в офиса: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '5',
                title: 'Какво би посъветвала бъдещите стажанти',
                video: {
                    start: 84
                },
                text: 'Какво би посъветвала бъдещите стажанти: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            }
        ]
    },
    {
        internId: 1,
        videoId: 'lkh1d5Crp2c',
        questions: [
            {
                id: '0',
                title: 'Защо избра Теленор',
                video: {
                    end: 14
                },
                text: 'Защо избра Теленор: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '1',
                title: 'Какво е най-ценното, което научи от стажа',
                video: {
                    start: 14,
                    end: 24
                },
                text: 'Какво е най-ценното, което научи от стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '2',
                title: 'Какво ти харесва в Telenor',
                video: {
                    start: 24,
                    end: 34
                },
                text: 'Какво ти харесва в Telenor: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '3',
                title: 'Как би описала атмосферата в офиса',
                video: {
                    start: 34,
                    end: 53
                },
                text: 'Как би описала атмосферата в офиса: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '4',
                title: 'Какво би посъветвала бъдещите стажанти',
                video: {
                    start: 53
                },
                text: 'Какво би посъветвала бъдещите стажанти: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            }
        ]
    },
    {
        internId: 2,
        videoId: 'qsjiDKY3XWk',
        questions: [
            {
                id: '0',
                title: 'Защо избра Теленор',
                video: {
                    end: 30
                },
                text: 'Защо избра Теленор: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '1',
                title: 'С какво се занимаваше по време на стажа',
                video: {
                    start: 31,
                    end: 54
                },
                text: 'С какво се занимаваше по време на стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '2',
                title: 'Как би описала атмосферата в офиса',
                video: {
                    start: 54,
                    end: 91
                },
                text: 'Как би описала атмосферата в офиса: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '3',
                title: 'Какво е най-ценното, което научи от стажа',
                video: {
                    start: 91,
                    end: 109
                },
                text: 'Какво е най-ценното, което научи от стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '4',
                title: 'Какво би посъветвала бъдещите стажанти',
                video: {
                    start: 109
                },
                text: 'Какво би посъветвала бъдещите стажанти: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            }
        ]
    },
    {
        internId: 3,
        videoId: 'DE7_ThRnnxU',
        questions: [
            {
                id: '0',
                title: 'Защо избра Теленор',
                video: {
                    start: 0,
                    end: 27
                },
                text: 'Защо избра Теленор: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '1',
                title: 'Какво научи от стажа в Теленор',
                video: {
                    start: 27,
                    end: 63
                },
                text: 'Какво научи от стажа в Теленор: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '2',
                title: 'Как би описал работата в екипа',
                video: {
                    start: 63,
                    end: 83
                },
                text: 'Как би описал работата в екипа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '3',
                title: 'Какво би посъветвал бъдещите стажанти',
                video: {
                    start: 84,
                },
                text: 'Какво би посъветвал бъдещите стажанти: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            }
        ]
    },
    {
        internId: 4,
        videoId: 'KS4SKSYIvis',
        questions: [
            {
                id: '0',
                title: 'С какво се занимаваше по време на стажа',
                video: {
                    end: 37
                },
                text: 'С какво се занимаваше по време на стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '1',
                title: 'Как оценяваш екипа си',
                video: {
                    start: 38,
                    end: 66
                },
                text: 'Как оценяваш екипа си: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '2',
                title: 'Защо избра Теленор',
                video: {
                    start: 67,
                    end: 94
                },
                text: 'Защо избра Теленор: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '3',
                title: 'Какво е Digital Service Provider',
                video: {
                    start: 95,
                    end: 126
                },
                text: 'Какво е Digital Service Provider: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '4',
                title: 'Какво би посъветвал бъдещите стажанти',
                video: {
                    start: 127
                },
                text: 'Какво би посъветвал бъдещите стажанти: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            }
        ]
    },
    {
        internId: 5,
        videoId: 'ZyVaVssgzpw',
        questions: [
            {
                id: '0',
                title: 'С какво се занимаваше по време на стажа',
                video: {
                    end: 35
                },
                text: 'С какво се занимаваше по време на стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '1',
                title: 'Какво е най-ценното, което научи от стажа',
                video: {
                    start: 36,
                    end: 61
                },
                text: 'Какво е най-ценното, което научи от стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '2',
                title: 'Как би описал екипа и средата за работа в Теленор',
                video: {
                    start: 62,
                    end: 87
                },
                text: 'Как би описал екипа и средата за работа в Теленор: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '3',
                title: 'Промени ли се мнението ти за Теленор след края на стажа',
                video: {
                    start: 88,
                    end: 111
                },
                text: 'Промени ли се мнението ти за Теленор след края на стажа: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: '4',
                title: 'Какво е Digital Service Provider',
                video: {
                    start: 112,
                },
                text: 'Какво е Digital Service Provider: Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
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