import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Button } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: mahmedsiddiqui333@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/MAhmedSid",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/muhammad-ahmed-siddiqui-webdeveloper/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { 
        setShow(false); 
      } else { 
        setShow(true);  
      }

 
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

    
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <Box
      zIndex={1}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={"auto"}
      translateY={show ? 0 : -200}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#041C32"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((item) => {
                return (
                  <Box key={item.url} _hover={{ textColor: "#ECB365" }}>
                    <a href={item.url}>
                      <FontAwesomeIcon icon={item.icon} size="2x" />
                    </a>
                  </Box>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Box _hover={{ textColor: "#ECB365" }}>
                <a
                  href="#projects"
                  onClick={() => {
                    handleClick("projects");
                  }}
                >
                  Projects
                </a>
              </Box>
              <Box _hover={{ textColor: "#ECB365" }}>
                <a
                  href="#contact-me"
                  onClick={() => {
                    handleClick("contactme");
                  }}
                >
                  Contact Me
                </a>
              </Box>
              <Button
                colorScheme="blue"
                variant="outline"
                _hover={{ bgColor: "rgb(255,255,255,0.10)" }}
                bgColor={"#041C32"}
                textColor={"#ECB365"}
              >
                Resume
              </Button>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
