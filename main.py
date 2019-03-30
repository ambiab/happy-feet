import os

from flask import Flask, render_template, make_response
from flask import redirect, request, jsonify, url_for
from project.utils.client_requests import get_code_address, get_photo_url
from project.models.mountains_data import Mountains
from gevent import monkey
monkey.patch_all()
from gevent.pywsgi import WSGIServer
from project import create_app
from project.settings import GEOCODING_API_KEY  

import project.utils.data_config as data_config

app = create_app('flask.cfg')

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
@app.route('/getall', methods = ['GET'])
def get_all():
      try:
            mountains=Mountains.query.all()
            return jsonify([e.serialize() for e in mountains])
      except Exception as e:
            return(str(e))

@app.route('/getallIdsAndNames', methods = ['GET'])
def get_name():
      try: 
            mountain_ids_names = Mountains.query.with_entities(Mountains.id, Mountains.name).all()
            res = data_config.get_photo_urls(mountain_ids_names)
            return jsonify(res)
            
      except Exception as e:
            return(str(e))
      
server = WSGIServer(('127.0.0.1', 5001), app)
server.serve_forever()
