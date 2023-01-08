import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Oscar design's || Ayush Lohmod {year}</p>
    </footer>
  );
}

export default Footer;
