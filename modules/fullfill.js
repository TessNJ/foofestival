export async function fillReservation(payload) {
  const url = "http://localhost:8080";
  const res = await fetch(url + "/fullfill-reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
}
