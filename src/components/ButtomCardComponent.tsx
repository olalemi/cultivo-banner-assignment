import {
  Box,
  Text,
  Flex,
  ListItem,
  List,
  
} from '@chakra-ui/react'
const ButtomCardComponent = () => {
  return (
    <Box>
    <Text
      color='#fff'
      fontSize={{ base: '16px' }}
      fontWeight={400}
      lineHeight='normal'
      width={{ base: '279px', md: '483px' }}
      textAlign='left'
      mt={2}
      p="8px"
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
  )
}

export default ButtomCardComponent