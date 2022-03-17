def Nybble_to_string(nybble: number):
    if nybble < 1:
        return "0"
    elif nybble < 2:
        return "1"
    elif nybble < 3:
        return "2"
    elif nybble < 4:
        return "3"
    elif nybble < 5:
        return "4"
    elif nybble < 6:
        return "5"
    elif nybble < 7:
        return "6"
    elif nybble < 8:
        return "7"
    elif nybble < 9:
        return "8"
    elif nybble < 10:
        return "9"
    elif nybble < 11:
        return "A"
    elif nybble < 12:
        return "B"
    elif nybble < 13:
        return "C"
    elif nybble < 14:
        return "D"
    elif nybble < 15:
        return "E"
    return "F"
def Joystick_axis_value_to_string(axis_value: number):
    return "" + str(Nybble_to_string(Math.idiv(axis_value, 256) % 16)) + str(Nybble_to_string(Math.idiv(axis_value, 16) % 16)) + ("" + str(Nybble_to_string(Math.idiv(axis_value, 1) % 16)))
def Joystick_string():
    return Joystick_axis_value_to_string(joystickbit.get_rocker_value(joystickbit.rockerType.X)) + Joystick_axis_value_to_string(joystickbit.get_rocker_value(joystickbit.rockerType.Y))
def Buttons_string():
    return Nybble_to_string(Booleans_to_nybble(False,
            input.logo_is_pressed(),
            input.button_is_pressed(Button.A),
            input.button_is_pressed(Button.B))) + Nybble_to_string(Booleans_to_nybble(joystickbit.get_button(joystickbit.JoystickBitPin.P12),
            joystickbit.get_button(joystickbit.JoystickBitPin.P13),
            joystickbit.get_button(joystickbit.JoystickBitPin.P14),
            joystickbit.get_button(joystickbit.JoystickBitPin.P15)))
def Booleans_to_nybble(bit3: bool, bit2: bool, bit1: bool, bit0: bool):
    global nybble2
    nybble2 = 0
    if bit3:
        nybble2 += 8
    if bit2:
        nybble2 += 4
    if bit1:
        nybble2 += 2
    if bit0:
        nybble2 += 1
    return nybble2
nybble2 = 0
radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)
