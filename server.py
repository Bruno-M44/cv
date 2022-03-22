from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'something_special'
#Scss(app, static_dir='static', asset_dir='assets')

@app.route('/')
def index():
    return render_template('cv.html')