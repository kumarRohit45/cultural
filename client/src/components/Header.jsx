import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar fluid rounded className="container mx-auto">
      <Link to="/">
        <Navbar.Brand>
          <img
            src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Cultural Tourism
          </span>
        </Navbar.Brand>
      </Link>
      <div className="flex md:order-2 gap-4">
        <Link to="/loginas">
          <Button>Login</Button>
        </Link>
        <Link to="/sign-up">
          <Button outline>Sign Up</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/" active>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Search">Pricing</Link>
        <Link to="/Contact">Contact</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
