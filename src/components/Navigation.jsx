import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} p={4} bg="brand.800" color="white">
      <Button as={Link} to="/" variant="link" color="white">
        Home
      </Button>
      <Button as={Link} to="/projects" variant="link" color="white">
        Projects
      </Button>
    </HStack>
  );
};

export default Navigation;
