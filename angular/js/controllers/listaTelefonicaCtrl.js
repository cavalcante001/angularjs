angular
  .module("listaTelefonica")
  .controller("listaTelefonicaCtrl", function ($scope, contatosAPI, serialGenerator) {
    console.log(serialGenerator.generate())
    $scope.contatos = [];
    $scope.app = "Lista Telefônica";

    var carregarContatos = function () {
      contatosAPI.getContatos().success(function (data) {
          $scope.contatos = data; 
        })
        .error(function (data, status) {
          $scope.error = "Não foi possível carregar os dados!";
        });
    };

    $scope.adicionarContato = function (contato) {
      contato.serial = serialGenerator.generate();
      contato.data = new Date();
        contatosAPI.saveContato(contato).success(function (data) {
          delete $scope.contato;
          $scope.contatoForm.$setPristine();
          carregarContatos();
        });
    };

    $scope.apagarContatos = function (contatos) {
      $scope.contatos = contatos.filter(function (contato) {
        if (!contato.selecionado) return contato;
      });
    };
    $scope.isContatoSelecionado = function (contatos) {
      return (isContatoSelecionado = contatos.some(function (contato) {
        return contato.selecionado;
      }));
    };
    $scope.ordenarPor = function (campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    carregarContatos();
  });
