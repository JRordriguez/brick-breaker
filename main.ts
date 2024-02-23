namespace SpriteKind {
    export const ball = SpriteKind.create()
}
function increase_speed (ball: Sprite) {
	
}
// Used a reference from https://arcade.makecode.com/51490-49872-98693-63628
function shootball () {
    if (ball.vy == 0 && ball.vx == 0) {
        ball.setVelocity(50, 50)
    }
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    shootball()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    otherSprite.vy = otherSprite.vy * -1
})
let ball: Sprite = null
let block = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c c c c c c c c c c c c c c c c 
    c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
    c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
    c c c c c c c c c c c c c c c c 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ball = sprites.create(img`
    . 1 1 1 1 1 . 
    1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 
    . 1 1 1 1 1 . 
    `, SpriteKind.ball)
block.setScale(2.5, ScaleAnchor.Bottom)
controller.moveSprite(block, 100, 0)
info.setScore(0)
info.setLife(3)
block.setPosition(80, 100)
block.setStayInScreen(true)
ball.setBounceOnWall(true)
ball.setStayInScreen(true)
ball.setPosition(80, 100)
tiles.setCurrentTilemap(tilemap`level1`)
