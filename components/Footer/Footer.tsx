import * as React from "react";
import Button from "../Button/Button";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__left-discover">
          <Button prependIcon={"discover"} label="Discover" />
          <Button label="Home" />
          <Button label="New Cats" />
          <Button label="GOLD Shows" />
        </div>
        <div className="footer__left-support">
          <Button prependIcon={"support"} label="Support" />
          <Button label="Support" />
          <Button label="Live Cat Support" />
          <Button label="Call Us" />
          <Button label="WhatsCat" />
          <Button label="Email Us" />
          <Button label="QAT" />
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right-buttons">
          <Button label="Send Us Your Cat" />
          <Button label="Become A Cat" />
          <Button label="Site Language" appendIcon="down" />
        </div>
        <div className="footer__right-extras">
          <div className="footer__right-extras-terms">
            <Button label="Terms and Catitions" />
            <Button label="Privacy Policy" />
            <Button label="DMCA Notice of Copyright Infringement" />
            <Button label="Mouse Removal" />
          </div>
          <p>All cats appearing on this website are adorable.</p>
          <p>Not © 2022 streameow.com. No rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
