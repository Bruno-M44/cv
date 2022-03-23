from flask import Flask, render_template
# import sys
# import logging

app = Flask(__name__)
#app.secret_key = 'something_special'
#Scss(app, static_dir='static', asset_dir='assets')

# app.logger.addHandler(logging.StreamHandler(sys.stdout))
# app.logger.setLevel(logging.ERROR)

@app.route('/')
def index():
    return render_template('CV.html')

if __name__ == '__main__':
    app.run()