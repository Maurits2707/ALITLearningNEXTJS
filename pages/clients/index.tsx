import React from "react";
import Link from "next/link";

function clientPage() {
  const clients = [
    { id: "maurits", name: "Maurits" },
    { id: "sarah", name: "Sarah" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li>
            <Link
              href={{
                pathname: "clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default clientPage;
