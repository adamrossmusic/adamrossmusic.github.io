app.controller('calendarController', function($scope, moment) {

    $scope.currentMonth = moment().format('YYYY-MM');
    $scope.selectedDay = [];

    $scope.fullMonth = [
        {
            day: '2',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '3',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '4',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '5',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '6',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '9',
            workHours: '9',
            activities:[
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '10',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '11',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '12',
            workHours: '9',
            activities:[
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '13',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '16',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '17',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '18',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '19',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '20',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '23',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '24',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '25',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '26',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '27',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '30',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '31',
            workHours: '9',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        }
    ];

    $scope.oneWeek = [
        {
            day: '23',
            workingHours: '8',
            nonWorkingHours: '1',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '24',
            workingHours: '8',
            nonWorkingHours: '1',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '25',
            workingHours: '8',
            nonWorkingHours: '1',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '26',
            workingHours: '8',
            nonWorkingHours: '1',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        },
        {
            day: '27',
            workingHours: '8',
            nonWorkingHours: '1',
            activities: [
                {
                    project: 'Cabi Mobile',
                    ticketId: '22414',
                    taskName: 'Designing UI',
                    planned: false,
                    description: 'It is not a trivial task',
                    spentTime: '3'

                },
                {
                    project: 'Cabi Mobile',
                    ticketId: '22654',
                    taskName: 'Implementing UI',
                    planned: true,
                    description: 'Nearly finished',
                    spentTime: '5'

                },
                {
                    project: 'other',
                    ticketId: '22414',
                    taskName: 'Leasure activities',
                    planned: false,
                    description: 'Ccccsssoooccsoootime.',
                    spentTime: '1'

                }
            ]
        }
    ];

    $scope.selectDay = function(day) {
      $scope.selectedDay = day;
    };
});