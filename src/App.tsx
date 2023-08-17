// Importing necessary components and icons
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import DAODash from './pages/daoDash';
import RefDash from './pages/refDash';
import GS1Dash from './pages/GS1Dash';
import GS2Dash from './pages/GS2Dash';
import GS3Dash from './pages/GS3Dash';
import GS4Dash from './pages/GS4Dash';
import GS5Dash from './pages/GS5Dash';
import GS6Dash from './pages/GS6Dash';

// Function to create the theme toggle switch
function ThemeToggleSwitch() {
  // Using Chakra UI's color mode hook to get the current color mode and function to toggle it
  const { colorMode, toggleColorMode } = useColorMode();

  // Returning a Flex container with the lightbulb icon and a switch
  // The color of the lightbulb changes based on the current color mode
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
// This configuration sets the background and text color based on the current color mode
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
  
  // Navigation though the stormy ocean
  const navigate = useNavigate();
  
  // update the onClick handler for each button to navigate to the corresponding dashboard.
  const navigateToDashboard = (title: string) => {
    const paths: Record<string, string> = {
      "DAO": "/daoDash",
      "Referee Dashboard": "/refDash",
      "Grant Ship 1": "/GS1Dash",
      "Grant Ship 2": "/GS2Dash",
      "Grant Ship 3": "/GS3Dash",
      "Grant Ship 4": "/GS4Dash",
      "Grant Ship 5": "/GS5Dash",
      "Grant Ship 6": "/GS6Dash",
    };
  
    navigate(paths[title]);
  };

  // Using Chakra UI's color mode hook to get the current color mode
  const { colorMode } = useColorMode();

  // Defining the content for the cards
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
                    onClick={() => navigateToDashboard(card.title)}
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
// This component wraps the entire application with the ChakraProvider to enable Chakra UI components
// It also includes the ColorModeScript to set the initial color mode
// The Header and Content components are rendered inside this component
export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/daoDash" element={<DAODash />} />
          <Route path="/refDash" element={<RefDash />} />
          <Route path="/GS1Dash" element={<GS1Dash />} />
          <Route path="/GS2Dash" element={<GS2Dash />} />
          <Route path="/GS3Dash" element={<GS3Dash />} />
          <Route path="/GS4Dash" element={<GS4Dash />} />
          <Route path="/GS5Dash" element={<GS5Dash />} />
          <Route path="/GS6Dash" element={<GS6Dash />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
