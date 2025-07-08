#FUNÇÕES 
"""
No python, as funções são chamadas por 'def' nome_da_função(parametros):
    elas fazem parte da função enquanto estão dentro do escopo dela, que diferente de outras linguagens, é definida pela distancia do inicio da linha.
"""
def calcula_valores(x, y):
    print(x + y)
    
calcula_valores(5, 8)    

"""ARGUMENTOS!!"""
"""Os Argumentos podem ser passados dentro do parámentro, e pode se usar quantos quiser, apenas os separando por vírgula"""

def fala_ola_mundo(tiposDeOla):
    print(tiposDeOla, "word")
fala_ola_mundo("Olá")
fala_ola_mundo("hello")

b = "Hello, World!"
print(b[2:5])