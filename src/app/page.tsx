'use client'
import React, { useState } from 'react'
  import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import ButtonComponent from '../components/ButtonComponent'
import Image from 'next/image'
import TopCardComponent from '@/components/TopCardComponent'
import ButtomCardComponent from '@/components/ButtomCardComponent'
import { ContactFormDialog } from '../components/ContactFormDialog'
import { CustomModal } from '../components/CustomModal'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFormSubmit = (message: string) => {
    console.log(message)
  }

  return (
    <Box padding={{ base: '0px 50px', md: '0px' }}>
      <Flex
        justifyContent={'center'}
        height='100vh'
        alignItems='center'
        direction={{ base: 'column', md: 'row' }}
      >
        <TopCardComponent />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          backgroundColor='#003E49'
          padding={{ base: '20px' }}
          borderRadius={{ base: '0px 0px 10px 10px', md: '0px 10px 10px 0px' }}
          width={{ base: '327px', md: '811px' }}
        >
          <ButtomCardComponent />

          <Box mt='10px'>
            <ButtonComponent
              buttonText='Get in Touch'
              buttonBackgroundColor='#ffff'
              buttonColor='#008096'
              onClick={onOpen}
            />
          </Box>
        </Flex>
      </Flex>

      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        onFormSubmitted={handleFormSubmit}
      />
    </Box>
  )
}
