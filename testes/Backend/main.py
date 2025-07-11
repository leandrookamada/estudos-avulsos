from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS - Liberando acesso ao frontend local
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # ou 3000, dependendo da porta
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo para receber dados
class NomeInput(BaseModel):
    nome: str

# Rota POST que recebe o nome e retorna mensagem personalizada
@app.post("/api/saudacao")
def saudacao(dado: NomeInput):
    return {"mensagem": f"Olá, {dado.nome}! Seja bem-vindo à nossa API."}
