var BootState = {
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    
    create: function() {
        this.game.stage.backgroundColor = '#fff';
        this.state.start('Preload');
    }
}