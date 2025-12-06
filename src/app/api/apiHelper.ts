


export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json() as Promise<T>;
}