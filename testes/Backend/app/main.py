from fastapi import FastAPI  # Importa a classe principal do FastAPI para criar a aplicação web
from fastapi.middleware.cors import CORSMiddleware  # Importa o middleware que permite comunicação entre domínios (CORS)
from pydantic import BaseModel  # Importa a base para modelos de dados (validação automática do corpo da requisição)
from typing import Dict  # Importa o tipo dicionário tipado
from calcula_media import Calcula_A_Media  # Importa a função que calcula a média das respostas

# Modelo de dados que o backend espera receber via POST
# Exemplo de estrutura esperada:
# {
#     "respostas": {
#         1: 4,
#         2: 3,
#         ...
#     }
# }
class RespostasModel(BaseModel):
    respostas: Dict[int, int]  # As chaves são os IDs das perguntas e os valores são as respostas (todos inteiros)
# Instancia a aplicação FastAPI
app = FastAPI()
# Adiciona o middleware de CORS para permitir que o frontend (em outro domínio ou porta) acesse essa API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite requisições de qualquer origem (ideal para desenvolvimento; em produção, especifique o domínio do frontend)
    allow_credentials=True,  # Permite o uso de cookies/autenticação entre domínios (se necessário)
    allow_methods=["*"],  # Permite todos os métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os tipos de headers
)
# Define a rota POST que vai receber as respostas do questionário e retornar a média
@app.post("/api/respostas")
async def calcular_media(payload: RespostasModel):  # O corpo da requisição será automaticamente convertido para o modelo RespostasModel
    try:
        respostas = payload.respostas  # Extrai o dicionário de respostas do payload (já validado como Dict[int, int])
        
        # Chama a função que calcula a média com base nas respostas fornecidas
        media = Calcula_A_Media(respostas)

        # Retorna um dicionário JSON com a média calculada
        return {"media": media}

    except Exception as e:
        # Caso ocorra algum erro inesperado, ele será capturado aqui
        print("Erro ao calcular média:", e)  # Mostra o erro no terminal para fins de depuração
        return {"erro": str(e)}  # Retorna uma mensagem de erro para o frontend
