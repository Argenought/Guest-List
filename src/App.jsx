import { useState } from "react";
import GuestDetails from "./Guests/GuestDetails";
import GuestList from "./Guests/GuestList";

export default function App() {
  const [guestId, setGuestId] = useState(null);
  return (
    <section>
      {guestId ? (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </section>
  );
}
