import Multiwii

from flask import *
from flask_socketio import SocketIO


app = Flask(__name__)
socketio = SocketIO(app)
board = Multiwii.Multiwii("/dev/ttyAMA0")


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/pid.html')
def pid():
    return render_template('pid.html')


@app.route('/index.html')
def index1():
    return render_template('index.html')


@app.route('/control.html')
def control():
    return render_template('control.html')


@app.route('/camera.html')
def camera():
    return render_template('camera.html')


@app.route('/calibrate.html')
def calibrate():
	board.recieveIMU()
    return render_template('calibrate.html')


def imu_readings_change(accx, accy, accz, gyrx, gyry, gyrz):
    # Broadcast an IMU change event.

    socketio.emit('imu_readings_change', { 'accx': accx, 'accy': accy, 'accz': accz, 'gyrx': gyrx, 'gyry': gyry, 'gyrz': gyrz })

if __name__ == '__main__':
    pi_thing.on_imu_readings_change(imu_readings_change)
    # Run the flask development web server with SocketIO.
    socketio.run(app, host='0.0.0.0', debug=True)
