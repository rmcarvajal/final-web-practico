import Link from "next/link";
import { apiFetch } from "../../lib/api";
import type { Tool } from "../../lib/loan-types";

type LoanRequestsPageProps = { searchParams: Promise<{ toolId?: string }> };

export default async function LoanRequestsPage({ searchParams }: LoanRequestsPageProps) {
  // Esta consulta solo prepara las opciones que se necesitan para el selector del filtro.
  const toolsResponse = await apiFetch("/tools");
  const tools: Tool[] = toolsResponse.ok ? await toolsResponse.json() : [];

  // TODO FRONT-A: leer searchParams y consultar las solicitudes con apiFetch.
  // TODO FRONT-A: agregar el formulario GET de filtro usando tools y la opción All tools.
  // TODO FRONT-A: mostrar las solicitudes y sus enlaces al comprobante correspondiente.
  void searchParams;
  void tools;

  return (
    <main>
      <h1>Loan requests</h1>
      <Link className="button" href="/loan-requests/new">New request</Link>
      <section className="panel" aria-label="Loan requests">
        <p>Complete the request list and its filter.</p>
      </section>
    </main>
  );
}

