input.onButtonPressed(Button.A, function () {
    if (bob.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let bob: game.LedSprite = null
bob = game.createSprite(2, 2)
basic.forever(function () {
    bob.move(1)
    bob.ifOnEdgeBounce()
    basic.pause(randint(100, 500))
})
