//initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('BootState', BootState);
game.state.add('HomeState', GameState);
game.state.add('GameState', HomeState);
game.state.add('PreloadState', PreloadState);
game.state.start('GameState');