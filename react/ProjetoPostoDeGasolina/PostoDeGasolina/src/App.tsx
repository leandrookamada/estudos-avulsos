import { useState, FormEvent } from "react";
import "./App.css";
import logoPng from "./assets/logo.png";

interface infoPromps {
  title: string;
  gasolina: number | string;
  alcool: number | string;
}

function App() {
  const [gasolina, setGasolina] = useState(1);
  const [alcool, setAlcool] = useState(1);
  const [info, setInfo] = useState<infoPromps>();

  function calcular(event: FormEvent) {
    event.preventDefault();
    let calculo = gasolina / alcool;
    if (calculo > 0.7) {
      setInfo({
        title: "compensa usar alcool",
        gasolina: gasolina,
        alcool: alcool,
      });
    } else {
      setInfo({
        title: "compensa usar gasolina",
        gasolina: gasolina,
        alcool: alcool,
      });
    }
  }
  return (
    <>
      <div>
        <main className="main">
          <img src={logoPng} alt="" />
          <h1>CALCULADORA, GASOLINA OU ÁLCOOL</h1>
          <form className="main_form" onSubmit={calcular}>
            <label className="main_form_label">Álcool(Valor por litro)</label>
            <input
              type="number"
              className="alcool"
              placeholder="4.90"
              min={1}
              step={0.01}
              value={alcool}
              onChange={e => setAlcool(Number(e.target.value))}
              required
            />
            <label className="main_form_label">gasolina(Valor por litro)</label>
            <input
              type="number"
              className="gasolina"
              placeholder="6.70"
              min={1}
              step={0.01}
              value={gasolina}
              onChange={e => setGasolina(Number(e.target.value))}
              required
            />
            <button className="main_form_button">Calcular</button>
          </form>
        </main>
        {info && Object.keys(info).length > 0 && (
          <section className="section">
            <h2 className="section_h2">Nesse caso: {info.title}</h2>
            <span className="section_span">alcool: {info.alcool}</span>
            <span className="section_span">gasolina: {info.gasolina}</span>
          </section>
        )}
      </div>
    </>
  );
}

export default App;
