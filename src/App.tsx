import {
  ChakraProvider,
  useColorMode,
  Button as ChakraButton,
  Box,
  Text,
  Flex,
  SimpleGrid,
  Link,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraButton onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </ChakraButton>
  );
}

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

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Content />
    </ChakraProvider>
  );
}

function Content() {
  const { colorMode } = useColorMode(); // Get the current color mode
  const cards = [
    "DAO Dashboard",
    "Referee Dashboard",
    "Grant Ship 1",
    "Grant Ship 2",
    "Grant Ship 3",
    "Grant Ship 4",
    "Grant Ship 5",
    "Grant Ship 6",
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
        <Flex
          direction="row"
          width="100%"
          justify="space-between"
          padding="4"
          position="absolute"
          top="0"
          left="0"
          right="0"
        >
          <ThemeToggleButton />
          <ConnectWallet
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
          />
        </Flex>
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
              bgGradient="linear(to-l, #7928CA, #FF0080)"
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
            bgGradient="linear(to-l, #7928CA, #FF0080)"
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
              backgroundColor={colorMode === "dark" ? "black" : "white"} // Set background based on color mode
              color={colorMode === "dark" ? "white" : "black"} // Set text color based on color mode
              onClick={() => window.open("https://dao-masons.gitbook.io/grant-ships-rule-book/")}
            >
              Rules
            </ChakraButton>
          </Box>
        </Box>
        <SimpleGrid columns={[1, 2, 4]} spacing="10" marginBottom="4">
          {cards.map((title, index) => (
            <Box
              key={index}
              bg={colorMode === "dark" ? "black" : "white"} // Set background based on color mode
              borderRadius="md"
              textAlign="center"
              border="1px" // Set border thickness
              borderColor={colorMode === "dark" ? "white" : "black"} // Set border color based on color mode
              width="200px"
              height="250px"
            >
              <Box
                padding="4"
                borderRadius="md"
                bg={colorMode === "dark" ? "black" : "white"} // Set inner box background based on color mode
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text
                  fontFamily="'Cinzel Decorative', cursive"
                  fontSize="xl"
                  fontWeight="bold"
                  color={colorMode === "dark" ? "white" : "black"} // Set title text color based on color mode
                >
                  {title}
                </Text>
                <Text fontSize="sm" marginTop="2" color={colorMode === "dark" ? "white" : "black"}> // Set Lorem Ipsum text color based on color mode
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Link href="#" marginTop="4">
                  <ChakraButton size="sm" colorScheme="purple">
                    Dashboard
                  </ChakraButton>
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </main>
  );
}
