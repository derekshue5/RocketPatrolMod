// Rocket prefab

class Rocket2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add object to existing
        scene.add.existing(this);

        //track rocket's firing stats
        this.isFiring = false;

        //rocket sfx
        this.sfxRocket = scene.sound.add('sfx_rocket');

    }

    update(){
        //left right movement
        if(!this.isFiring){
            if(keyA.isDown && this.x >= 47) {
                this.x -= 2;
            }
            else if (keyD.isDown && this.x <= 598){
                this.x += 2;
            }
        }
        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired, move up
        if(this.isFiring && this.y >= 108){
            this.y -= 2;
        }

        //reset on miss
        if(this.y <= 108){
            this.reset();
        }
    }

    //reset rocket to ground
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}