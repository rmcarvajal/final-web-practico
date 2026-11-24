import Link from "next/link";
import { apiFetch } from "../../lib/api";
import type { LoanRequest, Tool } from "../../lib/loan-types";

type LoanRequestsPageProps = { searchParams: Promise<{ toolId?: string }> };

export default async function LoanRequestsPage({ searchParams }: LoanRequestsPageProps) {
  // Esta consulta solo prepara las opciones que se necesitan para el selector del filtro.
  const toolsResponse = await apiFetch("/tools");
  const tools: Tool[] = toolsResponse.ok ? await toolsResponse.json() : [];

  // TODO FRONT-A: leer searchParams y consultar las solicitudes con apiFetch.
  // TODO FRONT-A: agregar el formulario GET de filtro usando tools y la opción All tools.
  // TODO FRONT-A: mostrar las solicitudes y sus enlaces al comprobante correspondiente.
  const { toolId } = await searchParams;
  const selectedTool = toolId ? toolId : undefined
  const endpointURL = selectedTool 
  ? `/loan-requests?toolId=${selectedTool}`
  : "/loan-requests"

  const response = await apiFetch(endpointURL)
  const data = response?.ok ? await response.json().catch(() => null) : null;
  const loans: LoanRequest[] | null = Array.isArray(data) ? data : null;
  // void searchParams;
  // void tools;

  return (
    <main>
      <h1>Loan requests</h1>
      <nav aria-label="Filters">
        <Link href="/loan-requests">All tools</Link>
        <Link href="/loan-requests?toolId=1">tool 1</Link>
        <Link href="/loan-requests?toolId=2">tool 2</Link>        
      </nav>
      <Link className="button" href="/loan-requests/new">New request</Link>
      <section className="panel" aria-label="Loan requests">
        {/* <p>Complete the request list and its filter.</p> */}
        {loans === null && <p role="alert">Could not request loans.</p>}
        {loans?.length === 0 && <p>No loans to show</p>}
        {loans && loans.length > 0 && (
          <section>
            {loans.map((loaninfo) => (
              <div key={loaninfo.id}>
              <h2>{loaninfo.purpose}</h2>
              <p>Days: {loaninfo.days}</p>
              <p>tool: {loaninfo.tool.name}</p>
              </div>
            ))}

          </section>
        )}
      </section>
    </main>
  );
}

