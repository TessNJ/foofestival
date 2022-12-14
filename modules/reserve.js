export async function putReservation(payload) {
  // const url = "http://localhost:8080";
  const url = "https://fooapi.fly.dev";
  const res = await fetch(url + "/reserve-spot", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
}
