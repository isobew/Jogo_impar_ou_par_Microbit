input.onButtonPressed(Button.A, function () {
    impar_ou_par = impar_ou_par + 1
    if (impar_ou_par == 2) {
        impar_ou_par = 0
    }
    if (impar_ou_par == 0) {
        soundExpression.giggle.play()
        images.createImage(`
            # # # # #
            # . . . #
            # # # # #
            # . . . .
            # . . . .
            `).showImage(0)
    }
    if (impar_ou_par == 1) {
        soundExpression.giggle.play()
        images.createImage(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `).showImage(0)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(500)
    escolhamaquina = randint(1, 4)
    if (escolhamaquina == 1) {
        basic.showNumber(1)
    }
    if (escolhamaquina == 2) {
        basic.showNumber(2)
    }
    if (escolhamaquina == 3) {
        basic.showNumber(3)
    }
    if (escolhamaquina == 4) {
        basic.showNumber(4)
    }
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(500)
    if (impar_ou_par == 1 && escolhahumano + escolhamaquina == 3) {
        soundExpression.happy.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (impar_ou_par == 1 && escolhahumano + escolhamaquina == 5) {
        soundExpression.happy.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (impar_ou_par == 1 && escolhahumano + escolhamaquina == 7) {
        soundExpression.happy.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    }
    if (impar_ou_par == 0 && escolhahumano + escolhamaquina == 3) {
        soundExpression.sad.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    } else if (impar_ou_par == 0 && escolhahumano + escolhamaquina == 5) {
        soundExpression.sad.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    } else if (impar_ou_par == 0 && escolhahumano + escolhamaquina == 7) {
        soundExpression.sad.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    }
    if (impar_ou_par == 0 && escolhahumano + escolhamaquina == 2) {
        soundExpression.happy.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (impar_ou_par == 0 && escolhahumano + escolhamaquina == 4) {
        soundExpression.happy.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (impar_ou_par == 0 && escolhahumano + escolhamaquina == 6) {
        soundExpression.happy.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (impar_ou_par == 0 && escolhahumano + escolhamaquina == 8) {
        soundExpression.happy.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    }
    if (impar_ou_par == 1 && escolhahumano + escolhamaquina == 2) {
        soundExpression.sad.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    } else if (impar_ou_par == 1 && escolhahumano + escolhamaquina == 4) {
        soundExpression.sad.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    } else if (impar_ou_par == 1 && escolhahumano + escolhamaquina == 6) {
        soundExpression.sad.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    } else if (impar_ou_par == 1 && escolhahumano + escolhamaquina == 8) {
        soundExpression.sad.play()
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    }
})
input.onButtonPressed(Button.B, function () {
    escolhahumano = escolhahumano + 1
    if (escolhahumano == 5) {
        escolhahumano = 1
    }
    if (escolhahumano == 1) {
        soundExpression.giggle.play()
        basic.showNumber(1)
    }
    if (escolhahumano == 2) {
        soundExpression.giggle.play()
        basic.showNumber(2)
    }
    if (escolhahumano == 3) {
        soundExpression.giggle.play()
        basic.showNumber(3)
    }
    if (escolhahumano == 4) {
        soundExpression.giggle.play()
        basic.showNumber(4)
    }
})
let escolhamaquina = 0
let impar_ou_par = 0
let escolhahumano = 0
soundExpression.hello.play()
basic.showString("Hello!")
escolhahumano = 0
impar_ou_par = 0
