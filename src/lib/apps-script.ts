interface SheetPayload {
  mode: "buyer" | "seller";
  locale: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  verticals?: string[];
  transactionTypes?: string[];
  assetType?: string;
  location?: string;
  priceRange?: string;
  message?: string;
}

export async function appendToSheet(data: SheetPayload): Promise<void> {
  const url = process.env.APPS_SCRIPT_URL;
  const secret = process.env.APPS_SCRIPT_SECRET;

  if (!url || !secret) throw new Error("Apps Script env vars not configured");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, token: secret }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Apps Script error: ${res.status} — ${text}`);
  }

  const json = await res.json();
  if (json.error) throw new Error(`Apps Script error: ${json.error}`);
}
