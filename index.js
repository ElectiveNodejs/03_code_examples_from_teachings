var name = 'Claus'; // string
name = 22;

var food = {
    // data
    type : 'apple',
    taste : 'sour',
    price : 44,
    // metoder
    info : function () {
        return this.type + ' ' + this.taste + ' ' + this.price;
    }, 
    specs : ['hello', 'fjhghfjghjg', 989898, {name : 'Claus'}],
    orm : {
        name : 'Olfot',
        age : 44
    }
};

console.log(food.orm.name);

/*
console.log(food.type);
food.type = 'Orange';
console.log(food.type);
food.xxx = 'bla bla bla';
console.log(food.xxx);
console.log(food.info());
*/

// function
var x = function (text) {
    return 'Hello' + text + arguments[2];
}
console.log(x('world', 44, 66));

/*
function y () {
    return 'World';
}
console.log(y());

// anonyme functioner
function () {
    return 'Hello';
}*/








