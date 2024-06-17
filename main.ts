input.onButtonPressed(Button.A, function () {
    dist = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8)
    while (dist != 0 && dist > 40) {
        wuKong.setAllMotor(70, 70)
        basic.pause(500)
        dist = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8)
    }
    wuKong.stopAllMotor()
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 240)
    wuKong.setAllMotor(70, 70)
    basic.pause(2700)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
    dist = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8)
    while (dist != 0 && dist > 40) {
        wuKong.setAllMotor(70, 70)
        basic.pause(500)
        dist = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P8)
    }
    wuKong.stopAllMotor()
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 120)
    wuKong.setAllMotor(70, 70)
    basic.pause(1800)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 120)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 240)
})
let dist = 0
basic.showIcon(IconNames.Heart)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
basic.pause(500)
basic.forever(function () {
	
})
