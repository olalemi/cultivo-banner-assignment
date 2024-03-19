import { Box, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import vector from '../assets/icons/vector.svg'

const TopCardComponent = () => {
  return (
    <Box
      backgroundColor={'blue'}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      borderRadius={{ base: '10px 10px 0px 0px', md: '10px 0px 0px 10px' }}
      width={{ base: '327px', md: '373px' }}
      height={{ base: '200px', md: '199px' }}
    >
      <Flex
        padding={{ base: '20px ', md: ' 20px 50px 30px 30px' }}
        direction={{ base: 'column' }}
      >
        <Box>
          <Image src={vector} alt='Vector icon' />
        </Box>

        <Box>
          <Text
            color='#fff'
            fontSize={{ base: '16px' }}
            fontWeight={400}
            lineHeight='normal'
            textAlign='left'
            mt={2}
          >
            Next step
          </Text>
        </Box>

        <Box>
          <Text
            color='#fff'
            fontSize={{ base: '24px' }}
            fontWeight={400}
            lineHeight='normal'
            textAlign='left'
            mt={5}
          >
            Expert Report
          </Text>
        </Box>
      </Flex>

     
    </Box>
  )
}

export default TopCardComponent
