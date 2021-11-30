controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d 3 d f d d e . b f b 
        f d d d d d d d d f 9 f d f 
        f b d d 9 d 9 9 9 9 9 f d f 
        . f 9 9 9 9 9 9 9 9 9 f d f 
        . f 9 9 9 9 9 d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d d f d 3 d f d e 
        f d f 9 f d d d d d d d d f 
        f d f 9 9 9 9 9 d 9 d d b f 
        f d f 9 9 9 9 9 9 9 9 9 f . 
        f b d b b d d 9 9 9 9 9 f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles8, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundEast)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d 3 d f d d e . b f b 
    f d d d d d d d d f 9 f d f 
    f b d d 9 d 9 9 9 9 9 f d f 
    . f 9 9 9 9 9 9 9 9 9 f d f 
    . f 9 9 9 9 9 d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath6)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
