import "server-only";
import { cookies } from "next/headers";

const cookieName = "tool_lab_session";

export async function readSessionToken() {
  return (await cookies()).get(cookieName)?.value;
}

export async function saveSessionToken(token: string) {
  (await cookies()).set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 3 * 60 * 60,
    // El parcial se ejecuta en HTTP local, no en producción.
    secure: false,
  });
}

export async function clearSessionToken() {
  (await cookies()).delete(cookieName);
}

