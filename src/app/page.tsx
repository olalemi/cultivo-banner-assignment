'use client'

import {
  Box,
  Text,
  Flex,
  List,
  ListItem,
  VStack,
  Center,
} from '@chakra-ui/react'
import ButtonComponent from '../components/ButtonComponent'
import Image from 'next/image'
import vector from '../assets/icons/vector.svg'
// import wallpaper from '../assets/images/wallpaper.png'

export default function Home() {
  return (
    <Box padding={{ base: '20px', md: '0px' }}>
      <Flex
        justifyContent={'center'}
        mt={{ base: ' 20px', md: ' 300px  ' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box
          backgroundColor={'blue'}
          borderRadius={{ base: '10px 10px 0px 0px', md: '10px 0px 0px 10px' }}
          width={{ base: '350px', md: '373px' }}
          height={{ base: '199px' }}
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
                fontWeight={500}
                lineHeight='normal'
                textAlign='left'
                mt={5}
              >
                Expert Report
              </Text>
            </Box>
          </Flex>
        </Box>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          backgroundColor='#003E49'
          padding={{ base: '20px' }}
          borderRadius={{ base: '0px 0px 10px 10px', md: '0px 10px 10px 0px' }}
        >
          <Box>
            <Text
              color='#fff'
              fontSize={{ base: '16px' }}
              fontWeight={400}
              lineHeight='normal'
              width={{ base: '279px', md: '483px' }}
              textAlign='left'
              mt={2}
            >
              Please get in touch if you would like an expert report for this
              site. Benefits include:
            </Text>
            <List
              fontSize={{ base: '16px' }}
              spacing={1}
              listStyleType='disc'
              color='white'
              fontWeight={400}
              mt='20px'
              ml={'30px'}
            >
              <ListItem>Key insights from our expert team</ListItem>
              <ListItem>An in-depth analysis of the site</ListItem>
              <ListItem>Recommendations of next steps to take</ListItem>
            </List>
          </Box>

          <Center>
            <Box mt='10px'>
              <ButtonComponent
                buttonText='Get in Touch'
                buttonBackgroundColor='#ffff'
                buttonColor='#008096'
              />
            </Box>
          </Center>
        </Flex>
      </Flex>
    </Box>
  )
}
