from flask import Flask, render_template
app = Flask("MyApp")

@app.route("/")
def rendering_main_page():
   return render_template("main-page.html")

app.run(debug=True)