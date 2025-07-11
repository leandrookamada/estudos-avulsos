from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/calcular', methods=['POST'])
def calcular():
    dados = request.json
    expressao = dados.get('expressao')
