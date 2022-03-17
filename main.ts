function Nybble_to_string (nybble: number) {
    if (nybble < 1) {
        return "0"
    } else if (nybble < 2) {
        return "1"
    } else if (nybble < 3) {
        return "2"
    } else if (nybble < 4) {
        return "3"
    } else if (nybble < 5) {
        return "4"
    } else if (nybble < 6) {
        return "5"
    } else if (nybble < 7) {
        return "6"
    } else if (nybble < 8) {
        return "7"
    } else if (nybble < 9) {
        return "8"
    } else if (nybble < 10) {
        return "9"
    } else if (nybble < 11) {
        return "A"
    } else if (nybble < 12) {
        return "B"
    } else if (nybble < 13) {
        return "C"
    } else if (nybble < 14) {
        return "D"
    } else if (nybble < 15) {
        return "E"
    }
    return "F"
}
function Joystick_axis_value_to_string (axis_value: number) {
    return "" + Nybble_to_string(Math.idiv(axis_value, 256) % 16) + Nybble_to_string(Math.idiv(axis_value, 16) % 16) + ("" + Nybble_to_string(Math.idiv(axis_value, 1) % 16))
}
function Joystick_string () {
    return Joystick_axis_value_to_string(joystickbit.getRockerValue(joystickbit.rockerType.X)) + Joystick_axis_value_to_string(joystickbit.getRockerValue(joystickbit.rockerType.Y))
}
function Buttons_string () {
    return Nybble_to_string(Booleans_to_nybble(false, input.logoIsPressed(), input.buttonIsPressed(Button.A), input.buttonIsPressed(Button.B))) + Nybble_to_string(Booleans_to_nybble(joystickbit.getButton(joystickbit.JoystickBitPin.P12), joystickbit.getButton(joystickbit.JoystickBitPin.P13), joystickbit.getButton(joystickbit.JoystickBitPin.P14), joystickbit.getButton(joystickbit.JoystickBitPin.P15)))
}
function Booleans_to_nybble (bit3: boolean, bit2: boolean, bit1: boolean, bit0: boolean) {
    nybble = 0
    if (bit3) {
        nybble += 8
    }
    if (bit2) {
        nybble += 4
    }
    if (bit1) {
        nybble += 2
    }
    if (bit0) {
        nybble += 1
    }
    return nybble
}
let nybble = 0
radio.setGroup(1)
while (true) {
    radio.sendString("" + (Joystick_string() + Buttons_string()))
    control.waitMicros(50000)
}
