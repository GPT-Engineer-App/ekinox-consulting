import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import { FaSun, FaMoon, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const bgColor = useColorModeValue("brand.100", "brand.900");
  const textColor = useColorModeValue("brand.800", "white");

  return (
    <Container maxW="container.xl" p={4} bg={bgColor} color={textColor}>
      <Navigation />
      <Box textAlign="right">
        <IconButton aria-label="Toggle Color Mode" icon={colorModeIcon} onClick={toggleColorMode} />
      </Box>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Ekinox
          </Heading>
          <Text fontSize="xl">Consulting & Startup Factory in Paris</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1495442358998-961b69f45703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQYXJpcyUyMHNreWxpbmV8ZW58MHx8fHwxNzE3NjIwMjY1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Paris skyline" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            About Us
          </Heading>
          <Text>Ekinox is a leading consulting company based in Paris. We specialize in providing top-notch consulting services and have a startup factory that has successfully launched several innovative startups, including Moovance, a renowned greentech startup in France.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Our Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="md" color="teal.500">
                Moovance
              </Heading>
              <Text color="teal.500">Moovance is a groundbreaking startup in the greentech industry, focusing on sustainable solutions for a better future.</Text>
              <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmVlbnRlY2glMjBzdGFydHVwfGVufDB8fHx8MTcxNzYyMDI2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Moovance" borderRadius="md" />
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg">
            Connect with Us
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} as="a" href="https://www.linkedin.com" target="_blank" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} as="a" href="https://www.twitter.com" target="_blank" />
            <IconButton aria-label="Facebook" icon={<FaFacebook />} as="a" href="https://www.facebook.com" target="_blank" />
          </HStack>
        </Box>
        <Box textAlign="center">
          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
