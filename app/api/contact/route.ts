import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json(
      { error: "Webhook not configured" },
      { status: 500 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, location, interest, message } =
    payload as Record<string, string | undefined>;

  if (!firstName || !lastName || !email) {
    return Response.json(
      { error: "First name, last name, and email are required" },
      { status: 400 },
    );
  }

  const upstream = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone ?? "",
      location: location ?? "",
      interest: interest ?? "",
      message: message ?? "",
      source: "trainerslab.com contact form",
      submitted_at: new Date().toISOString(),
    }),
  });

  if (!upstream.ok) {
    return Response.json(
      { error: `Upstream webhook returned ${upstream.status}` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
