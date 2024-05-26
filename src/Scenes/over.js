class over extends Phaser.Scene {
    constructor() {
        super("gameover");

    
        this.my = {sprite: {}, text: {}}; 

        
    }

    create() {
        let my = this.my;
        
        // Create key objects
        this.restart = this.input.keyboard.addKey("R");
        this.myScore = 0;
        

        



        // update HTML description
        document.getElementById('description').innerHTML = 'Thank you for playing! Left click to restart.'
        my.text.ending = this.add.text(750, 450, "Thank you for playing! ", {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5); // Center the text
  
        
        

    

    }

    update() {
        let my = this.my;
        this.input.once('pointerdown', () => {
            this.scene.start('platformerScene'); 
        });

        
    }

}