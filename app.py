from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app)


@app.route('/cep/<cep>')
def cep(cep):
    url = f'https://viacep.com.br/ws/{cep}/json/'
    response = requests.get(url)
    return jsonify(response.json())


if __name__ == '__main__':
    app.run()
