'use client'
import React, { useState, useEffect} from 'react'
import ButtonComponent from '../components/ButtonComponent'
import TopCardComponent from '@/components/TopCardComponent'
import ButtomCardComponent from '@/components/ButtomCardComponent'
import { ContactFormDialog } from '@/components/ContactFormDialog'
import styles from '../app/page.module.css'

export default function Home() {
  const [open, isOpen] = useState<boolean>(false)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)


  useEffect(() => {
    const savedIsSubmit = localStorage.getItem('isSubmitKey');
    
    if (savedIsSubmit !== null) {
      setIsSubmit(savedIsSubmit === 'true');
    }

  }, []); 

  useEffect(() => {
    localStorage.setItem('isSubmitKey', isSubmit.toString());
  }, [isSubmit]); 




  const toggleModal = () => isOpen(!open)



  const handleFormSubmit = (message: string) => {
    console.log(message)
    setIsSubmit(true)
  }

  return (
    <div>
      <div className={styles.card}>
        <TopCardComponent isSubmit={isSubmit} />

        <div className={styles.buttomCardComponent}>
          <ButtomCardComponent isSubmit={isSubmit} />

          <div>
            <ButtonComponent
              buttonText={isSubmit ? 'Send another message' : 'Get in Touch'}
              buttonBackgroundColor='#ffff'
              buttonColor='#008096'
              onClick={() => toggleModal()}
            />
          </div>
        </div>
      </div>

      <ContactFormDialog
        open={open}
        onClose={() => toggleModal()}
        onFormSubmitted={handleFormSubmit}
      />
    </div>
  )
}
