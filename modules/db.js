export async function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpdGVqbmJ6d2pqaG9ieHV5eHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NjMsImV4cCI6MTk4MjE3NDc2M30.My4r30fwDXHRjsZrrKgiOO9S0r-lbX35M06qIM0lZG0";
  const url = "https://qitejnbzwjjhobxuyxyu.supabase.co/";
  const res = await fetch(url + "rest/v1/foofestival", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpdGVqbmJ6d2pqaG9ieHV5eHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NjMsImV4cCI6MTk4MjE3NDc2M30.My4r30fwDXHRjsZrrKgiOO9S0r-lbX35M06qIM0lZG0",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpdGVqbmJ6d2pqaG9ieHV5eHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NjMsImV4cCI6MTk4MjE3NDc2M30.My4r30fwDXHRjsZrrKgiOO9S0r-lbX35M06qIM0lZG0",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
}
