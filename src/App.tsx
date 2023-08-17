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
import { GiShoonerSailboat, GiBoatHorizon, GiWhistle, GiShipWheel, GiWhaleTail, GiCastle, GiAnchor, GiBoatPropeller, GiWoodCanoe } from "react-icons/gi";
import DAODash from './pages/daoDash';
import RefDash from './pages/refDash';
import GS1Dash from './pages/GS1Dash';
import GS2Dash from './pages/GS2Dash';
import GS3Dash from './pages/GS3Dash';
import GS4Dash from './pages/GS4Dash';
import GS5Dash from './pages/GS5Dash';
import GS6Dash from './pages/GS6Dash';

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

function Content() {
  const navigate = useNavigate();
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

  const { colorMode } = useColorMode();

const cards = [
  { title: "DAO", icon: <GiCastle size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Referee Dashboard", icon: <GiWhistle size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Grant Ship 1", icon: <GiAnchor size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Grant Ship 2", icon: <GiBoatPropeller size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Grant Ship 3", icon: <GiShoonerSailboat size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Grant Ship 4", icon: <GiBoatHorizon size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Grant Ship 5", icon: <GiShipWheel size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Grant Ship 6", icon: <GiWhaleTail size={50} color={colorMode === "dark" ? "white" : "black"} /> },
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
      {/* Flex container to center the GiWoodCanoe icon both horizontally and vertically */}
      <Flex justifyContent="center" alignItems="center" width="100%">
        <GiWoodCanoe size={100} color={colorMode === "dark" ? "white" : "black"} /> {/* Logo with theme properties */}
      </Flex>
      <Box textAlign="center" marginBottom="4">
        {/* Heading */}
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
      <Box display="flex" justifyContent="center" alignItems="center">
        {card.icon} 
      </Box>
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
