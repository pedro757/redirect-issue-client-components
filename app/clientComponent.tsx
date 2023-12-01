"use client";

import { redirect } from "next/navigation";

export default function ClientComponent() {
  return <button onClick={() => redirect("/otherpage")}>Redirect</button>;
}
