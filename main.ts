input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 0)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 1)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 2)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 3)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 4)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
