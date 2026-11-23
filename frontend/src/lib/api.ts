import "server-only";
import { redirect } from "next/navigation";
import { apiUrl } from "./api-url";
import { readSessionToken } from "./session";

// Helper proporcionado: no hay que implementar ni modificar la sesión.
export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = await readSessionToken();
  if (!token) redirect("/login");

  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${token}`);

  const response = await fetch(`${apiUrl}${path}`, {
    ...options,
    headers,
    cache: "no-store",
  });

  if (response.status === 401) redirect("/login");
  return response;
}

