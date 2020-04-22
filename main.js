//DEREK SHUE
//CMPM 120
//dshue@ucsc.edu

//POINTS : 25 PTS - Create new art for the explosion, spaceship and rocket assets
//25 PTS - Create a smaller, faster spaceship worth more points.
//50 PTS - Create a simultaneous 2-player mode.


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene:[ Menu, Play],
};


let game = new Phaser.Game(config);

//define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000
}

let keyF, keyRIGHT, keyLEFT, keyD, keyA, keyK;
