export default class CenaCarregamento extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaCarregamento'
        });
    }

    preload() {
        const larguraJogo = this.sys.canvas.width;
        const barraDeProgresso = this.add.graphics();

        // registra evento de progresso para atualizar a barra de progresso
        const larguraBarra = 0.8 * larguraJogo;
        this.load.on('progress', (value) => {
            barraDeProgresso.clear();
            // barra branca preenchida
            barraDeProgresso.fillStyle(0xffffff, 1);
            barraDeProgresso.fillRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra * value, 20);
            // contorno amarelo
            barraDeProgresso.lineStyle(4, 0xffff00, 1);
            barraDeProgresso.strokeRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra, 20);
        });

        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        });

        // todos os recursos que devem ser pré-carregados
        this.load.image('forest', 'images/forest.jpg');
        this.load.image('chao', 'images/chao.png');
        this.load.image('platform', 'images/platform.png');
        this.load.image('platform1', 'images/platform1.png');
        this.load.image('platform', 'images/platform.png');
        this.load.image('fv', 'images/fv.png');
        this.load.image('tesouro', 'images/treasure-chests.png');
        this.load.image('lampada', 'images/lampada.png');
        this.load.image('genio', 'images/genio.png');
        this.load.spritesheet('slime', 'images/slime-vermelha.png', { frameWidth: 55, frameHeight: 62 });
    }

    create() {

    }

    update() {

    }
}