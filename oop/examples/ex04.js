// Generated by CoffeeScript 1.7.1
(function() {
    var BasketballPlayer, Person, player1, player2,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        };

    Person = (function() {
        function Person(name) {
            this.name = name;
        }

        Person.prototype.sayHello = function() {
            return console.log("hello, i'm", this.name);
        };

        Person.prototype.walk = function() {
            return console.log(this.name, "is walking");
        };

        return Person;

    })();

    BasketballPlayer = (function(_super) {
        __extends(BasketballPlayer, _super);

        function BasketballPlayer(name, team) {
            BasketballPlayer.__super__.constructor.call(this, name);
            this.team = team;
        }

        BasketballPlayer.prototype.sayHello = function() {
            BasketballPlayer.__super__.sayHello.call(this);
            return console.log("of", this.team);
        };

        BasketballPlayer.prototype.jump = function() {
            return console.log(this.name, "is jumping");
        };

        return BasketballPlayer;

    })(Person);

    player1 = new BasketballPlayer("manu ginobini", "san antonio spurs");

    player2 = new BasketballPlayer("jeremy lin", "houston rockets");

    console.log("player1", player1);

    console.log("player2", player2);

    player1.sayHello();

    player1.jump();

    player1.walk();

    player2.sayHello();

    player2.jump();

    player2.walk();

}).call(this);