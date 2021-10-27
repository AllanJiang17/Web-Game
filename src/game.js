var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-container",
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('dog', 'assets/2 Dog 2/')
}

function create ()
{
    const {width, height} = this.sys.game.config;
    const bg = this.add.tileSprite(0,0, width, height, "background");
    bg.setOrigin(0,0);

   
}

function update ()
{
}
