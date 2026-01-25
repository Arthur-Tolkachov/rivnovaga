"use client";

import { useState } from "react";

import { SendMessageForm } from "@features/contactUs/SendMessage";
import { Button } from "@shared/ui/base/Button";
import { Modal } from "@shared/ui/composite/Modal";

export const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button color="secondary" variant="outlined-light" onClick={handleOpen}>
        Консультацiя
      </Button>

      <Modal
        title="Виникли питання? Надiшлiть нам повідомлення"
        open={isOpen}
        onConfirm={() => {}}
        onCancel={handleCancel}
        width={800}
        showActions={false}
      >
        <SendMessageForm onSuccess={handleCancel} onCancel={handleCancel} />
      </Modal>
    </>
  );
};
