from fastapi import FastAPI
from fastapi.middleware.cors import CORSmiddleware
from pydantic import BaseModel

app = FastAPI  # app vai fazer o requerimento das informações

origens = [
    "http://localhost:5173"
]
app.app_middleware( 
    allow_origins=origins,          # Domínios permitidos
    allow_credentials=True,         # Permite envio de cookies/autenticação, se necessário
    allow_methods=["*"],            # Permite todos os métodos HTTP (GET, POST, etc)
    allow_headers=["*"], 
)

# Modelo dos dados recebidos
class NomeInput(BaseModel):
    nome: str
    idade: int

# Caminho para salvar os dados
ARQUIVO_DADOS = "dados.json"

# Função para salvar dados no arquivo JSON
def salvar_dado(dado: dict):
    # Se o arquivo existir, carrega os dados antigos
    if os.path.exists(ARQUIVO_DADOS):
        with open(ARQUIVO_DADOS, "r", encoding="utf-8") as f:
            dados = json.load(f)
    else:
        dados = []

    # Adiciona o novo dado
    dados.append(dado)

    # Salva tudo de novo no arquivo
    with open(ARQUIVO_DADOS, "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)

# Rota para receber os dados e salvar
@app.post("/api/saudacao")
def saudacao(dado: NomeInput):
    salvar_dado(dado.dict())  # Converte para dict antes de salvar
    return {"mensagem": f"Olá, {dado.nome}! Seus dados foram salvos com sucesso."}