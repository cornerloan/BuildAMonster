class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        //legs
        my.sprite.rightLeg = this.add.sprite(this.bodyX+100, this.bodyY+100, "monsterParts", "leg_yellowC.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX-100, this.bodyY+100, "monsterParts", "leg_greenD.png");
        my.sprite.leftLeg.flipX = true;

        //arms
        my.sprite.rightArm = this.add.sprite(this.bodyX+90, this.bodyY, "monsterParts", "arm_redA.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX-100, this.bodyY, "monsterParts", "arm_blueC.png");
        my.sprite.leftArm.flipX = true;
        
        //eye
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-10, "monsterParts", "eye_human_blue.png");

        //mouth
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouthF.png");
        my.sprite.fangs.visible = false;

        //accessories
        my.sprite.horn = this.add.sprite(this.bodyX+40, this.bodyY-75, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.antenna = this.add.sprite(this.bodyX-40, this.bodyY-95, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.antenna.flipX = true;


        this.input.keyboard.on("keydown", function (event) {
            if(event.code == "KeyS"){
                my.sprite.smile.visible = true;
                my.sprite.fangs.visible = false;
            }
            else if(event.code == "KeyF"){
                my.sprite.fangs.visible = true;
                my.sprite.smile.visible = false;
            }
            if(event.code == "KeyA"){
                my.sprite.body.x -= 5;
                my.sprite.rightLeg.x -= 5;
                my.sprite.leftLeg.x -= 5;
                my.sprite.rightArm.x -= 5;
                my.sprite.leftArm.x -= 5;
                my.sprite.eye.x -= 5;
                my.sprite.smile.x -= 5;
                my.sprite.fangs.x -= 5;
                my.sprite.horn.x -= 5;
                my.sprite.antenna.x -= 5;
            }
            else if(event.code == "KeyD"){
                my.sprite.body.x += 5;
                my.sprite.rightLeg.x += 5;
                my.sprite.leftLeg.x += 5;
                my.sprite.rightArm.x += 5;
                my.sprite.leftArm.x += 5;
                my.sprite.eye.x += 5;
                my.sprite.smile.x += 5;
                my.sprite.fangs.x += 5;
                my.sprite.horn.x += 5;
                my.sprite.antenna.x += 5;
            }
        });
    }


    update() {
        let my = this.my;    // create an alias to this.my for readability

        
       
    }

}