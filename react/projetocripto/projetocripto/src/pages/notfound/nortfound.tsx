import style from "./notfound.module.css";
export function NotFound() {
  return (
    <>
      <main className={style.main}>
        <h1 className={style.main_h1}>ERRO 404</h1>
        <h2 className={style.main_h2}>ESSA PÁGINA NÃO EXISTE</h2>
        <p className={style.main_p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          necessitatibus, quisquam autem neque deleniti minus.
        </p>
      </main>
    </>
  );
}
