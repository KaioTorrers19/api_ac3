from flask import Flask, jsonify, request
import requests

app = Flask(__name__)


@app.route('/cep/<string:cep>', methods=['GET'])
def get_address(cep):
    try:
        response = requests.get(f'https://viacep.com.br/ws/{cep}/json/')
        data = response.json()
        if 'erro' in data:
            return jsonify({'error': 'CEP not found'}), 404
        return jsonify(data), 200
    except:
        return jsonify({'error': 'An error occurred'}), 500


if __name__ == '__main__':
    app.run(debug=True)
