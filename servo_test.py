import RPi.GPIO as GPIO
import time

def servoMotor(pin, degree, t):
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(pin, GPIO.OUT)
	pwm = GPIO.PWM(pin, 50)

	pwm.start(3)

	pwm.ChangeDutyCycle(degree)
	time.sleep(t)

	pwm.stop()
	GPIO.cleanup(pin)


while(True):
	a = float(input())
	if(a == -1):
		break
	servoMotor(4, a, 2)

