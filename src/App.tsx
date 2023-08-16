import {
  ChakraProvider,
  useColorMode,
  Switch,
  Box,
  Text,
  Flex,
  SimpleGrid,
  Button as ChakraButton,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Icon from '@mdi/react';
import { mdiShipWheel } from '@mdi/js';


// Function to create the theme toggle switch
function ThemeToggleSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center">
      <Switch
      size="lg"
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </Flex>
  );
}

// Theme configuration for light and dark modes
const theme = extendTheme({
  styles: {
    global: (props: { colorMode: "light" | "dark" }) => ({
      body: {
        bg: props.colorMode === "dark" ? "black" : "white",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
});

// Header component containing the theme toggle switch and wallet connect button
function Header() {
  return (
    <Flex
      direction="row"
      width="100%"
      justify="space-between"
      padding="4"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <ThemeToggleSwitch />
      <ConnectWallet
        dropdownPosition={{
          side: "bottom",
          align: "center",
        }}
      />
    </Flex>
  );
}

// Content component containing the main content of the page
function Content() {
  const { colorMode } = useColorMode();
  const cards = [
    { title: "DAO", content: "DAO Dashboard" },
    { title: "Referee", content: "Referee Dashboard" },
    { title: "Grant Ship 1", content: "Grant Ship 1 Dashboard" },
    { title: "Grant Ship 2", content: "Grant Ship 2 Dashboard" },
    { title: "Grant Ship 3", content: "Grant Ship 3 Dashboard" },
    { title: "Grant Ship 4", content: "Grant Ship 4 Dashboard" },
    { title: "Grant Ship 5", content: "Grant Ship 5 Dashboard" },
    { title: "Grant Ship 6", content: "Grant Ship 6 Dashboard" },
  ];

  return (
    <main>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        padding="4"
      >
        <Box textAlign="center" marginBottom="4">
          <Box
            fontSize="6xl"
            fontWeight="extrabold"
            lineHeight="1.2"
            fontFamily="'Cinzel Decorative', cursive"
          >
            Welcome to{" "}
            <Box
              as="span"
              bgGradient="linear(#213147, #12AAFF, #213147)"
              bgClip="text"
              paddingTop="0.1em"
            >
              Grant Ships
            </Box>
          </Box>
          <Text fontSize="xl" fontWeight="bold" marginTop="2">
            An Evolutionary Grants Game
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgGradient="linear(#213147, #12AAFF, #213147)"
            borderRadius="sm"
            padding="1px"
            width="208px"
            height="56px"
            marginTop="10"
            marginLeft="auto"
            marginRight="auto"
          >
            <ChakraButton
              size="lg"
              height="48px"
              width="200px"
              border="0px"
              borderColor="white"
              borderRadius="lg"
              backgroundColor={colorMode === "dark" ? "black" : "white"}
              color={colorMode === "dark" ? "white" : "black"}
              onClick={() => window.open("https://dao-masons.gitbook.io/grant-ships-rule-book/")}
            >
              Rules
            </ChakraButton>
          </Box>
        </Box>
        <SimpleGrid columns={[1, 2, 4]} spacing="10" marginBottom="4">
  {cards.map((card, index) => (
    <Box
      key={index}
      bg={colorMode === "dark" ? "black" : "white"}
      borderRadius="md"
      textAlign="center"
      border="1px"
      borderColor={colorMode === "dark" ? "white" : "black"}
      width="200px"
      height="250px"
    >
      <Box
        padding="4"
        borderRadius="md"
        bg={colorMode === "dark" ? "black" : "white"}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text
          fontFamily="'Cinzel Decorative', cursive"
          fontSize="xl"
          fontWeight="bold"
          color={colorMode === "dark" ? "white" : "black"}
        >
          {card.title}
        </Text>
        <Text fontSize="sm" marginTop="2" color={colorMode === "dark" ? "white" : "black"}>
          {card.content}
        </Text>
        <ChakraButton
          size="md"
          width="100%"
          bg="#12AAFF" // Set the initial background color
          _hover={{ bg: "#213147", color: "white" }} // Set the hover background color and text color
        >
          <Icon path={mdiShipWheel} size={1} color="white" /> Enter
        </ChakraButton>
      </Box>
    </Box>
  ))}
</SimpleGrid>
      </Flex>
    </main>
  );
}


// Main Home component
export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header />
      <Content />
    </ChakraProvider>
  );
}
