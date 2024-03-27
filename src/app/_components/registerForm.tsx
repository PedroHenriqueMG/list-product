"use client";

import { useRegister } from "@/hook/useRegister";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function RegisterForm() {
  const { register, handleSubmit, handleRegister, setValue } = useRegister();
  const [checked, setChecked] = useState<boolean>();

  function clickYes() {
    setChecked(true);
    setValue("status", true);
  }

  function clickNo() {
    setChecked(false);
    setValue("status", false);
  }

  function color() {
    if (checked == false) {
      return "danger";
    }
    return "default";
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div className="flex flex-col gap-2">
        <label>Produto</label>
        <input {...register("name")} type="text" placeholder="Produto" />
      </div>
      <div className="flex flex-col gap-2">
        <label>Descrição</label>
        <input
          {...register("description")}
          type="text"
          placeholder="Descrição"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Valor</label>
        <input {...register("value")} type="number" placeholder="Valor" />
      </div>
      <div className="flex flex-col gap-2">
        <label>Disponível para venda</label>
        <div className="flex gap-2">
          <Button
            color={`${checked ? "success" : "default"}`}
            onClick={clickYes}
          >
            <input className="hidden" {...register("status")} type="radio" />
            Sim
          </Button>
          <Button color={color()} onClick={clickNo}>
            <input className="hidden" {...register("status")} type="radio" />
            Não
          </Button>
        </div>
      </div>
      <Button type="submit" color="primary">
        Enviar
      </Button>
    </form>
  );
}
