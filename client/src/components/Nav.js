import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { SignUp } from "./SignUp";

export const Nav = () => {
  return (
    <>
      {localStorage.getItem("isAuthenticated") === true ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              backgroundColor: "lightblue",
              padding: "15px 0px",
            }}
          >
            <Link
              style={{
                marginRight: "1rem",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
              to="/"
            >
              Products
            </Link>
            <Link
              style={{
                marginRight: "1rem",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
              to="/add"
            >
              Add Product
            </Link>
            <Link
              style={{
                marginRight: "1rem",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
              to="/update"
            >
              Update Product
            </Link>
            <Link
              style={{
                marginRight: "1rem",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
              to="/logout"
            >
              Logout
            </Link>
            <Link
              style={{
                marginRight: "1rem",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
              to="/profile"
            >
              My Profile
            </Link>
          </div>
          {<Outlet />}
        </>
      ) : (
        <SignUp />
      )}
      <Footer />
    </>
  );
};
