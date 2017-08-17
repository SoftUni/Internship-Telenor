const interns = [
    { id: 0, name: 'Симона Георгиева', picture: 'images/interns/hellion_portrait_roster.png'},
    { id: 1, name: 'Люба Петрова', picture: 'images/interns/grave_robber_portrait_roster.png' },
    { id: 2, name: 'Кая Парашкевова', picture: 'images/interns/vestal_portrait_roster.png' },
    { id: 3, name: 'Георги Челенков', picture: 'images/interns/crusader_portrait_roster.png' },
    { id: 4, name: 'Христо Димитров', picture: 'images/interns/arbalest_portrait_roster.png' },
    { id: 5, name: 'Дениз Стефанов', picture: 'images/interns/houndmaster_portrait_roster.png' },
]

define({
    getAllInterns: () => interns,
    getSingleIntern: (id) => interns[id]
})