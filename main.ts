enum ActionKind {
    Walking,
    Idle,
    Jumping,
    jewel,
    rock
}
namespace SpriteKind {
    export const jewel = SpriteKind.create()
}
function spawn_rocks () {
    mySprite2 = sprites.create(img`
        . . . . . . . d d d . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . d d d d d d d e d d d d . . 
        . d d d d d d d d d d d d d d . 
        . d d d e e e e d d d d d d d . 
        d d d e d d d d d d d d d d d d 
        d d d e d d d d d d e d d d d d 
        d d d d d d d d d d e e e d e d 
        d e d d d d d e d d d d e d d d 
        d d d d d d d d d d d d e d d d 
        d d d d e d d d d d d e e d d d 
        . d d d e e e e d d d e d d d . 
        . d d d d d d d d d d d d d d . 
        . . d d d d d d d d d d d d . . 
        . . . d d d d d e d d d d . . . 
        . . . . . d d d d d d . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(40, 5)
    mySprite2.ay = 200
    animation.attachAnimation(mySprite2, rockanim2)
    animation.setAction(mySprite2, ActionKind.rock)
}
function spawn_jewels () {
    for (let value of scene.getTilesByType(9)) {
        jewel2 = sprites.create(img`
            . . . . . f f f f f . . . . . . 
            . . . . f 9 9 9 9 9 f . . . . . 
            . . . f 9 9 9 9 9 9 9 f . . . . 
            . . f 9 9 9 9 9 9 9 9 9 f . . . 
            . . f 9 9 9 9 1 9 9 9 9 f . . . 
            . . f 9 9 9 9 1 9 9 9 9 f . . . 
            . . f 9 9 9 1 1 1 9 9 9 f . . . 
            . . f 9 9 9 1 1 1 9 9 9 f . . . 
            . . f 9 9 9 1 1 1 9 9 9 f . . . 
            . . f 9 9 9 1 1 1 9 9 9 f . . . 
            . . f 9 9 9 1 1 1 9 9 9 f . . . 
            . . f 9 9 9 9 1 9 9 9 9 f . . . 
            . . f 9 9 9 9 1 9 9 9 9 f . . . 
            . . . f 9 9 9 9 9 9 9 f . . . . 
            . . . . f 9 9 9 9 9 f . . . . . 
            . . . . . f f f f f . . . . . . 
            `, SpriteKind.jewel)
        value.place(jewel2)
        animation.attachAnimation(jewel2, jewelanim2)
        animation.setAction(jewel2, ActionKind.jewel)
    }
}
function spawn_player () {
    mySprite = sprites.create(img`
        . . . . f f f f f f f f f . . . 
        . . . f e e e e e e e e e f . . 
        . f f f e e e e e e e e e f f . 
        f e e e e e e e e e e e e e e f 
        . f f 5 5 5 d d d 5 d d 5 f f . 
        . . f 5 5 d 1 d d d d 1 d f . . 
        . f f 5 d d f d d d d f d f . . 
        f 5 f d d d d d d d d d d f . . 
        f 5 f d d d d d d d d d d f . . 
        . f f d d d d d d f d d f f . . 
        f 5 4 f d d d d d d d f 4 . . . 
        . f d f f f f f f f f f d f . . 
        . . f f 4 4 4 4 4 4 4 f f . . . 
        . . . f e e e f e e e f . . . . 
        . . f e e e e f e e e e f . . . 
        . . . f f f f . f f f f . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(30, 230)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
}
function rockanim () {
    rockanim2 = animation.createAnimation(ActionKind.rock, 200)
    rockanim2.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . f f d d d d d d f f . . . 
        . . f d d d d d d e d d d f . . 
        . f d d d d d d d d d d d d f . 
        . f d d d d e e e e d d d d f . 
        f d d d d d d d d e e e d d d f 
        f d d d d d d d d d d d d d d f 
        f d d e d d d d d d d d d d d f 
        f d d d d d d d e d d d d d d f 
        f d d d d d d d d d d d e e d f 
        f d d d e e d d d d d d e d d f 
        . f d d d e e d d d d e e d f . 
        . f d d d d e e d d d d d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f d d d d e d f f . . . 
        . . . . . f f f f f f . . . . . 
        `)
    rockanim2.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . f f d d d d d d f f . . . 
        . . f d d d d d d d d d d f . . 
        . f d d d d e d d d d d d d f . 
        . f d d d e e d d d d d e d f . 
        f d d d e e d d d d d d e d d f 
        f d d d e d d d d d d d e d d f 
        f d d e d d d d d d d d e d e f 
        f d d d d d d d e d d e e d d f 
        f d d d d d d d d d d e d d d f 
        f d d d d d d e d d d e d d d f 
        . f d e d d d e e e d d d d f . 
        . f d d d d d d d e d d d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f d d d d d d f f . . . 
        . . . . . f f f f f f . . . . . 
        `)
}
function new_level () {
    mySprite2.destroy()
    mysprite3.destroy()
    levelnum += 1
    effects.confetti.endScreenEffect()
    if (levelnum == 2) {
        speed = 6000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 9 b b b b b b 9 b b b b b 9 7 
            2 4 4 4 b b 4 4 4 4 b b 4 4 4 7 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b b b 9 b b b b b 7 
            2 b b 4 4 4 b b 4 4 4 4 4 b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 9 b b b b b b 9 b b b b b 9 7 
            2 4 4 4 b b 4 4 4 4 4 4 b b 4 7 
            2 b b b b b b b b b b b b b b 7 
            f b b b b b b b b b b b b b b f 
            2 4 4 4 4 4 4 b b 4 4 4 4 4 4 7 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b 9 b b 3 b b b b 7 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 3) {
        speed = 5000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 b b 9 b b b b b b b b 9 b b 7 
            2 4 4 4 b b b b b b b b 4 4 4 7 
            2 b b 4 b b b 9 3 b b b 4 b b 7 
            2 b b 4 b b 4 4 4 4 b b 4 b b 7 
            2 b 9 4 b b b b b b b b 4 9 b 7 
            2 b 4 4 b b b b b b b b 4 4 b 7 
            2 b b 4 4 b b b b b b 4 4 b b 7 
            2 b b b b b b b 9 b b b b b b 7 
            2 4 b b b b b 4 4 b b b b b 4 7 
            2 b b 9 b b b b b b b b 9 b b 7 
            2 b b 4 b b 4 b b 4 b b 4 b b 7 
            2 b b b b b b b b b b b b b b 7 
            f b b b b b b b b b b b b b b f 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 4) {
        speed = 4000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 9 b b b b b b b b b b b b 9 7 
            2 4 b b b b b 9 3 b b b b b 4 7 
            2 b 4 b b b b 4 4 b b b b 4 b 7 
            2 b b 4 b b b b b b b b 4 b b 7 
            2 b b b 4 b b b 9 b b 4 b b b 7 
            2 b b b b 4 b b b b 4 b b b b 7 
            2 9 b b b b 4 b b 4 b b b b 9 7 
            2 4 b b b b b b b b b b b b 4 7 
            2 b b b b b b b 9 b b b b b b 7 
            2 b b b b 4 4 4 4 4 4 b b b b 7 
            2 b b 4 4 b b b b b b 4 4 b b 7 
            2 b b b b b b b b b b b b b b 7 
            f b b b b b b b 9 b b b b b b f 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 5) {
        speed = 4000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 b 4 4 4 4 4 9 b 4 4 4 4 4 b 7 
            2 b b b b b 4 b b 4 b b b b b 7 
            2 9 b b b b 4 b 9 4 b b b b 9 7 
            2 4 4 b b b 4 b b 4 b b b 4 4 7 
            2 b b b b b 4 9 b 4 b b b b b 7 
            2 b b b b 9 4 b b 4 9 b b b b 7 
            2 b b b 4 4 4 b 9 4 4 4 b b b 7 
            2 b b b b b 4 b b 4 b b b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 4 4 b b b b b b b b b b 4 4 7 
            2 b b b b b b b b b b b b b b 7 
            f b b b b b b 3 b b b b b b b f 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 6) {
        speed = 3000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 b 9 9 b b b b b b b 9 9 b b 7 
            2 b 4 4 b b b b b b b 4 4 b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b 9 b b b 9 b b b b b 7 
            2 b b b 4 4 b b b 4 4 b b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 b b 9 b b b b b b b b 9 b b 7 
            2 b b 4 b b 4 b b 4 b b 4 b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 4 b b b b b 3 b b b b b b 4 7 
            2 b b b b b b 4 4 b b b b b b 7 
            f b b b b b b 4 4 b b b b b b f 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 7) {
        speed = 3000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b 9 b b 9 b b b b b 7 
            2 b 4 4 4 4 4 b b 4 4 4 4 b b 7 
            2 b b b b 4 9 b b 9 4 b b b b 7 
            2 b b b b 4 4 b b 4 4 b b b b 7 
            2 4 b b b b b b b b b b b b 4 7 
            2 9 b b b b b 3 b b b b b b 9 7 
            2 4 4 4 b b b 4 4 b b b 4 4 4 7 
            2 b b 4 b b b b b b b b 4 b b 7 
            2 b 9 4 b b b b b b b b 4 9 b 7 
            2 b 4 4 b b 4 4 4 4 b b 4 4 b 7 
            2 b b b b b b b b b b b b b b 7 
            f b b b b b b b b b b b b b b f 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 8) {
        speed = 2000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b b b b b b 9 b b 7 
            2 b 4 4 4 4 4 b 9 b 4 4 4 b b 7 
            2 b b b b 9 4 b b b 4 b b b b 7 
            2 9 b b b b 4 b b b 4 b b b 9 7 
            2 4 b b b b b b b b b b b b 4 7 
            2 b b b b b b b 3 b b b b b b 7 
            2 b b 9 b 4 4 4 4 4 4 b 9 b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 4 b b b b b 9 b b b b b b 4 7 
            2 b b b b b b 4 4 b b b b b b 7 
            2 b b 4 b b b b b b b b 4 b b 7 
            2 b b b b b b b b b b b b b b 7 
            f b b b b b b b b b b b b b b f 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 9) {
        speed = 2000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 b 9 b b b b 9 b b b b 9 b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 4 9 b b b b 9 b b b b 9 b 4 7 
            2 b b b b b b b b b b b b b b 7 
            2 b 9 b b b b b b b b b 9 b b 7 
            2 b 4 4 4 4 4 4 4 4 4 4 4 b b 7 
            2 b b b b b b b b b b b b b b 7 
            f b b b b b b b b b b b b b b f 
            2 4 4 b b b b b b b b b b 4 4 7 
            2 b b b b 4 b b b b 4 b b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b b 3 b b b b b b 7 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 10) {
        speed = 1000
        scene.setTileMap(img`
            1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
            2 b b b b b b b b b b b b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 9 b b b b b b b 3 b b b 9 b 7 
            2 4 b b b 4 b b b 4 b b b 4 b 7 
            2 b b 9 b b b 9 b b b 9 b b b 7 
            2 b b 4 b b b 4 b b b 4 b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 4 b b b 4 b b b 4 b b b 4 b 7 
            2 b b 9 b b b 9 b b b 9 b b b 7 
            2 b b 4 b b b 4 b b b 4 b b b 7 
            2 b b b b b b b b b b b b b b 7 
            2 4 b b b 4 b b b 4 b b b 4 b 7 
            2 b b b b b b b b b b b b b b 7 
            f b b b b b b b b b b b b b b f 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `)
    }
    if (levelnum == 11) {
        game.over(true)
    }
    spawn_player()
    spawn_jewels()
    rockanim()
    jewelanim()
    jewelnum = 0
    lvlcomplete = 0
    open = 0
}
function spawn_rock2 () {
    mysprite3 = sprites.create(img`
        . . . . . . . d d d . . . . . . 
        . . . . d d d d d d d d . . . . 
        . . d d d d d d d e d d d d . . 
        . d d d d d d d d d d d d d d . 
        . d d d e e e e d d d d d d d . 
        d d d e d d d d d d d d d d d d 
        d d d e d d d d d d e d d d d d 
        d d d d d d d d d d e e e d e d 
        d e d d d d d e d d d d e d d d 
        d d d d d d d d d d d d e d d d 
        d d d d e d d d d d d e e d d d 
        . d d d e e e e d d d e d d d . 
        . d d d d d d d d d d d d d d . 
        . . d d d d d d d d d d d d . . 
        . . . d d d d d e d d d d . . . 
        . . . . . d d d d d d . . . . . 
        `, SpriteKind.Enemy)
    mysprite3.setPosition(195, 5)
    mysprite3.ay = 200
    animation.attachAnimation(mysprite3, rockanim2)
    animation.setAction(mysprite3, ActionKind.rock)
}
scene.onHitTile(SpriteKind.Enemy, 4, function (sprite) {
    mySprite2.vx = 50
    mysprite3.vx = -50
})
function jewelanim () {
    jewelanim2 = animation.createAnimation(ActionKind.jewel, 100)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 1 1 1 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    jewelanim2.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 1 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . f 9 9 9 9 9 9 9 9 9 f . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `)
}
info.onLifeZero(function () {
    game.over(false)
})
scene.onHitTile(SpriteKind.Player, 3, function (sprite) {
    lvlcomplete = 1
})
scene.onHitTile(SpriteKind.Enemy, 15, function (sprite) {
    sprite.destroy(effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.jewel, function (sprite, otherSprite) {
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    jewelnum += 1
    otherSprite.destroy(effects.trail, 100)
    otherSprite.y += -3
})
function music2 () {
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Double))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
    mySprite2.destroy()
    mysprite3.destroy()
    otherSprite.destroy()
    mySprite.startEffect(effects.disintegrate)
    releaserock = 0
    info.changeLifeBy(-1)
    music.powerDown.play()
    pause(2000)
    spawn_player()
})
let jump = 0
let right = 0
let releaserock = 0
let open = 0
let lvlcomplete = 0
let mysprite3: Sprite = null
let mySprite: Sprite = null
let jewelanim2: animation.Animation = null
let jewel2: Sprite = null
let rockanim2: animation.Animation = null
let mySprite2: Sprite = null
let speed = 0
let jewelnum = 0
let levelnum = 0
music.setVolume(255)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccc96ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccc9996cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccc999996ccccccddddddddbcddddddddddbcddddbcccccccddddbcddddddddddbcddddbcccccccccccccdddddddddddbcdddddddddddbcddddbcddddddddddbcccddddddddddbcdddddddddddbccccc
    cc99999996cccccddddddddbcdddddddddbbcddddbcccccccddddbcddddddddddbcddddbcccccccccccccdddddddddddbcdddddddddddbcddddbcddddddddddbcccddddddddddbcdddddddddddbccccc
    cc99919996cccccddddddddbcddddddddddbcddddbcccccccddddbcddddddddddbcddddbcccccccccccccdddddddddddbcdddddddddddbcddddbcdddddddddddbbcddddddddddbcdddddddddddbccccc
    cc99919996cccccddddddddbcddddddddddbcddddbcccccccddddbcddddddddddbcddddbcccccccccccccddddbbdddddbcdddddddddddbcddddbcddddddddddddbcddddddddddbcdddddddddddbccccc
    cc99111996cccccbbbbddddbcddddbbbbbbbcddddbcccccccddddbcddddbbbbbbbcddddbcccccccccccccddddbbbddddbcddddbbbddddbcddddbcddddbbbbddddbcddddbbbbbbbcddddbbbddddbccccc
    cc99111996cccccccccddddbcddddddddddbcddddbcccccccddddbcddddddddddbcddddbcccccccccccccddddbccddddbcddddbccddddbcddddbcddddbcccddddbcddddddddddbcddddbccddddbccccc
    cc99111996cccccccccddddbcddddddddddbcddddbcddddbcddddbcddddddddddbcddddbcccccccccccccdddddddddddbcdddddddddddbcddddbcddddbcccddddbcddddddddddbcdddddddddddbccccc
    cc99111996cccccccccddddbcddddddddddbcddddbcddddbcddddbcddddddddddbcddddbcccccccccccccdddddddddddbcdddddddddddbcddddbcddddbcccddddbcdddddddddbbcdddddddddddbccccc
    cc99919996cccccccccddddbcdddddddddbbcddddddddddddddddbcdddddddbdbbcddddbcccccccccccccdddddddddddbcdddddddddddbcddddbcddddbcccddddbcdddddddbdbbcddddddddddbbccccc
    cc99919996cccccccccddddbcddddbbbbbbbcddddddddddddddddbcddddbbbbbbbcddddbcccccccccccccddddbccdddbccdddddddddddbcddddbcddddbcccddddbcddddbbbbbbbcddddbbbdddbcccccc
    cc99999996cccccccccddddbcddddccccccccddddddddddddddddbcddddccccccccddddbcccccccccccccddddbccddddbcddddbccddddbcddddbcdddbddddddddbcddddbcccccccddddbccddddbccccc
    cc6999996ccdddddddddddbbcddddddddddbcdddddddddddddddbbcddddddddddbcdddddddddddbccccccddddbccddddbcddddbccddddbcddddbcdddddddddddbbcddddddddddbcddddbccddddbccccc
    ccc69996cccddddddddddddbcddddddddddbcdddddddbcdddddddbcddddddddddbcdddddddddddbccccccddddbccddddbcddddbccdddbbcdddbbcdddddddddddbbcddddddddddbcddddbccddddbccccc
    cccc696ccccdddddddddddbbcddddddddddbcddddddbbcddddddbbcddddddddbbbcddddddddddbbccccccdddbbccdddbbbddddbccddddbcddddbcdddddddddbbbbcdddddddddbbcdddbbccddddbccccc
    ccccc6cccccddddddddbbbbbcddddbdddbbbcddddbbbbcbbbddbbbcddddddbbbbbcdddddddbdbbbccccccdbdbbccddbbbcbbbbbccddbbbbddbbbcddddddddbbbcccddddddbbdbbcddbbbccdddbbccccc
    cccccccccccbbbbbbbbbbbbbcbbbbbbbbbbbcbbbbbcccccccbbbbbcbbbbbbbbbbbcbbbbbbbbbbbbccccccbbbbbccbbbbbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbcccbbbbbbbbbbbcbbbbbccbbbbbccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccdddddddddddbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccdddddddddddddbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccddddddddddddddddbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccdddddddddddddddddddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccdddddddddddbddddddddddbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccdddddddddddbdddddddddddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccdddddddddddbdddddddddddddbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccddbbdddddbbbbddddddddddddddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccdddddddddbdddddddddddddddddddbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc96cccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccdddddddddbdddddddddbdddddddddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9996ccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccdddddddddbdddddddddbbddddddddbbccccccccccccccccccccccccccccccccccccceeeeeeccccccccccccccccccccccc999996cccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccddddddddddbdddddddddddbbbbdddddbbccccccccccccccccccccccccccccccccccceeeeeeeeccccccccccccccccccccc99999996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccddddddddddbddddddddddddbdbbddddbbccccccccccccccccccccccccccccccccccceeeeeeeeccccccccccccccccccccc99919996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccddddddddddddddddddddddddddbddddbbcccccccccccccccccccccccccccccccceeeeeeeeeeeeeecccccccccccccccccc99111996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccddddddddddddddddddddddddddbddddbbcccccccccccccccccccccccccccccccceeeeeeeeeeeeeecccccccccccccccccc99111996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccddddbdddddddddddddbddddddbbddddbbcccccccccccccccccccccccccccccc55cc4445555555cccccccccccccccccccc99111996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccdddddddddddddddddddddddddbdddddbbccccccccccccccccccccccccccccccc5555555ddddddcccccccccccccccccccc99111996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccdddddddddddddddddddddddddddddddbbcccccccccccccccccccccccccccccccc55555dddddddcccccccccccccccccccc99111996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccdddddddddddddddddddddddddddddddbbccccccccccccccccccccccccccccccc55c5dddd1dd1dcddccccccccccccccccc99111996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccdddddddddddddddddddddddddddddddbbccccccccccccccccccccccccccccdddccc5ddddfddfdcddccccccccccccccccc99111996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccddddddddbbddddddddddddbddddddddbbcccccccccccccccccccccccccccccdddcc5dddddddddce4ccccccccccccccccc99919996ccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccddddddddddbbdddddddddddddddddddbbccccccccccccccccccccccccccccc44eccdddddddfddce4ccccccccccccccccc99999996ccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccbdddddddddbbdbbddddddddddddddbbccccccccccccccccccccccccccccccc44ecdddddddddde44ccccccccccccccccc6999996cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccbddddddddddbbbdddddddddddddddbbcccccccccccccccccccccccccccccccc44eeeeeeeeeee444cccccccccccccccccc69996ccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccbdddddddddddbbdddddddddddddddbbcccccccccccccccccccccccccccccccc4444444444eee44cccccccccccccccccccc696cccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccbddddddddddddddddddbdddddddbbccccccccccccccccccccccccccccccccccc444ee4444444cccccccccccccccccccccc6ccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccbddddddddddddddddddddddddbbcccccccccccccccccccccccccccccccccccc444ee4444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccbddddddddddddddddddddddbbcccccccccccccccccccccccccccccccccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccbbddddddddddddddddddddbbbcccccccccccccccccccccccccccccccccccccc444444ee4cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccbddddddddbdddddddddbbcccccccccccccccccccccccccccccccccccccccceeeeeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccbdddddddddddddddbbbcccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccbbbddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccfeeeecceeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccffeecccceffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
    cccfdddddddddddddddddfddddddddddddddddddfdddddddddddddddddfdddddddddddddddddfddddddddddddddddddfdddddddddddddddddfddddddddddddddddddddfddddddddddddddddddfcccccc
    cccfdddeddeeddeeddeddfdeddeeedeeeddeedeefdddedeeeddeddededfdeddeeedddeedeeddfdeeeedddddddedddeefddddeedeeeddeddeefedddedeeddeddeededdefeddeedeeeddedeedddfcccccc
    cccfeeeeeeeeeeeeedeeefeeeeeeeeeeeeeeeeeefeddeeeeeeeeeeeeeefeeeeeeeeedeeeeeeefeeeeedeeeedeeeeeeefedeeeeeeeeeeeeeeefedeeeeeeeeeeeeeeedeefedeeeeeeeedeeeedeefcccccc
    cccfeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeee5eeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeee5eeeeeeeeeeeeefee5eeeeeeeeeeee5eefeeeeeeeeeeeeeeeeefee5eeeeeeeeeeeeeeeeefeeeeeeeeeeeee5eeeefcccccc
    cccfeeeeeeeeee5eeeeeefeeeeeee5eeeeee5eeefeeeeee5eeeeeeeeeefeeeeeeeeeee5eeeeefeeeeeeeeeeeeeeeeeefeeeeee5eeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeee5eeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeee5eeeeeefeee5eeeeeeeeeeeeeefcccccc
    cccfeeeeeeeeeeeeeeee5feeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeee5eeeeeeeeefeeeeeeeeeeeee5eeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeee5eeeeeeeeeeefeee5eeeeeeeeeeeeeefeee5eeeeeeeeeeeeefeeee5eeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeee5efeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeee5eeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeee5eeeeeeefcccccc
    cccfeeeeeeeeeeee5eeeefeeeeeeeeeeeeeeeeeefeeeeeee5eeeeee5eefeeeeeeeeeeee5eeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeee5eeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeeee5eeeeeeeeeefeeeee5eeeeee5eeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeee5eeeeeeeeeeeeeefee5eeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeee5eeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeee5eeeeeeeeeeeee5eefeeeee5eeeeeeeee5eefcccccc
    cccfeee5eeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeee5eeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeee5eeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeee5efeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefcccccc
    cccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
music2()
game.showLongText("Journey through 10 action packed levels collecting all the jewels in each. Press A to start", DialogLayout.Bottom)
info.setLife(3)
levelnum = 1
jewelnum = 0
speed = 7000
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
scene.setTileMap(img`
    1 5 6 5 5 5 5 5 5 5 5 5 6 5 5 1 
    2 b b b b b b b b b b b b b b 7 
    2 b b 9 b b b b b b b b 9 b 3 7 
    2 b 4 4 4 b b b b b b b 4 4 4 7 
    2 b b 4 b b b b b b b b b b b 7 
    2 b b 4 b 9 b b b 4 4 4 b b b 7 
    2 b b 4 4 4 b b b b b b b b b 7 
    2 b b b b 9 b b b b b b b b b 7 
    2 b b b b 4 4 4 b b b 9 b b b 7 
    2 b b b b b b b b b b 4 b b b 7 
    2 b b b b b b b b b b b b b 9 7 
    2 b b b 9 b b b b b b b b b b 7 
    2 b b 4 4 b b b b 4 4 4 4 b b 7 
    2 b b b b b b b b b b b b b b 7 
    f b b b b b b b b b 9 b b b b f 
    1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 
    `)
scene.setTile(4, img`
    f f f f f f f f f f f f f f f f 
    f d d d d d d d d d d d d d d f 
    f d e d e d d e e d d e d d d f 
    f e e e e d e 5 e e e e e d e f 
    f e e e e e e e e e e e e e e f 
    f 5 5 e e e e e e e e e e 5 e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e 5 e e e e e 5 e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e 5 e f 
    f e e e e e 5 e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(2, img`
    f f f f f f f f f f f f f f f f 
    f d e 5 e e e e e e e e e d d f 
    f d e e e e e e e e e e e e d f 
    f d e e e e e 5 e e e e e e d f 
    f d e e e e e e e e e e e d d f 
    f d 5 e e e e e e e e e d d d f 
    f d d e e e e e e e e e e e d f 
    f d e e e e e e e e e e e d d f 
    f d e e e e e e e e e e d d d f 
    f d e e 5 e e e e e 5 e e e d f 
    f d d e e e e e e e e e e d d f 
    f d e e e e e e e e e e e d d f 
    f d e e e e e e e e e e d d d f 
    f d e e e e 5 e e e e e e e d f 
    f d e e e e e e e e e e e d d f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(7, img`
    f f f f f f f f f f f f f f f f 
    f d d 5 e e e e e e e e e e d f 
    f d e e e e e e e e e e e e d f 
    f d d e e e e 5 e e e e e e d f 
    f d d d e e e e e e e e e e d f 
    f d d e e e e e e e e 5 e d d f 
    f d e e e e e e e e e e e e d f 
    f d d e e e e e e e e e e e d f 
    f d d e e e e e e e e e e e d f 
    f d e e 5 e e e e e 5 e e e d f 
    f d d e e e e e e e e e e e d f 
    f d d d d e e e e e e e e d d f 
    f d d d d e e e e e e e e 5 d f 
    f d d e e e 5 e e e e e e e d f 
    f d d e e e e e e e e e e e d f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(5, img`
    f f f f f f f f f f f f f f f f 
    f e e 5 e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e 5 e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e 5 e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e 5 e e e e e 5 e e e e f 
    f e e e e e e e e e e e e e e f 
    f e d e e e e e e e e e e e e f 
    f e d e e e d d e e e e d d e f 
    f e d d d d d d e d d e d d e f 
    f d d d d d d d d d d d d d d f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(1, img`
    f f f f f f f f f f f f f f f f 
    f e e 5 e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e 5 e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e 5 e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e 5 e e e e e 5 e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e 5 e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(15, img`
    f f f f f f f f f f f f f f f f 
    f d e e e e e e e e e e e e d f 
    f d e e e e e e e 5 e e e e d f 
    f d e e e e e e e e e e e d d f 
    f d e e e 5 e e e e e e e d d f 
    f d d e e e e e e e e e e e d f 
    f d e e e e e e e e e e e e d f 
    f d e e e e e e e 5 e e e d d f 
    f d 5 e e e e e e e e e e d d f 
    f d e e e e e e e e e e e e d f 
    f d e e e e e e e e e e e e d f 
    f d d e e e e e e e e e e e d f 
    f d d e e 5 e e e e e e e d d f 
    f d e e e e e e e e e e e e d f 
    f d e e e e e e e e e e e e d f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(3, img`
    . . . . f f f f f f f f . . . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . f 4 4 4 5 5 5 5 4 4 4 f . . 
    . f 4 4 4 5 5 f f 5 5 4 4 4 f . 
    f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
    f d 4 4 4 5 f f f f 5 4 4 4 d f 
    f d d 4 4 5 f f f f 5 4 4 d d f 
    f 4 d d d 5 5 f f 5 5 d d d 4 f 
    f 4 4 4 d 5 5 f f 5 5 d 4 4 4 f 
    f 4 4 4 4 5 5 f f 5 5 4 4 4 4 f 
    f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
    f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
    f 4 4 4 d 5 5 f f 5 5 d 4 4 4 f 
    f 4 4 d d 4 5 5 5 5 4 d d 4 4 f 
    f d d d 4 4 4 4 4 4 4 4 d d d f 
    f f f f f f f f f f f f f f f f 
    `, false)
scene.setTile(11, img`
    b b b b b b b b c b b b b b b b 
    b b b c b b b b b b b b b c b b 
    b b b c b b b b b b b c c c b b 
    b b b c b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b c b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b c c b b 
    b b b c b b b b b b b b b b b b 
    b b b c b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b c c b b 
    b b b b b b b b b b b b b c b b 
    b b b b b b b b b b b b b b b b 
    `, false)
scene.setTile(6, img`
    b b b b b b b b c b b b b b b b 
    b b b c b b b b b b b b b c b b 
    b b b c b b b b b b b c c c b b 
    b b b c b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b c b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b c c b b 
    b b b c b b b b b b b b b b b b 
    b b b c b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b c c b b 
    b b b b b b b b b b b b b c b b 
    b b b b b b b b b b b b b b b b 
    `, false)
scene.setTile(9, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c . . . . 
    . . . . . . . . . . . c . . . . 
    . . . c c . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c . . . . . . . . . 
    . . . . . . c . . . . . . . c . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
jewelanim()
rockanim()
spawn_jewels()
spawn_rocks()
spawn_rock2()
spawn_player()
forever(function () {
    if (mySprite.vx > 0 && mySprite.vy > 0) {
        right = 0
        mySprite.setImage(img`
            . . . . f f f f f f f f f . . . 
            . . . f e e e e e e e e e f . . 
            . f f f e e e e e e e e e f f . 
            f e e e e e e e e e e e e e e f 
            . f f 5 5 5 5 d d 5 d d 5 f f . 
            . . f 5 5 d 1 d d d d 1 d f . . 
            . f f 5 d d f d d d d f d f . . 
            f 5 f 5 d d d d d d d d d f . . 
            f 5 f 5 d d d d d d d d d f . . 
            . f f 5 d d d d d f d d f f . . 
            f 5 4 f d d d d d d d f 4 f . . 
            . f d f f f f f f f f f f d f . 
            . . f f 4 4 4 4 4 4 4 f f f . . 
            . . . f e e e f e e e f . . . . 
            . . . f f f f f e e e e f . . . 
            . . . . . . . . f f f f . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . f f f f f f f f f . . . 
            . . . f e e e e e e e e e f . . 
            . f f f e e e e e e e e e f f . 
            f e e e e e e e e e e e e e e f 
            . f f 5 5 5 5 d d 5 d d 5 f f . 
            . . f 5 5 d 1 d d d d 1 d f . . 
            . f f 5 d d f d d d d f d f . . 
            f 5 f 5 d d d d d d d d d f . . 
            f 5 f 5 d d d d d d d d d f . . 
            . f f 5 d d d d d f d d f f . . 
            f 5 4 f d d d d d d d f 4 f . . 
            f d f f f f f f f f f f d f . . 
            f f f f 4 4 4 4 4 4 4 f f f . . 
            . . . f e e e f e e e f . . . . 
            . . f e e e e f f f f f . . . . 
            . . . f f f f . . . . . . . . . 
            `)
        pause(100)
    }
    if (mySprite.vx == 0 && right == 0) {
        mySprite.setImage(img`
            . . . . f f f f f f f f f . . . 
            . . . f e e e e e e e e e f . . 
            . f f f e e e e e e e e e f f . 
            f e e e e e e e e e e e e e e f 
            . f f 5 5 5 5 d d 5 d d 5 f f . 
            . . f 5 5 d 1 d d d d 1 d f . . 
            . f f 5 d d f d d d d f d f . . 
            f 5 f 5 d d d d d d d d d f . . 
            f 5 f 5 d d d d d d d d d f . . 
            . f f 5 d d d d d f d d f f . . 
            f 5 4 f d d d d d d d f 4 . . . 
            . f d f f f f f f f f f d f . . 
            . . f f 4 4 4 4 4 4 4 f f . . . 
            . . . f e e e f e e e f . . . . 
            . . f e e e e f e e e e f . . . 
            . . . f f f f . f f f f . . . . 
            `)
    }
    if (mySprite.vx < 0) {
        right = 1
        mySprite.setImage(img`
            . . . . f f f f f f f f f . . . 
            . . . f e e e e e e e e e f . . 
            . f f f e e e e e e e e e f f . 
            f e e e e e e e e e e e e e e f 
            . f f 5 5 5 5 d d 5 d d 5 f f . 
            . . f 5 1 d d d d 1 d d d f . . 
            . . f 5 f d d d d f d d d f f . 
            . . f 5 d d d d d d d d d f 5 f 
            . . f 5 d d d d d d d d d f 5 f 
            . . f 5 d d f d d d d d f f f . 
            . f 4 f f d d d d d d f 4 f 5 f 
            . f d f f f f f f f f f f d f . 
            . . f f 4 4 4 4 4 4 4 f f f . . 
            . . . f e e e f e e e f . . . . 
            . . . f f f f f e e e e f . . . 
            . . . . . . . . f f f f . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . f f f f f f f f f . . . 
            . . . f e e e e e e e e e f . . 
            . f f f e e e e e e e e e f f . 
            f e e e e e e e e e e e e e e f 
            . f f 5 5 5 5 d d 5 d d 5 f f . 
            . . f 5 1 d d d d 1 d d d f . . 
            . . f 5 f d d d d f d d d f f . 
            . . f 5 d d d d d d d d d f 5 f 
            . . f 5 d d d d d d d d d f 5 f 
            . . f 5 d d f d d d d d f f f . 
            . f 4 f f d d d d d d f 4 f 5 f 
            f d f 4 f f f f f f f f d f f . 
            f f f f 4 4 4 4 4 4 4 f f . . . 
            . . . f e e e f e e e f . . . . 
            . . f e e e e f f f f f . . . . 
            . . . f f f f f . . . . . . . . 
            `)
        pause(100)
    }
    if (mySprite.vx == 0 && right == 1) {
        mySprite.setImage(img`
            . . . . f f f f f f f f f . . . 
            . . . f e e e e e e e e e f . . 
            . f f f e e e e e e e e e f f . 
            f e e e e e e e e e e e e e e f 
            . f f 5 5 5 5 d d 5 d d 5 f f . 
            . . f 5 1 d d d d 1 d d d f . . 
            . . f 5 f d d d d f d d d f f . 
            . . f 5 d d d d d d d d d f 5 f 
            . . f 5 d d d d d d d d d f 5 f 
            . . f 5 d d f d d d d d f f f . 
            . f 4 f f d d d d d d f 4 f 5 f 
            . f d f f f f f f f f f d f f . 
            . . f f 4 4 4 4 4 4 4 f f f . . 
            . . . f e e e f e e e f . . . . 
            . . f e e e e f e e e e f . . . 
            . . . f f f f f f f f f . . . . 
            `)
    }
})
forever(function () {
    if (jump == 0) {
        mySprite.ay = 350
    } else {
        mySprite.vy = -200
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            jump = 0
            mySprite.vy = 100
        }
    }
})
forever(function () {
    if (mySprite2.x < 5 || mySprite2.x > 247) {
        mySprite2.destroy()
    }
    if (mysprite3.x < 10 || mysprite3.x > 247) {
        mysprite3.destroy()
    }
})
forever(function () {
    if (open == 1) {
        music.magicWand.play()
        pause(20000)
    }
})
forever(function () {
    if (lvlcomplete == 0) {
        if (jewelnum == 8) {
            open = 1
        }
        if (open == 1) {
            scene.setTile(3, img`
                . . . . f f f f f f f f . . . . 
                . . . f f f f f f f f f f . . . 
                . . f 4 f f f f f f f f 4 f . . 
                . f 4 4 f f f f f f f f 4 4 f . 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f 4 4 4 f f f f f f f f 4 4 4 f 
                f f f f f f f f f f f f f f f f 
                `, true)
        } else {
            scene.setTile(3, img`
                . . . . f f f f f f f f . . . . 
                . . . f 4 4 4 4 4 4 4 4 f . . . 
                . . f 4 4 4 5 5 5 5 4 4 4 f . . 
                . f 4 4 4 5 5 f f 5 5 4 4 4 f . 
                f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
                f d 4 4 4 5 f f f f 5 4 4 4 d f 
                f d d 4 4 5 f f f f 5 4 4 d d f 
                f 4 d d d 5 5 f f 5 5 d d d 4 f 
                f 4 4 4 d 5 5 f f 5 5 d 4 4 4 f 
                f 4 4 4 4 5 5 f f 5 5 4 4 4 4 f 
                f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
                f 4 4 4 4 5 f f f f 5 4 4 4 4 f 
                f 4 4 4 d 5 5 f f 5 5 d 4 4 4 f 
                f 4 4 d d 4 5 5 5 5 4 d d 4 4 f 
                f d d d 4 4 4 4 4 4 4 4 d d d f 
                f f f f f f f f f f f f f f f f 
                `, false)
        }
    } else {
        music.powerUp.play()
        effects.confetti.startScreenEffect()
        mySprite.destroy()
        mySprite2.destroy()
        mysprite3.destroy()
        scene.setTile(3, img`
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f 4 f f e e e e f f 4 f . . 
            . f 4 4 f e e e e e e f 4 4 f . 
            f 4 4 4 e e e e e e e e 4 4 4 f 
            f 4 4 4 f 5 5 5 5 5 5 f 4 4 4 f 
            f 4 4 4 f 5 5 5 5 5 5 f 4 4 4 f 
            f 4 4 4 f 5 5 5 5 5 5 f 4 4 4 f 
            f 4 4 4 f f f 5 5 f f f 4 4 4 f 
            f 4 4 4 f f 5 4 4 5 f f 4 4 4 f 
            f 4 4 4 f 4 4 4 4 4 4 f 4 4 4 f 
            f 4 4 4 d 4 4 4 4 4 4 d 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f e e f f e e f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f f f f f f f f f f f f f f f f 
            `, true)
        pause(1000)
        scene.setTile(3, img`
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f 4 f f f f f f f f 4 f . . 
            . f 4 4 f f f f f f f f 4 4 f . 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f 4 4 4 f f f f f f f f 4 4 4 f 
            f f f f f f f f f f f f f f f f 
            `, true)
        pause(1000)
        scene.setTile(3, img`
            . . . . f f f f f f f f . . . . 
            . . . f f 4 4 4 4 4 4 f f . . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 5 4 4 5 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f f f f f f f f f f f f f f f f 
            `, true)
        pause(2000)
        new_level()
    }
})
forever(function () {
    if (releaserock == 2) {
        pause(2000)
        spawn_rock2()
        releaserock = 0
    }
})
forever(function () {
    if (releaserock == 1) {
        spawn_rocks()
        releaserock = 2
    }
})
forever(function () {
    if (controller.A.isPressed() && jump == 0 && mySprite.isHittingTile(CollisionDirection.Bottom)) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        music.playTone(587, music.beat(BeatFraction.Sixteenth))
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        jump = 1
        pause(200)
        jump = 0
    }
})
forever(function () {
    if (mySprite.vy < 10 && right == 1) {
        mySprite.setImage(img`
            . . . . f f f f f f f f f . . . 
            . . . f e e e e e e e e e f . . 
            . f f f e e e e e e e e e f f . 
            f e e e e e e e e e e e e e e f 
            . f f 5 5 5 5 d d 5 d d 5 f f . 
            . . f 5 1 d d d d 1 d d d f . . 
            . . f 5 f d d d d f d d d f f . 
            . . f 5 d d d d d d d d d f 5 f 
            . . f 5 d d d d d d d d d f 5 f 
            . f f 5 d d f d d d d d f f f . 
            f d 4 f f d d d d d d f 4 d 5 f 
            . f f f f f f f f f f f f f f . 
            . . . f 4 4 4 4 4 4 4 f . . . . 
            . . . f e e e f e e e f . . . . 
            . . . f f e e f f e e f . . . . 
            . . . . f f f f f f f f . . . . 
            `)
    }
    if (mySprite.vy < 10 && right == 0) {
        mySprite.setImage(img`
            . . . . f f f f f f f f f . . . 
            . . . f e e e e e e e e e f . . 
            . f f f e e e e e e e e e f f . 
            f e e e e e e e e e e e e e e f 
            . f f 5 5 5 5 d d 5 d d 5 f f . 
            . . f 5 5 d 1 d d d d 1 d f . . 
            . f f 5 d d f d d d d f d f . . 
            f 5 f 5 d d d d d d d d d f . . 
            f 5 f 5 d d d d d d d d d f . . 
            . f f 5 d d d d d f d d f f . . 
            f d 4 f d d d d d d d f 4 d . . 
            . f f f f f f f f f f f f f . . 
            . . . f 4 4 4 4 4 4 4 f . . . . 
            . . . f e e e f e e e f . . . . 
            . . . f e e f f e e f . . . . . 
            . . . f f f . f f f . . . . . . 
            `)
    }
})
forever(function () {
    if (releaserock == 0) {
        pause(speed)
        releaserock = 1
    }
})
