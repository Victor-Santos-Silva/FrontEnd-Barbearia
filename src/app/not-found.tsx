import Link from "next/link";

export default function NotFound() {
    return (
        <section>
            <h1>Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link href="/">Voltar para a página inicial</Link>
        </section>
    );
}
