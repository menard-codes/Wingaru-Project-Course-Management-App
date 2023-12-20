// import { useState } from "react";

export default function Search() {
  // const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle submit
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" />
    </form>
  );
}
