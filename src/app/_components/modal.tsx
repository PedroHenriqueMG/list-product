"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { useRouter, useSearchParams } from "next/navigation";
import RegisterForm from "./registerForm";

export default function RegisterModal() {
  const searchParams = useSearchParams();
  const open = searchParams.get("register") === "true";

  const router = useRouter();

  const onClose = () => router.push("/");
  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalBody className="flex flex-col items-center justify-center">
          <RegisterForm />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
