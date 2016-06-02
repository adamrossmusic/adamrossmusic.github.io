app.controller('personalController', function ($scope) {
    $scope.userInfo = {
        avatarUrl: 'avatar.png',
        username: 'ferenczia',
        userTitle: 'Frontend / Javascript Dev.',
        workedHours: '900',
        funnyMessage: 'Why was the JavaScript developer sad? a. Because he didn\'t Node how to Express himself',
        doneTasks: '57',
        avarageWorkhour: '5.54',
        estimationRate: '0.69',
        projects: [
            'Sontime Angular Client',
            'Jumio',
            'Sontime Rebirth',
            'Sonrisa Virtualizer',
            'Cabi Mobile'
        ]

    };

    $scope.myTickets = [
        {
            ticketId: '37091',
            project: 'Sontime Rebirth',
            ticket: 'Design my very own Sontime idea',
            description: 'New ideas, new stuff, responsivness',
            status: 'In progress',
            progess: '70%'
        },
        {
            ticketId: '21412',
            project: 'Cabi',
            ticket: 'Design my very own Cabi idea',
            description: 'New ideas, new stuff, yeahh',
            status: 'In progress',
            progess: '10%'
        },
        {
            ticketId: '37091',
            project: 'Sontime Rebirth',
            ticket: 'Design my very own Sontime idea',
            description: 'New ideas, new stuff, responsivness',
            status: 'In progress',
            progess: '70%'
        },
        {
            ticketId: '21412',
            project: 'Cabi',
            ticket: 'Design my very own Cabi idea',
            description: 'New ideas, new stuff, yeahh',
            status: 'In progress',
            progess: '10%'
        },
        {
            ticketId: '37091',
            project: 'Sontime Rebirth',
            ticket: 'Design my very own Sontime idea',
            description: 'New ideas, new stuff, responsivness',
            status: 'In progress',
            progess: '70%'
        },
        {
            ticketId: '21412',
            project: 'Cabi',
            ticket: 'Design my very own Cabi idea',
            description: 'New ideas, new stuff, yeahh',
            status: 'In progress',
            progess: '10%'
        },
        {
            ticketId: '37091',
            project: 'Sontime Rebirth',
            ticket: 'Design my very own Sontime idea',
            description: 'New ideas, new stuff, responsivness',
            status: 'In progress',
            progess: '70%'
        },
        {
            ticketId: '21412',
            project: 'Cabi',
            ticket: 'Design my very own Cabi idea',
            description: 'New ideas, new stuff, yeahh',
            status: 'In progress',
            progess: '10%'
        }
    ];

    $scope.myEvents = [
        {
            id: '1',
            name: 'Sonrisa Days 2016',
            date: '2016/09/18-20',
            time: '',
            project: 'Company'
        },
        {
            id: '2',
            name: 'Sonrisa Rebirth Demo event',
            date: '2016/06/02',
            time: '18:00',
            project: 'Sontime Rebirth'
        },
        {
            id: '2',
            name: 'Typescript Coding Dojo',
            date: '2016/06/08',
            time:  '15:00',
            project: 'Company'
        }
    ];
});