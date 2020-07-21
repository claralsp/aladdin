import Jogador from "./jogador.js";

export default class CenaJogo extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaJogo'
        });
    }

    preload() {

    }

    create() {
        // const larguraJogo = this.sys.canvas.width;
        // const alturaJogo = this.sys.canvas.height;
        // this.add.image(larguraJogo/2, alturaJogo/2, 'forest');
        const imagemFundo = this.add.image(0, 0, 'forest');
        imagemFundo.setOrigin(0, 0);

        const plataformas = this.physics.add.staticGroup();
        plataformas.create(468, 260, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(600 - 600, 640 - 5 - 34 - 34, 'platform').setOrigin(0, 0).refreshBody();
        plataformas.create(610 - 50, 640 - 50 - 34 - 34, 'platform1').setOrigin(0, 0).refreshBody();
        plataformas.create(620 - 5, 640 - 128 - 34, 'platform').setOrigin(0, 0).refreshBody();
        plataformas.create(1210 - 50, 620 - 110 - 34 - 34, 'platform1').setOrigin(0, 0).refreshBody();
        plataformas.create(1270 - 50, 620 - 140 - 34 - 34, 'platform1').setOrigin(0, 0).refreshBody();
        plataformas.create(1270 - 620, 515 - 126 - 20, 'platform').setOrigin(0, 0).refreshBody();
        plataformas.create(1270 - 1140, 555 - 176 - 44, 'platform').setOrigin(0, 0).refreshBody();
        plataformas.create(610 - 200, 640 - 262 - 34 - 34, 'tesouro').setOrigin(0, 0).refreshBody();
        plataformas.create(610 - 50, 640 - 410 - 34 - 34, 'lampada').setOrigin(0, 0).refreshBody();

        
        

        this.jogador = new Jogador(this);
        this.physics.add.collider(this.jogador.sprite, plataformas);

        this.teclas = this.input.keyboard.createCursorKeys();
    }

    update() {
        // cria um atalho pra evitar ficar digitando "this.jogador.sprite"
        const jogador = this.jogador.sprite;

        // setas da esquerda, direita (ou sem movimento)
        if (this.teclas.left.isDown) {
            jogador.setVelocityX(-160);
            jogador.setFlip(true, false)
            jogador.anims.play('esquerda', true);
        }
        else if (this.teclas.right.isDown) {
            jogador.setVelocityX(160);
            jogador.setFlip(false, false)
            jogador.anims.play('direita', true);
        } else {
            // nem esquerda, nem direita - parado ou pulando
            jogador.setVelocityX(0);
            if (jogador.body.touching.down) {
                jogador.anims.play('atoa');
            }
        }

        // seta para cima fazendo pular, mas só se estiver no chão
        if (this.teclas.up.isDown && jogador.body.touching.down) {
            jogador.setVelocityY(-100);
            jogador.anims.play('pulando')
        }
    }
}