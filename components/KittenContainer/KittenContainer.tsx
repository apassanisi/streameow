import * as React from "react";
import Button from "../Button/Button";
import Kitten from "../Kitten/Kitten";

export type KittenContainerProps = {
  kittens: typeof Kitten[];
};

const breedOptions = [
  "Siamese",
  "Persian",
  "Maine Coon",
  "Bengal",
  "Sphynx",
  "Himalayan",
  "Shorthair",
];

const ageOptions = [
  "Junior 0.5+",
  "Prime (3-6)",
  "Mature (7-10)",
  "Senior (11-14)",
  "Super Senior 15+",
];

const featuresOptions = ["Party Chat", "Phone", "Video", "Fan Club"];

const fetishOptions = [
  "Clawing at your feet",
  "Knocking over fragile objects",
  "Hairballs",
  "Waking you up at 3am",
  "That lingering cat food smell",
];

const languageOptions = ["English", "Cat Noises"];

const KittenContainer: React.FC<KittenContainerProps> = ({ kittens }) => {
  return (
    <div className="kitten-container">
      <div className="kitten-container__top">
        <Button label="All Cats" appendIcon="reload" />
        <Button label="Filter" />
        <div className="kitten-container__top-filter">
          <div className="kitten-container__top-filter-left">
            <Button label="Breeds" appendIcon="down" dropdown={breedOptions} />
            <Button label="Age" appendIcon="down" dropdown={ageOptions} />
            <Button
              label="Features"
              appendIcon="down"
              dropdown={featuresOptions}
            />
            <Button
              label="Fetishes"
              appendIcon="down"
              dropdown={fetishOptions}
            />
            <Button
              label="Language"
              appendIcon="down"
              dropdown={languageOptions}
            />
          </div>
          <div className="kitten-container__top-filter-right">
            <Button appendIcon="largeTile" />
            <Button appendIcon="mediumTile" />
            <Button appendIcon="smallTile" />
          </div>
        </div>
      </div>
      <div className="kitten-container__kittens">
        {kittens.map((kitten: any, index) => (
          <Kitten
            key={index}
            name={kitten.name}
            rating={kitten.rating}
            region={kitten.region}
            favorite={kitten.favorite}
            image={kitten.image}
          />
        ))}
      </div>
    </div>
  );
};

export default KittenContainer;
