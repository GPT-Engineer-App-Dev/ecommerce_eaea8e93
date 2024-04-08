import React from "react";
import { Box, Heading, Text, Image, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: "4", md: "8", lg: "12" }} py={{ base: "6", md: "8", lg: "12" }}>
      <Stack direction={{ base: "column", md: "row" }} spacing={{ base: "8", md: "16" }}>
        <Box flex="1">
          <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBwcm9kdWN0fGVufDB8fHx8MTcxMjYwMTEyNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wireless Headphones" mb="8" borderRadius="md" boxShadow="lg" />
        </Box>
        <Stack flex="1" spacing="6">
          <Heading as="h1" size="xl" fontWeight="bold">
            Wireless Noise Cancelling Headphones
          </Heading>
          <Box>
            <Text fontSize="3xl" fontWeight="bold" color="blue.600">
              $149.99
            </Text>
          </Box>
          <Text fontSize="lg" lineHeight="tall">
            Experience immersive sound with these wireless noise cancelling headphones. Featuring advanced noise cancellation technology, these headphones block out ambient noise so you can focus on your music. With up to 30 hours of battery life and quick charging capabilities, you can enjoy your favorite tunes all day long.
          </Text>
          <Button size="lg" colorScheme="blue" rightIcon={<FaShoppingCart />} width="fit-content">
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Index;
