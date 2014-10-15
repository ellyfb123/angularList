(function(){
    var app = angular.module('angularList',[]);
    app.controller('listController',function(){
        this.items = listItems;
        this.remove = function(item){
            this.items.splice(this.items.indexOf(item),1);
        };

    });
    app.controller('addController',function(){
        this.item = {};
        this.addItem = function(list) {
            list.items.push(this.item);
            this.item = {};
        };
    });
    var listItems = [
        {
            itemName: "itemOne"
        }];
})();