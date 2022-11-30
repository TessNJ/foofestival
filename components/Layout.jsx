import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header>header content (Layout.jsx)</header>
      <main>{children}</main>
      <footer>footer content (Layout.jsx)</footer>
    </>
  );
}
