import Link from "next/link";
import classes from "./navbar.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { GiHomeGarage } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          <div className={classes.logo}>
            <GiHomeGarage /> Bayoot
          </div>
        </Link>
      </Box>
      <Spacer />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        fontSize="3xs"
        color={textColor}
        fontWeight="small"
        margin="3"
        gap="5"
        className={classes.nav}
      >
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/search" passHref>
          Search
        </Link>
        <Link href="/search?purpose=for-sale" passHref>
          Buy Property
        </Link>
        <Link href="/search?purpose=for-rent" passHref>
          Rent Property
        </Link>
      </Flex>
      <Box className={classes.menu}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outline"
            color="red.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
