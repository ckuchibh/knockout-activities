require.config({
    baseUrl: "scripts",
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min",
        "knockout": "knockout-latest"
    }
})

require(['jquery','knockout'], function($,ko) {
    var Person = function(name) {
        var self = this;
        self.name = ko.observable(name);
        self.children = ko.observableArray([]);
      }
        
      var ViewModel = function() {
        var self = this;
        self.name = 'root view model';
        self.mainPerson = ko.observable();
      }
      
      var vm = new ViewModel(),
          grandpa = new Person('grandpa'),
          daddy = new Person('daddy'),
          son1 = new Person('marc'),
          son2 = new Person('john');
      
      vm.mainPerson(grandpa);
      grandpa.children.push(daddy);
      daddy.children.push(son1);
      daddy.children.push(son2);
      
      ko.applyBindings(vm);



});
