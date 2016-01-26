(function() {
    "use strict";

    /**
     * Configuration for the  module
     * Description:
     * 
     */
    angular
        .module('app.exam-method')
        .config(configure);

    configure.$inject = ['$stateProvider', 'USER_ROLES'];

    function configure($stateProvider, USER_ROLES) {
        console.info("the exam method config is runing");

        $stateProvider
            .state('app.admin.exam-method', {
                url: '/exam-method',
                views: {
                    'main@app': {
                        templateUrl: 'src/exam-method/views/exam-method.main.view.html',
                        controller: 'ExamMethodMainController',
                        controllerAs: 'exm'

                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.doctor]
                },
                ncyBreadcrumb: {
                    label: 'Exam Method'
                }
            })
            .state('app.admin.exam-method.new', {
                url: '/new',
                views: {
                    'main@app': {
                        templateUrl: 'src/exam-method/views/exam-method.new.view.html',
                        controller: 'ExamMethodNewController',
                        controllerAs: 'exm'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.doctor]
                },
                ncyBreadcrumb: {
                    label: 'New'
                }
            });
    }

})();
