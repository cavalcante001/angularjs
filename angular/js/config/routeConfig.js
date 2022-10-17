angular.module("listaTelefonica").config(function ($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        // resolve: {
        //     operadoras: function(operadorasAPI) {
        //         return operadorasAPI.getOperadoras();
        //     }
        // }
    });
    $routeProvider.when("/novoContato", {
        templateUrl: "view/novoContato.html",
        controller: "listaTelefonicaCtrl",
        // resolve: {
        //     operadoras: function(operadorasAPI) {
        //         return operadorasAPI.getOperadoras();
        //     }
        // }
    });

    $routeProvider.otherwise({ redirectTo: "/contatos" });
    
});