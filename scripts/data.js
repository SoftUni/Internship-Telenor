const interns = [
    {
        id: 0,
        name: 'Симона Георгиева',
        department: 'Digital Channels',
        position: 'Digital Channels Specialist',
        picture: 'images/interns/hellion_portrait_roster.png'
    },
    {
        id: 1,
        name: 'Люба Петрова',
        department: 'ЛП department',
        position: 'ЛП position',
        picture: 'images/interns/grave_robber_portrait_roster.png'
    },
    {
        id: 2,
        name: 'Кая Парашкевова',
        department: 'КП department',
        position: 'КП position',
        picture: 'images/interns/vestal_portrait_roster.png'
    },
    {
        id: 3,
        name: 'Георги Челенков',
        department: 'ГЧ department',
        position: 'ГЧ Position',
        picture: 'images/interns/crusader_portrait_roster.png'
    },
    {
        id: 4,
        name: 'Христо Димитров',
        department: 'ХД department',
        position: 'ХД position',
        picture: 'images/interns/arbalest_portrait_roster.png'
    },
    {
        id: 5,
        name: 'Дениз Стефанов',
        department: 'ДС department',
        position: 'ДС position',
        picture: 'images/interns/houndmaster_portrait_roster.png'
    },
]

// TODO: Are the questions different for every intern position?
const internQuestionInfo = [
    {
        internId: 0,
        questions: [
            {
                id: 0,
                title: 'Защо избра да кандидатстваш в Теленор',
                videoId: '1Wh8RzcQZr4',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: 1,
                title: 'Какви са впечатленията ти за колегите ти',
                videoId: 'oqNKD9YVe4U',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: 2,
                title: 'В какъв проект участваш',
                videoId: 'O1KW3ZkLtuo',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: 3,
                title: 'Разкажи ми за твой успех по време на стажа',
                videoId: '79EvGkXHF9I',
                text: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'
            },
            {
                id: 4,
                title: 'Какво ще посъветваш бъдещите стажанти',
                videoId: 'hvdW86xcnco',
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
                videoId: '123qwe',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: '234qwe',
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
                videoId: '123qwe',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: '234qwe',
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
                videoId: '123qwe',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: '234qwe',
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
                videoId: '123qwe',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: '234qwe',
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
                videoId: '123qwe',
                text: 'Text to question 1'
            },
            {
                id: 1,
                title: 'Question 2',
                videoId: '234qwe',
                text: 'Text to question 2'
            }
        ]
    },
]

define({
    getAllInterns: () => interns,
    getSingleIntern: (id) => interns[id],
    getAllInternQuestions: (internId) => internQuestionInfo[internId],
    getQuestionVideo: (internId, id) => internQuestionInfo[internId].questions[id]
})