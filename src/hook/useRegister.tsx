import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type ProductSchemaProps,
  productSchema,
} from "@/interface/productSchema";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const createProduct = api.post.create.useMutation();
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm<ProductSchemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(productSchema),
  });

  async function handleRegister(data: ProductSchemaProps) {
    await createProduct.mutateAsync(data);
    router.push("/");
    router.refresh();
  }

  return {
    register,
    handleSubmit,
    handleRegister,
    setValue,
  };
};
