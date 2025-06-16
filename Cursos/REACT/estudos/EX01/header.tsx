import {} from "./header.css";
interface TipagemHeader {
  header?: string;
}
export function Header({ header = "mudando a tipagem" }: TipagemHeader) {
  return (
    <header>
      <h1>{header}</h1>
      <hr />
    </header>
  );
}
