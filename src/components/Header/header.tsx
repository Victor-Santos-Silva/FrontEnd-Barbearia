import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1>Header Barbearia</h1>
            <Link href="/">Botao Home</Link>
            <Link href="/login">Botao Login</Link>
            <Link href="/cadastro">Botao Register</Link>

        </header>
    );
}
