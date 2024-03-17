import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex flex-col py-2">
        <Typography variant="h6" color="blue-gray" className="font-bold mb-1">
          {title}
        </Typography>
        <Typography variant="paragraph" className="text-xs text-blue-gray-500">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);

  const handleMegaMenuToggle = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <List className="  mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
        onClick={handleMegaMenuToggle}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
        onClick={handleMegaMenuToggle}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Pages</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
        onClick={handleMegaMenuToggle}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">News</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
        onClick={handleMegaMenuToggle}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Elements
        </ListItem>
      </Typography>
      {isMegaMenuOpen && <NavListMenu />}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    
    <Navbar
      fullWidth={true}
      className=" fixed z-10 px-4 py-2   bg-white shadow-lg"
    >
      <div className=" flex items-center justify-between text-blue-gray-900 w-full">
        <div className="flex items-center">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            <img
              src="https://prium.github.io/elixir/v3.0.0/assets/img/logo-dark.png"
              alt=""
              className="h-10"
            />
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
        </div>
        <div className="hidden   gap-2 lg:flex">
          <Button
            className="w-48 rounded-[50px] hover:bg-black hover:text-white "
            variant="outlined"
            size="md"
          >
            Purchase
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            className=" rounded-[50px] hover:bg-black hover:text-white "
            variant="outlined"
            size="md"
            fullWidth
          >
            Purchase
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
