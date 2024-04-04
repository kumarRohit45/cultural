import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar fluid rounded className="container mx-auto">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/loginas">
          <Button>Login</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
