import RNN_pred
from flask import Flask, jsonify, request
import json
# load json and create model
from keras.models import model_from_json
import re
import pickle
from keras.preprocessing.sequence import pad_sequences

app = Flask(__name__)

@app.route("/")
def hello_world():
  return "<h1> Welcome to the test website LMAO</h1>"

@app.route('/info')
def get_info():
    return jsonify(info)

@app.route('/convo', methods=['POST'])
def add_convo():
    #
    probs_a = [
    {"Trump": "??"},
    {"Hilary": "??"},
    {"Andrew": "??"},
    {"Bernie": "??"}
    ]

    a = request.get_json()
    if len(a['tweet']) < 1:
        # print("first ifff \n")
        return jsonify(probs_a)
    else:
        test_str = "We are taking on the big-money interests who have an army of lobbyists trying to defeat Medicare for All. They are terrified that the American people recognize that health care is a human right. They're right to be terrified."
        print("the input string is \n")
        print(test_str)
        # result = RNN_pred.predict(test_str)
        print("prediction finishied \n")
        probs_b = [
        {"Trump": "b"},
        {"Hilary": "b"},
        {"Andrew": "b"},
        {"Bernie": "b"}
        ]
        return jsonify(probs_b)


# # flask depends on this env variable to find the main file
# export FLASK_APP=hello.py
