import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import classes from "./themeToggler.module.css";
import { useColorMode } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className={classes.theme}>
      {colorMode === "light" ? (
        <MdDarkMode onClick={toggleColorMode} style={{ color: "black" }} />
      ) : (
        <BsFillSunFill onClick={toggleColorMode} />
      )}
    </div>
  );
};

export default ThemeToggler;
