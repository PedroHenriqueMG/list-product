import { api } from "@/trpc/server";
import List from "./_components/list";
import RegisterModal from "./_components/modal";

export default async function Home() {
  const products = await api.post.getAll();

  return (
    <main className="flex items-center justify-center">
      <List products={products.result} />
      <RegisterModal />
    </main>
  );
}
