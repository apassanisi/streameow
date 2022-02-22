import * as React from "react";
import Button from "../Button/Button";

export type KittenProps = {
  name: string;
  rating: number;
  region: string;
  favorite: boolean;
  image: string;
  size?: string;
};

const Kitten: React.FC<KittenProps> = ({ name, rating, region, favorite, image }) => {
  let ratingArray = [];
  for (let i = 0; i <= rating; i++) {
    ratingArray.push("placeholder");
  }
  const [ratingDisplay] = React.useState(ratingArray);

  return (
    <div className="kitten" style={{ backgroundImage: `url(${image})` }}>
      <div className="kitten__infobar">
        <div className="kitten__infobar-rating">
          {ratingDisplay.map((ratingIcon, index) => (
            <Button prependIcon="star" key={index} />
          ))}
        </div>
        <div className="kitten__infobar-bottom">
          <div className="kitten__infobar-bottom-left">
            <Button prependIcon={favorite ? "paw" : "circle"} />
            <span className="kitten__infobar-name">{name}</span>
          </div>
          <div className="kitten__infobar-bottom-right">
            <Button prependIcon={region} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitten;
