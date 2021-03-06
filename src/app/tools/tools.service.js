(function () {
    'use strict';

    angular
        .module('ncwatch')
        .factory('ToolsService', ToolsService);

    /** @ngInject */
    function ToolsService($http) {
        var service = {};

        service.exportDataInFile = exportDataInFile;

        return service;

        function exportDataInFile(tool, domain, data) {
            return $http({
                method: 'POST',
                url: '/api/export',
                params: {
                    tool: tool,
                    domain: domain
                },
                data: data,
                headers: {'Content-Type': 'application/json'}
            });
        }
    }
})();