from flask import Flask, render_template, url_for, request
import time
import math
from flask_sqlalchemy import SQLAlchemy
from servo import servo_running_easy
from servo import off_servo_running_easy




app = Flask(__name__)

print(22)

@app.route('/a/', methods=['POST'])
def change_txt():
    timer = request.form.get('timer_')
    minutter = request.form.get('minutter_')
    with open('/var/www/flask/files/tider.txt','w') as file:
        file.write(str(timer)+'\n')
        file.write(str(minutter))
    print('endret tid')
    return 'ok123'
@app.route('/on/', methods=['POST'])
def onOff():
    insert_text = request.form.get('sendt_')
    with open('/var/www/flask/files/on.txt','w') as file:
        file.write(insert_text)
    return 'ok'
@app.route('/off/', methods=['POST'])
def Off():
    off_servo_running_easy()
    return 'ok'
@app.route('/ab/', methods=['POST'])
def running_servo():
    servo_running_easy()
    return 'ye boy'
@app.route('/', methods=['POST','GET'])
def index():
    f =  open('/var/www/flask/files/tider.txt','r')
    TIMER, MINUTTER = f.read().split()
    with open('/var/www/flask/files/on.txt','r') as file:
        ON = file.read()
    if request.method == 'POST':
        return 'nei'
    else:
        return render_template('index.html',format_on = ON, format_timer = TIMER, format_minutter = MINUTTER)
if __name__ == "__main__":
    app.run(host="10.0.0.9",port=5000,debug=False)    
    print('FERDI ')

