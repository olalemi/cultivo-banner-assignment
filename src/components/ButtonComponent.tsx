import { Box, Button } from '@chakra-ui/react'
type props = {
  buttonText: string
  buttonColor: string
  buttonBackgroundColor: string
  onClick: () => void
}
const ButtonComponent = ({
  buttonText,
  buttonColor,
  buttonBackgroundColor,
  onClick,
}: props) => {
  return (
    <Box>
      <Button
        type='submit'
        fontSize={{ base: '16px', md: '18px' }}
        width={{ base: '279px', md: '248px' }}
        backgroundColor={buttonBackgroundColor}
        color={buttonColor}
        borderRadius='8px'
        height='48px'
        _hover={{
          color: '#005563',
          backgroundColor: '#E1F8FB',
        }}
      >
        {buttonText}
      </Button>
    </Box>
  )
}

export default ButtonComponent
