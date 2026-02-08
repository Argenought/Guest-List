import { useEffect, useState } from "react";
import { FetchGuest } from "./FetchGuests";

export default function GuestDetails({ guestId, setGuestId }) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    const syncGuest = async () => {
      const data = await FetchGuest(guestId);
      setGuest(data);
    };
    syncGuest();
  }, [guestId]);

  if (!guest) return <p>loading...</p>;
  return (
    <section>
      <h1>{guest.name}</h1>
      <p>Email: {guest.email}</p>
      <p>Phone #:{guest.phone}</p>
      <p>Job: {guest.job}</p>
      <p>Bio: {guest.bio}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </section>
  );
}
