from flask import Flask, render_template, make_response
from flask import redirect, request, jsonify, url_for

app = Flask("MyApp")

@app.route("/")
def rendering_main_page():
   return render_template("main-page.html")

@app.route('/postmethod', methods = ['POST'])
def post_javascript_data():
    position_data = request.form['currentPosition']
    print position_data
    return jsonify(position_data)

app.run(debug=True)
