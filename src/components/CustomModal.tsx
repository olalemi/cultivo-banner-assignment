'use client'

import React, { useState } from 'react';
import { EmailIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
} from '@chakra-ui/react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmitted: (message: string) => void;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  onFormSubmitted,
}) => {
  const [message, setMessage] = useState('');

  const onSendMessage = () => {
    onFormSubmitted(message);
    onClose();
    setMessage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "2xl" }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Get In Touch</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            mt={4}
            placeholder="Message"
            size="sm"
            resize="vertical"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={onSendMessage}
            rightIcon={<EmailIcon />}
          >
            Send message
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
