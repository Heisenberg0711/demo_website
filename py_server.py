from flask import Flask, jsonify, request
app = Flask(__name__)

info = [
{"candidate1": 80},
{"candidate2": 85},
{"candidate3": 90},
{"candidate4": 95}
]

bad_info = [
{"candidate1": "heisenberg1"},
{"candidate2": "heisenberg2"},
{"candidate3": "heisenberg3"},
{"candidate4": "heisenberg4"}
]

@app.route("/")
def hello_world():
  return "<h1> Welcome to the test website LMAO</h1>"

@app.route('/info')
def get_info():
    return jsonify(info)

@app.route('/convo', methods=['POST'])
def add_convo():
    bad_info.append(request.get_json())
    return jsonify(bad_info)

# # flask depends on this env variable to find the main file
# export FLASK_APP=hello.py
