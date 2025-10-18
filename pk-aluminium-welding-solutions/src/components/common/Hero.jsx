import React from 'react'
import { Box, Heading, Text, Button, Stack, Image, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { COMPANY } from '../../utils/constants'

export default function Hero() {
  return (
    <Box as="section" bg={useColorModeValue('white','gray.900')}>
      <Stack direction={{ base: 'column', md: 'row' }} align="center" spacing={10} maxW="7xl" mx="auto" py={{ base: 10, md: 20 }} px={4}>
        <Box flex="1">
          <Heading as="h1" size="2xl" lineHeight="1.1" mb={4}>
            Aluminium Welding & Fabrication Experts in Cape Town
          </Heading>
          <Text fontSize="lg" color={useColorModeValue('gray.600','gray.300')} mb={6}>
            Custom aluminium canopies, railings, gates, balustrades and precision fabrication.
            <strong> Built to last.</strong> <strong>Finished to impress.</strong>
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
            <Button as={RouterLink} to="/services" colorScheme="teal" size="lg">View Services</Button>
            <Button as={RouterLink} to="/contact" variant="outline" size="lg">Get a Quote</Button>
            <Button as="a" href={COMPANY.whatsappLink} size="lg" target="_blank" rel="noreferrer">WhatsApp</Button>
          </Stack>
        </Box>
        <Box flex="1" display={{ base:'none', md:'block' }}>
          <Image
            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop"
            alt="Welding sparks"
            rounded="xl"
            shadow="lg"
          />
        </Box>
      </Stack>
    </Box>
  )
}
