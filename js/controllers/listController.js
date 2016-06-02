app.controller('listController', function ($scope, moment) {
    $scope.selectedDate = moment().format('YYYY-MM-DD');

    $scope.durationHours = '00';
    $scope.durationMinutes = '00';
    $scope.selectedIndex = '';
    $scope.taskLimit = 5;

    $scope.isInSelectHourMode = false;
    $scope.isInSelectMinutesMode = false;
    $scope.isInDeleteMode = false;
    $scope.isProjectSelected = false;

    $scope.selectedProject = {};
    $scope.selectedTask = {};
    $scope.formData = {};

    $scope.days = [
        {
            "code": "mon",
            "display": "Monday",
            "definition": "Monday.",
            "val": '-1'
        },
        {
            "code": "tue",
            "display": "Tuesday",
            "definition": "Tuesday.",
            "val": '0'
        },
        {
            "code": "wed",
            "display": "Wednesday",
            "definition": "Wednesday.",
            "val": '1'
        },
        {
            "code": "thu",
            "display": "Thursday",
            "definition": "Thursday.",
            "val": '2'
        },
        {
            "code": "fri",
            "display": "Friday",
            "definition": "Friday.",
            "val": '3'
        },
        {
            "code": "sat",
            "display": "Saturday",
            "definition": "Saturday.",
            "val": '4'
        },
        {
            "code": "sun",
            "display": "Sunday",
            "definition": "Sunday.",
            "val": '5'

        }
    ];

    $scope.tasks = [
        {
            id: 1,
            ticketId: 36784,
            name: 'Implement minimaps for manual assign distance filtering',
            project: {
                id: 5,
                name: 'CAbi Leads Management'
            }
        },
        {
            id: 2,
            ticketId: 36785,
            name: 'Stylist list is empty',
            project: {
                id: 5,
                name: 'CAbi Leads Management'
            }
        },
        {
            id: 3,
            ticketId: 36786,
            name: 'Minor design fixes on new screens',
            project: {
                id: 3,
                name: 'sontime2'
            }
        },
        {
            id: 4,
            ticketId: 36787,
            name: 'Arrow icons in the columns',
            project: {
                id: 3,
                name: 'sontime2'
            }
        },
        {
            id: 5,
            ticketId: 36788,
            name: 'Display date and time of build on login screen',
            project: {
                id: 4,
                name: 'CAbi Mobile'
            }
        },
        {
            id: 6,
            ticketId: 36784,
            name: 'Implement minimaps for manual assign distance filtering',
            project: {
                id: 5,
                name: 'CAbi Leads Management'
            }
        },
        {
            id: 7,
            ticketId: 36785,
            name: 'Stylist list is empty',
            project: {
                id: 5,
                name: 'CAbi Leads Management'
            }
        },
        {
            id: 8,
            ticketId: 36786,
            name: 'Minor design fixes on new screens',
            project: {
                id: 3,
                name: 'sontime2'
            }
        },
        {
            id: 9,
            ticketId: 36787,
            name: 'Arrow icons in the columns',
            project: {
                id: 3,
                name: 'sontime2'
            }
        },
        {
            id: 10,
            ticketId: 36788,
            name: 'Display date and time of build on login screen',
            project: {
                id: 4,
                name: 'CAbi Mobile'
            }
        }
    ];

    $scope.projects = [
        {
            id: 1,
            name: 'Other'
        },
        {
            id: 2,
            name: 'Dockler Browser'
        },
        {
            id: 3,
            name: 'sontime2'
        },
        {
            id: 4,
            name: 'CAbi Mobile'
        },
        {
            id: 5,
            name: 'CAbi Leads Management'
        }
    ];

    $scope.activities = [
        {
            id: 1,
            date: moment().format('YYYY-MM-DD'),
            project: {
                id: 5,
                name: 'CAbi Leads Management'
            },
            task: {
                id: 1,
                ticketId: 36784,
                name: 'Implement minimaps for manual assign distance filtering'
            },
            description: null,
            duration: 3600
        },
        {
            id: 2,
            date: moment().format('YYYY-MM-DD'),
            project: {
                id: 5,
                name: 'CAbi Leads Management'
            },
            task: {
                id: 2,
                ticketId: 36785,
                name: 'Stylist list is empty'
            },
            description: 'It was hard to find this bug',
            duration: 5400
        },
        {
            id: 3,
            date: moment().format('YYYY-MM-DD'),
            project: {
                id: 3,
                name: 'sontime2'
            },
            task: {
                id: 3,
                ticketId: 36786,
                name: 'Minor design fixes on new screens'
            },
            description: 'Padding and margin settings',
            duration: 7200
        },
        {
            id: 4,
            date: moment().add(1, 'days').format('YYYY-MM-DD'),
            project: {
                id: 3,
                name: 'sontime2'
            },
            task: {
                id: 4,
                ticketId: 36787,
                name: 'Arrow icons in the columns'
            },
            description: null,
            duration: 3600
        },
        {
            id: 5,
            date: moment().add(1, 'days').format('YYYY-MM-DD'),
            project: {
                id: 4,
                name: 'CAbi Mobile'
            },
            task: {
                id: 5,
                ticketId: 36788,
                name: 'Display date and time of build on login screen'
            },
            description: null,
            duration: 1800
        }

    ];

    $scope.selectDate = function (value) {
        var date = $scope.selectedDate;
        console.log(date);
        console.log(value);
    };

    $scope.startDurationSelect = function () {
        $scope.isInSelectHourMode = true;
        $scope.isInSelectMinutesMode = false;
    };

    $scope.setDurationHour = function (hour) {
        $scope.durationHours = hour;
        $scope.isInSelectHourMode = false;
        $scope.isInSelectMinutesMode = true;
    };

    $scope.setDurationMinute = function (minute) {
        $scope.durationMinutes = minute;
        $scope.isInSelectHourMode = false;
        $scope.isInSelectMinutesMode = false;
    };

    $scope.setProject = function (project) {
        $scope.selectedProject = project;
        $scope.isProjectSelected = true;
    };

    $scope.selectRecent = function (task) {
        $scope.selectedTask = task;
        $scope.formData.task = task;
        $scope.formData.task.ticketName = '#' + task.ticketId + ' - ' + task.name;
        $scope.isProjectSelected = false;
        $scope.taskLimit = 5;
    };

    $scope.beginDelete = function (activity, index) {
        $scope.isInDeleteMode = true;
        $scope.selectedIndex = index;
    };

    $scope.closeDelete = function () {
        $scope.selectedIndex = '';
        $scope.isInDeleteMode = false;
    };

    $scope.deleteItem = function (activity) {
        $scope.selectedIndex = '';
        $scope.isInDeleteMode = false;
        for (var i = 0; i < $scope.activities.length; i++)
            if ($scope.activities[i].id === activity.id) {
                $scope.activities.splice(i, 1);
                break;
            }
    };

    $scope.saveActivity = function () {
        $scope.activityToPush = [
            {
                id: Math.floor((Math.random() * 100) + 7),
                date: moment().format('YYYY-MM-DD')
            }
        ];

        $scope.activityToPush.project = $scope.selectedProject;
        $scope.activityToPush.task = $scope.selectedTask;
        $scope.activityToPush.description = null;
        $scope.activityToPush.duration = $scope.durationHours + ':' + $scope.durationMinutes;

        $scope.activities.push($scope.activityToPush);

        $scope.selectedProject = {};
        $scope.selectedTask = {};
        $scope.formData = {};
        $scope.durationHours = '00';
        $scope.durationMinutes = '00';
    };

    // It is only for mobile

    $scope.showMoreTask = function () {
      $scope.taskLimit += 5;
    };

});