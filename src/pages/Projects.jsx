import { Container, Box, VStack, Heading, Text, Image } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Our Projects
          </Heading>
          <Text fontSize="xl">Here are some of the projects we have worked on with our clients.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Project 1
          </Heading>
          <Text>Description of Project 1.</Text>
          <Image src="https://via.placeholder.com/1080" alt="Project 1" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Project 2
          </Heading>
          <Text>Description of Project 2.</Text>
          <Image src="https://via.placeholder.com/1080" alt="Project 2" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Projects;
