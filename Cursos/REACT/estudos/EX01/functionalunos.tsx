import {} from "./functionalunos.css";
interface Alunosdados {
  nome: string;
  idade: number;
}
export function Alunos({ nome, idade }: Alunosdados) {
  return (
    <main>
      <div className="alunos_div">
        <h3 className="alunos_div_h3">{nome}</h3>
        <p className="alunos_div_p">
          O {nome} tem {idade} anos.
        </p>
      </div>
    </main>
  );
}
