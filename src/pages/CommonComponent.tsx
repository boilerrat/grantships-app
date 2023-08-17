import React, { useState } from 'react';
import { Box, Button as ChakraButton, useColorMode, Flex } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

// Define the ComingSoon component, accepting an IconComponent as a prop
const ComingSoon: React.FC<{ IconComponent: React.ElementType }> = ({ IconComponent }) => {
  // Hook to get the current color mode (dark or light)
  const { colorMode } = useColorMode();

  const quotes = [
    "A smooth sea never made a skilled sailor.- Franklin D. Roosevelt",
    "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.- William Arthur Ward",
    "It is not the ship so much as the skillful sailing that assures the prosperous voyage.- George William Curtis",
    "To reach a port, we must set sail. Sail, not tie at anchor. Sail, not drift.- Franklin D. Roosevelt",
    "The only way to be sure of catching a train is to miss the one before it. - G.K. Chesterton (On missing a ship)",
    "At sea, I learned how little a person needs, not how much. - Robin Lee Graham",
    "I must go down to the seas again, to the lonely sea and the sky, and all I ask is a tall ship and a star to steer her by. - John Masefield",
    "The sea, once it casts its spell, holds one in its net of wonder forever. - Jacques Cousteau",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "Indecision may or may not be my problem. - Jimmy Buffett (Singer, sailor, and author of 'A Pirate Looks at Fifty')",
  ];

   // State to manage the current quote index, initialized to 0
   const [quoteIndex, setQuoteIndex] = useState(0);

   // Function to switch to the next quote, cycling back to the beginning if at the end
   const nextQuote = () => {
     setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
   };
 
   // useNavigate hook to navigate back to the homepage
   const navigate = useNavigate();
 
   // Function to navigate back to the homepage
   const goHome = () => {
     navigate('/');
   };
 
   return (
     <Box
       textAlign="center"
       padding="4"
       minHeight="100vh"
       display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
     >
       {/* Flex container to center the IconComponent */}
       <Flex justifyContent="center" alignItems="center" marginBottom="8">
         {/* Render the IconComponent with size 175 and color based on theme */}
         <IconComponent size={175} color={colorMode === "dark" ? "white" : "black"} />
       </Flex>
       {/* Heading with gradient text effect */}
       <Box
         fontSize="6xl"
         fontWeight="extrabold"
         lineHeight="1.2"
         fontFamily="'Cinzel Decorative', cursive"
         bgGradient="linear(#213147, #12AAFF, #213147)"
         bgClip="text"
       >
         ...Coming Soon
       </Box>
       {/* Display the current quote */}
       <Box fontSize="xl" fontWeight="bold" marginTop="2">
         {quotes[quoteIndex]}
       </Box>
       {/* Button to switch to the next quote */}
       <ChakraButton
         size="lg"
         height="48px"
         width="200px"
         borderRadius="lg"
         marginTop="4"
         onClick={nextQuote}
       >
         Next Quote
       </ChakraButton>
       {/* Button to navigate back to the homepage */}
       <ChakraButton
         size="lg"
         height="48px"
         width="200px"
         borderRadius="lg"
         marginTop="4"
         onClick={goHome}
       >
         Return Home
       </ChakraButton>
     </Box>
   );
 };
 
 export default ComingSoon;