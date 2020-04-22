// Spaceship prefab

class Spaceship2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);

        //add object to existing, displayList, updateList
        scene.add.existing(this);
        this.points = pointValue;

    }

    update(){
        //move ship left
        this.x -= game.settings.spaceshipSpeed + 5;
        //wraparound screen bounds
        if (this.x <= 0 - this.width){
            this.x = game.config.width;
        }
        
    }

    reset() {
        this.x = game.config.width;
    }
}