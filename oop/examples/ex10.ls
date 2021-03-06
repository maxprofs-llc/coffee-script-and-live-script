class Person
    # Static members
    @personCount = 0
    @type = "PERSON"

    @getType = ->
        return @type

    (@name) ->
        @@personCount++

    sayHello : ->
        console.log("hello, i'm", @name)

    walk : ->
        console.log(@name, "is walking")


class BasketballPlayer extends Person

    (name, team) ->
        super(name)
        @team = team
        @@personCount+=2

    sayHello : ->
        super()
        console.log("of", @team)

    jump : ->
        console.log(@name, "is jumping")

# create 2 player instance
player1 = new BasketballPlayer("manu ginobini", "san antonio spurs")


console.log Person.type                     # "PERSON"
console.log Person.getType()                # "PERSON"
console.log BasketballPlayer.type           # "PERSON"
console.log BasketballPlayer.getType()      # "PERSON"

console.log player1.type                    # undefined
#console.log player1.getType()              # TypeError: Object #<BasketballPlayer> has no method 'getType'

BasketballPlayer.type = "BasketballPlayer"
console.log Person.type                     # "PERSON"
console.log BasketballPlayer.type           # "BasketballPlayer"

BasketballPlayer.getType = ->
    return @type + "!!!!!"
console.log Person.getType()                # "PERSON"
console.log BasketballPlayer.getType()      # "BasketballPlayer!!!"

console.log Person.personCount              # 1
console.log BasketballPlayer.personCount    # 2