import * as React from "react";
import Button from "../Button/Button";

export type NavbarProps = {
  catLinks: string[];
};

const Navbar: React.FC<NavbarProps> = ({ catLinks }) => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-top__mobile">
          <Button label="LOG IN" />
          <img src="/logo.svg" alt="" />
          <Button appendIcon="search" />
        </div>
        <div className="navbar-top__desktop">
          <img src="/logo.svg" alt="" />
          <div className="navbar-top__desktop-right">
            <input
              type="text"
              name="searchField"
              id="searchField"
              placeholder="Search all cats..."
            />
            <Button label="Free Account" />
            <Button label="Log In" />
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <video
          src="catCuddle.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          controls={false}
        ></video>
        <Button label="Free Account" />
      </div>
      <div className="navbar-cat-links">
        <div className="navbar-cat-links-container">
          {catLinks.map((catLink, index) => (
            <Button key={index} label={catLink} />
          ))}
        </div>
        <Button label="Show More" />
      </div>
    </div>
  );
};

export default Navbar;
