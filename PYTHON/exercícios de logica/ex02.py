"""
Declaração de variáveis.

As variáveis não precisam que seja dito seus respoectivos tipos, além disso eles podem ser alterados conforme uma variável vai sendo usada
"""

x = 325
y = "ano"

print("um", y , "possue ", x, "dias")

"""
os nomes das variáveis podem conter letras, números e '_'. Porém eles não devem começar com números e letras minúsculas e maiúsculas são diferenciadas.
"""

idade, Idade, IDADE = "18", "19", "20"

print(idade)
print(Idade)
print(IDADE)

'''
DESCOMPACTANDO UMA COLEÇÃO
'''

fruts = ["banana", "maça", "pera"]
x, y, z = fruts 
print(x)
print(y)
print(z)
print(fruts)

#VARIÁEIS DE SAÍDAS
#Para variáveis de saídas no python eu posso declarar mais de uma na mesma função (print) e posso usar operadores aritmédicos tbm

cinco = 5
seis = 6
print(cinco + seis)

#O python apresenta um erro caso eu tentasse fazer essas operações misturando stings e numbers