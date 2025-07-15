def Pesquisa(lista_de_alunos):
    
    NomeDigitado = input("digite o nome do aluno em questão ").strip().lower()
    for Nome in lista_de_alunos:
        if NomeDigitado == Nome.strip().lower():
            Semestre = input(f"qual semestre você quer saber de {Nome}").strip().lower()
            print(f"aqui o aluno {Nome} tirou nota {lista_de_alunos[Nome][Semestre]}")
            return
    print("nome não encontrado")