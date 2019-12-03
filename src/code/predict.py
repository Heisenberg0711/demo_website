import json
# load json and create model
from keras.models import model_from_json
import re
import pickle
from keras.preprocessing.sequence import pad_sequences

def extract_url(in_str):
    return re.sub(r'http\S+', 'URL', in_str).strip()

def load_token():
    # loading
    with open('tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)
    return tokenizer

def predict(string):
    tokenizer = load_token()
    json_file = open('model1.json', 'r')
    model_json = json_file.read()
    json_file.close()
    model = model_from_json(model_json)
    # load weights into new model
    model.load_weights("model1.h5")

    string = extract_url(string)
    string = [string]
    X_sample = tokenizer.texts_to_sequences(string)
    X_sample = pad_sequences(X_sample, maxlen=150)
    return  jsonify(model.predict(X_sample))


if __name__ == "__main__":
    string = """We are taking on the big-money interests who have an army of lobbyists trying to defeat Medicare for All.

They are terrified that the American people recognize that health care is a human right. They're right to be terrified.

"""
    print(predict(string))
