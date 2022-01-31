import * as React from "react";
import Button from "../Button/Button";

export type SidebarProps = {
  catLinks: string[];
  categories: string[];
};

const Sidebar: React.FC<SidebarProps> = ({ catLinks, categories }) => {
  return (
    <div className="sidebar">
      <section className="sidebar__adorability">
        <Button label="Claws" />
        <Button label="Paws" />
      </section>
      <section className="sidebar__menu-items">
        <Button prependIcon="home" label="All Cat Cams" />
        <Button prependIcon="star" label="New Cats" />
        <Button prependIcon="gold" label="GOLD Shows" />
        <Button prependIcon="clock" label="Recently Viewed" />
      </section>
      <section className="sidebar__cat-links">
        <p>Trending</p>
        <div className="cat-links">
          <div className="cat-links-container">
            {catLinks.map((catLink, index) => (
              <Button key={index} label={catLink} />
            ))}
          </div>
          <Button label="Show More" />
        </div>
      </section>
      <section className="sidebar__categories">
        <p>Category Pages</p>
        <div className="sidebar__categories-list">
          {categories.map((category, index) => (
            <Button key={index} label={category} appendIcon="randomNum" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
