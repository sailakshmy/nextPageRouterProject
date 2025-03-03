import Link from "next/link";
import React from "react";

const ClientPage = () => {
  const clients = [
    {
      id: "Max",
      name: "Maximus",
    },
    {
      id: "Min",
      name: "Minimus",
    },
  ];
  return (
    <div>
      <h1>This is the Client page</h1>
      <ul>
        {clients?.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
