// Importing necessary components, icons, and react-helmet for Open Graph metadata
import { Helmet } from 'react-helmet';
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
  Image,
  Spacer,
} from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { MdLightbulb, MdCopyright } from 'react-icons/md';
import { GiShoonerSailboat, GiBoatHorizon, GiWhistle, GiShipWheel, GiWhaleTail, GiLighthouse, GiAnchor, GiBoatPropeller, GiWoodCanoe } from "react-icons/gi";

import dmlogo from './dmlogo.svg';

import DAODash from './pages/daoDash';
import RefDash from './pages/refDash';
import GS1Dash from './pages/GS1Dash';
import GS2Dash from './pages/GS2Dash';
import GS3Dash from './pages/GS3Dash';
import GS4Dash from './pages/GS4Dash';
import GS5Dash from './pages/GS5Dash';
import GS6Dash from './pages/GS6Dash';

// Theme toggle switch component
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

// Theme configuration
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

// Header component
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

// Content component
function Content() {
  const navigate = useNavigate();
  const navigateToDashboard = (title: string) => {
    const paths: Record<string, string> = {
      "DAO": "/daoDash",
      "Referees": "/refDash",
      "Anchors": "/GS1Dash",
      "Props": "/GS2Dash",
      "Schooners": "/GS3Dash",
      "Yachty's": "/GS4Dash",
      "Navigators": "/GS5Dash",
      "Whales": "/GS6Dash",
    };
    navigate(paths[title]);
  };

  const { colorMode } = useColorMode();

const cards = [
  { title: "DAO", icon: <GiLighthouse size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Referees", icon: <GiWhistle size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Anchors", icon: <GiAnchor size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Props", icon: <GiBoatPropeller size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Schooners", icon: <GiShoonerSailboat size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Yachty's", icon: <GiBoatHorizon size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Navigators", icon: <GiShipWheel size={50} color={colorMode === "dark" ? "white" : "black"} /> },
  { title: "Whales", icon: <GiWhaleTail size={50} color={colorMode === "dark" ? "white" : "black"} /> },
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
      <Flex justifyContent="center" alignItems="center" width="100%" marginBottom="6">
        <GiWoodCanoe size={175} color={colorMode === "dark" ? "white" : "black"} /> {/* Logo with theme properties */}
      </Flex>
      <Box textAlign="center" marginBottom="0">
        {/* Heading */}
        <Box
          fontSize="6xl"
          fontWeight="extrabold"
          lineHeight="1.2"
          fontFamily="'Cinzel Decorative', cursive"
          marginBottom="10"
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
            marginTop="2"
            marginBottom ="20"
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
        <Helmet>
          <meta property="og:title" content="Grant Ships" />
          <meta property="og:description" content="An Evolutionary Grants Game" />
          <meta property="og:url" content="https://www.grantships.fun" />
          <meta property="og:image" content={dmlogo} />
          <meta property="og:type" content="website" />
        </Helmet>
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
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

function Footer() {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "white" : "black";
  const textColor = colorMode === "dark" ? "black" : "white";

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      padding="0" // Reduced padding
      bg={bgColor}
      color={textColor}
      width="100%"
    >
      {/* Empty Flex to keep space on the left */}
      <Flex align="center"></Flex>
      <Flex align="center" marginRight="6"> {/* Adjusted marginRight */}
        <MdCopyright size={16} color={textColor} />
        <Text fontSize="sm" marginRight="2" color={textColor}>
          Copyright 2023
        </Text>
        <Image
          src={dmlogo}
          alt="DAO Masons Logo"
          width="40px"
          height="40px"
          filter={colorMode === "dark" ? "invert(0%)" : "invert(100%)"}
          marginLeft="0"
        />
      </Flex>
    </Flex>
  );
}

