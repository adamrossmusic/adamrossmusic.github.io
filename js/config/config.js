app.config(function ($stateProvider, $urlRouterProvider) {
    //
    $urlRouterProvider.otherwise("/list");
    //
    // Now set up the states
    $stateProvider
        .state('list', {
            url: "/list",
            templateUrl: "../templates/listMode.html"
        })
        .state('calendar', {
            url: "/calendar",
            templateUrl: "../templates/calendarMode.html"
        })
        .state('calendar.1_week', {
            url: "/1_week",
            templateUrl: "../templates/calendarMode.oneWeek.html"
        })
        .state('calendar.full_month', {
            url: "/full_month",
            templateUrl: "../templates/calendarMode.fullMonth.html"
        })
        .state('myPage', {
            url: "/myPage",
            templateUrl: "../templates/personalPage.html"
        });
});