from flask import Flask, jsonify, request
app = Flask(__name__)

info = "this is the starting message"

@app.route("/")
def hello_world():
  return "<h1> Welcome to the test website LMAO</h1>"

@app.route('/info')
def get_info():
    return info

@app.route('/convo', methods=['POST'])
def add_convo():
    info = request.json
    return '', 204

# # flask depends on this env variable to find the main file
# export FLASK_APP=hello.py
