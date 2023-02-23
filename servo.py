from gpiozero import AngularServo
from gpiozero import Servo
from time import sleep
import datetime
import RPi.GPIO as GPIO


# from gpiozero.pins.pigpio import PiGPIOFactory
# my_factory = PiGPIOFactory()

#with open('/var/www/flask/files/klokkeslett.txt','a') as file:
#    file.write(str(datetime.datetime.now())+'\n')

def setup_servo(pin_num):
    # Set up the GPIO pins
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pin_num, GPIO.OUT)

    # Create a PWM instance
    pwm = GPIO.PWM(pin_num, 50)
    pwm.start(0)
    return pwm

def move_servo(angle,pwm):
  duty = angle / 18 + 2
  pwm.ChangeDutyCycle(duty)

#servo = AngularServo(18, min_pulse_width=0.0008, max_pulse_width=0.0028,pin_factory = my_factory)


#servo.angle = 80 #down
#sleep(3)
#servo.angle = -20 #up 
#sleep(1)

def off_servo_running_easy():
    pwm = setup_servo(27)
    move_servo(5,pwm)
    sleep(1.2)
    move_servo(45,pwm)
    sleep(1)
    # Clean up the GPIO pins
    pwm.stop()
    GPIO.cleanup()
def servo_running_easy():
    pwm = setup_servo(17)
    move_servo(30,pwm)
    sleep(1.2)
    move_servo(0,pwm)
    sleep(1)
    print('ferdig servo')
    # Clean up the GPIO pins
    pwm.stop()
    GPIO.cleanup()
def servo_running():
    with open('/var/www/piapp/files/tider.txt','r') as file:
        timer, minutter = map(int,file.read().split())
        date = datetime.datetime.now()
        if date.hour != timer or date.minute!=minutter:
            exit(0)
            return
    with open('/var/www/piapp/files/on.txt','r') as file:
        text = file.read()
        print(text)
        if text == 'off':
            exit(0)
            return
    pwm = setup_servo(17)
    move_servo(30,pwm)
    sleep(1)
    move_servo(0,pwm)
    sleep(1)
    print('ferdig servo')
    # Clean up the GPIO pins
    pwm.stop()
    GPIO.cleanup()

if __name__ == "__main__":
    servo_running()
    
