import React from "react";
import PropTypes from "prop-types";

import "./Tile.scss";

export default function Tile({
  title,
  description,
  imageLink,
  altText,
  tags,
  metaText,
  badgeText,
}) {
  return (
    <div className="tile">
      <div className="tile__image">
        <img src={imageLink} alt={altText} />
      </div>
      <div className="tile__content py-4 px-1">
        <div className="flex justify-between">
          <h3 className="tile__title text-2xl font-black subpixel-antialiased	font-sans">
            {title}
          </h3>
          <h3 className="tile__title text-2xl font-black subpixel-antialiased	font-sans">
            {badgeText}
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="tile__tags text-sm ">
            {tags.map((item, index) => {
              return (
                <span className="pr-2" key={index}>
                  {" "}
                  {item}{" "}
                </span>
              );
            })}
          </div>
          <div className="tile__metaText ">{metaText}</div>
        </div>
        <p className="tile__description">{description}</p>
      </div>
    </div>
  );
}

Tile.defaultProps = {
  title: "Title",
  description: "",
  imageLink: "https://picsum.photos/",
  altText: "",
  tags: [],
  metaText: "Action",
  badgeText: "N/A",
};

Tile.propTypes = {
  title: PropTypes.string,
  altText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
