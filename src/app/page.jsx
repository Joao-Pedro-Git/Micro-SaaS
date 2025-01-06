import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center bg-white">Pagina inicial do SaaS</div>
      <Link href="/SignIn">Login</Link>
    </>
  );
}
