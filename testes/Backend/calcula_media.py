from typing import Dict

# Essa função recebe um dicionário onde:
# - as chaves são os IDs das perguntas (int)
# - os valores são as respostas dadas pelo usuário (também int, de 1 a 5)
def Calcula_A_Media(resposta_usuario: Dict[int, int]) -> float:
    # Soma todos os valores das respostas
    total = sum(resposta_usuario.values())

    # Conta quantas respostas foram dadas
    quantidade = len(resposta_usuario)

    # Calcula a média
    media = total / quantidade

    # Retorna a média arredondada para 2 casas decimais
    return round(media, 2)
