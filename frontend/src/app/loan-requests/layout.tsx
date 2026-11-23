import { redirect } from "next/navigation";
import { apiFetch } from "../../lib/api";
import { clearSessionToken } from "../../lib/session";

async function logout() {
  "use server";
  await clearSessionToken();
  redirect("/login");
}

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
  // Protección suministrada para las páginas base, incluso antes de completar los TODO.
  // Las consultas de cada página y la acción de creación también deben usar apiFetch.
  await apiFetch("/tools");

  return (
    <>
      <div className="session-bar">
        <form action={logout}><button type="submit">Sign out</button></form>
      </div>
      {children}
    </>
  );
}

