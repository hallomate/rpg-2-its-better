scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(11, 6), sprites.dungeon.doorOpenEast)
    tiles.setWallAt(tiles.getTileLocation(11, 6), false)
    tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`myTile8`)
    music.playMelody("C5 G B G A G C5 - ", 250)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    CurrentLevel += 1
    ChangeLevel(CurrentLevel)
    scene.cameraShake(2, 500)
})
function ChangeLevel (Levelnum: number) {
    if (Levelnum == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (Levelnum == 1) {
        tiles.setTilemap(tilemap`level4`)
    } else if (Levelnum == 2) {
        tiles.setTilemap(tilemap`level6`)
    } else if (Levelnum == 3) {
        tiles.setTilemap(tilemap`level8`)
    } else if (Levelnum == 4) {
        tiles.setTilemap(tilemap`level9`)
    } else if (Levelnum == 5) {
        tiles.setTilemap(tilemap`level10`)
    } else {
        tiles.setTilemap(tilemap`level7`)
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDark1)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(12, 4), sprites.dungeon.doorOpenEast)
    tiles.setWallAt(tiles.getTileLocation(12, 4), false)
    tiles.setTileAt(tiles.getTileLocation(10, 7), assets.tile`myTile6`)
    music.playMelody("C5 G B G A G C5 - ", 250)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(8, 8), sprites.dungeon.doorOpenEast)
    tiles.setWallAt(tiles.getTileLocation(8, 8), false)
    music.playMelody("C5 G B G A G C5 - ", 250)
})
let CurrentLevel = 0
let mySprite: Sprite = null
info.setLife(4)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f . . . . . 
    . . . f f e e e e e e f f . . . 
    . . . f e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e b f e 4 f b e e f . . 
    . f f e e 1 f d d f 1 4 e f . . 
    f d f f e 6 d d d d f f f f . . 
    f b f 6 f 7 7 7 7 f d 6 6 f . . 
    f b f 9 f 7 7 7 7 f d d f . . . 
    f c f . f 6 6 9 9 f e f . . . . 
    . f f . f f f f f f f . . . . . 
    . . . . f f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 60, 60)
CurrentLevel = 0
ChangeLevel(0)
scene.cameraFollowSprite(mySprite)
