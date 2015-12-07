var PreloadState = {
    preload: function() {
        this.load.image('background', 'images/background.png');
    },
    
    create: function() {
        this.state.start('HomeState');
    }
}