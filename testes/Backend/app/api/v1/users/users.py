class Usuario:
    def __init__(self, nome, idade, cargo, resposta=False):
        Usuario.nome = nome
        Usuario.idade = idade
        Usuario.cargo = cargo
        Usuario.resposta = resposta


P1 = Usuario(nome="Leandro", idade="18", cargo="operador")
P1.resposta = {
    1: "5",
    2: "4",
    3: "3",
    4: "2",
    5: "1",
}

print(P1.resposta)