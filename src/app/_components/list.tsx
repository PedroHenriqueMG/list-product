"use client";

import { Button } from "@nextui-org/button";
import { type Products } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ListProps {
  products?: Products[];
}

export default function List({ products }: ListProps) {
  const router = useRouter();

  return (
    <div>
      {products?.map((p) => (
        <div key={p.id} className="flex flex-col">
          <div className="flex">
            <h1>Produto:</h1>
            <p>{p.name}</p>
          </div>
          <div className="flex">
            <h1>Valor:</h1>
            <p>{p.value}</p>
          </div>
        </div>
      ))}
      <Button onClick={() => router.push("?register=true")}>Cadastrar</Button>
    </div>
  );
}
