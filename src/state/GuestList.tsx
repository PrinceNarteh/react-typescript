import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h1>List Of Guests</h1>

      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Add Guest</button>
      <ul>
        {guests.map((guest, idx) => (
          <li key={idx}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
