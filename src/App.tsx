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
import { MdLightbulb } from 'react-icons/md';

// Function to create the theme toggle switch
function ThemeToggleSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center">
      <MdLightbulb size={24} style={{ marginRight: '10px', color: colorMode === "dark" ? "white" : "black" }} />
      <Switch
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
    { title: "DAO", content: "Info for DAO Members about the Overall Grant Program and Voting" },
    { title: "Referee Dashboard", content: "Referee Dashboard for Referee Actions and Information" },
    { title: "Grant Ship 1", content: "Gated Access for Grant Ship Team and Public Access" },
    { title: "Grant Ship 2", content: "Gated Access for Grant Ship Team and Public Access" },
    { title: "Grant Ship 3", content: "Gated Access for Grant Ship Team and Public Access" },
    { title: "Grant Ship 4", content: "Gated Access for Grant Ship Team and Public Access" },
    { title: "Grant Ship 5", content: "Gated Access for Grant Ship Team and Public Access" },
    { title: "Grant Ship 6", content: "Gated Access for Grant Ship Team and Public Access" },
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
            borderRadius="lg"
            padding="1px"
            width="202px"
            height="auto"
            marginTop="4"
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
          bgGradient="linear(#213147, #12AAFF, #213147)"
          bgClip="text"
        >
          {card.title}
        </Text>
        <Text fontSize="sm" marginTop="2" color={colorMode === "dark" ? "white" : "black"}>
          {card.content}
        </Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgGradient="linear(#213147, #12AAFF, #213147)"
          borderRadius="lg"
          padding="1px"
          width="auto"
          height="auto"
          marginTop="4"
          marginLeft="auto"
          marginRight="auto"
        >
          <ChakraButton
            size="lg"
            height="48px"
            width="150px"
            border="0px"
            borderColor="white"
            borderRadius="lg"
            backgroundColor={colorMode === "dark" ? "black" : "white"}
            color={colorMode === "dark" ? "white" : "black"}
            onClick={() => window.open("https://example.com/dashboard")}
          >
            Enter
          </ChakraButton>
        </Box>
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
