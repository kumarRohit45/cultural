import React from "react";
import { Avatar, Button, Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SignoutUserSuccess } from "../redux/User/userSlice";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = useLocation().pathname;

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(SignoutUserSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            {currentUser && currentUser.isAdmin && (
              <Link to="/dashboard-admin">
                <Dropdown.Item>Admin Dashboard</Dropdown.Item>
              </Link>
            )}
            {currentUser && currentUser.isPartner && (
              <Link to="/dashboard-partner">
                <Dropdown.Item>Partner Dashboard</Dropdown.Item>
              </Link>
            )}
            {currentUser && !currentUser.isAdmin && !currentUser.isPartner && (
              <Link to="/Dashboard">
                <Dropdown.Item>Dashboard</Dropdown.Item>
              </Link>
            )}
            {currentUser.isAdmin && (
              <Link to="/dashboard-admin">
                <Dropdown.Item>Dashboard</Dropdown.Item>
              </Link>
            )}
            {currentUser.isPartner && (
              <Link to="/dashboard-partner">
                <Dropdown.Item>Dashboard</Dropdown.Item>
              </Link>
            )}
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <>
            <Link to="/loginas">
              <Button>Login</Button>
            </Link>
            <Link to="/sign-up">
              <Button outline>Sign Up</Button>
            </Link>
          </>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        {currentUser && currentUser.isAdmin && (
          <Navbar.Link active={path === "/dashboard-admin"} as={"div"}>
            <Link to="/dashboard-admin">Admin Dashboard</Link>
          </Navbar.Link>
        )}
        {currentUser && currentUser.isPartner && (
          <Navbar.Link active={path === "/dashboard-partner"} as={"div"}>
            <Link to="/dashboard-partner">Partner Dashboard</Link>
          </Navbar.Link>
        )}
        {currentUser && !currentUser.isAdmin && !currentUser.isPartner && (
          <Navbar.Link active={path === "/Dashboard"} as={"div"}>
            <Link to="/Dashboard">Dashboard</Link>
          </Navbar.Link>
        )}
        <Navbar.Link active={path === "/Search"} as={"div"}>
          <Link to="/Search">Pricing</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Contact"} as={"div"}>
          <Link to="/Contact">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
