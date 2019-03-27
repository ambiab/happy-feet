import os

from flask import Flask, render_template, make_response
from flask import redirect, request, jsonify, url_for
from server.client_requests import get_code_address

from gevent import monkey
monkey.patch_all()
from flask import Flask
from gevent.pywsgi import WSGIServer

from flask_sqlalchemy import SQLAlchemy

app = Flask("MyApp")

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

GEOCODING_API_KEY = 'AIzaSyDu0t9vgP1OFQ90wJck2BQtGoMZIKVE4d0'

@app.route("/")
def rendering_main_page():
   return render_template("main-page.html")

@app.route('/postcurrentlocation', methods = ['POST'])
def post_current_position():
    current_position = request.form['currentPosition']
    print 'current'
    print current_position
    return jsonify(current_position)

@app.route('/postaddress', methods = ['POST'])
def post_search_address():
   address = request.form['address']
   result = get_code_address(GEOCODING_API_KEY, address)
   print address
   print str(result)
   return str(result)

   # return render_template("main-page.html", result=str(result[0])) 

# app.run(debug=True)
server = WSGIServer(('127.0.0.1', 5000), app)
server.serve_forever()
