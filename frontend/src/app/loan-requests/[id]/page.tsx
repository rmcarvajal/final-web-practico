import Link from "next/link";
import { notFound } from "next/navigation";
import { apiFetch } from "../../../lib/api";
import { LoanRequest } from "../../../lib/loan-types";

type ReceiptPageProps = { params: Promise<{ id: string }> };

export default async function ReceiptPage({ params }: ReceiptPageProps) {
  // TODO FRONT-C: leer params y consultar el detalle con apiFetch.
  // TODO FRONT-C: mostrar ID, purpose, days y tool.name de la solicitud recibida.

  const { id } = await params;
  const loanId = Number(id);
  if(!Number.isSafeInteger(loanId) || loanId < 1 || String(loanId) !== id){
    notFound()
  }

  const response = await apiFetch(`/loan-requests/${loanId}`)
  if(response?.status === 404) notFound()
  // void params;

  const loan: LoanRequest | null = response?.ok
  ? await response.json().catch(() => null)
  : null
  return (
    <main>
      <h1>Loan receipt #{loanId}</h1>
      <Link href="/loan-requests">Back to requests</Link>
      <section className="panel">
        {/* <p>Complete the request details.</p> */}
        {loan ? (
          <>
          <h2>{loan.purpose}</h2>
          <p>days: {loan.days}</p>
          <p>tool: {loan.tool.name}</p>
          </>
        ) : (
          <p>Loan not found</p>
        )}
      </section>
    </main>
  );
}

