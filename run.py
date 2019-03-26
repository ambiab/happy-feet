from flask import Flask, render_template, make_response
from flask import redirect, request, jsonify, url_for
from server.client_requests import get_code_address
import asyncio
from quart import Quart

app = Flask("MyApp")

GEOCODING_API_KEY = 'AIzaSyDu0t9vgP1OFQ90wJck2BQtGoMZIKVE4d0'

@app.route("/")
def rendering_main_page():
   return render_template("main-page.html")

@app.route('/postcurrentlocation', methods = ['POST'])
def post_current_position():
    current_position = request.form['currentPosition']
    print current_position
    return jsonify(current_position)

@app.route('/postaddress', methods = ['POST', 'GET'])
async def post_search_address():
   address = request.form['address']

   result = get_code_address(GEOCODING_API_KEY, address)
   print result


   if True:
      print 'loading'
      return render_template("result-page.html") 


# @app.route('/result', methods=['POST'])
# def testing():
#    location_name = request.form.get('location-name')

#    return render_template('main-page.html', result=location_name)

# http_server = WSGIServer(('', 5000), app)
# http_server.serve_forever()

app.run(debug=True)
# app.run(passthrough_errors=False)
