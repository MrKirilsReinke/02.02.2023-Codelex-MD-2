import React from "react";
import style from "./CardSinger.module.scss";
import Button from "../Button/Button";

type CardSingerProps = {
  image: string;
  name: string;
  genre: string;
  onDelete: () => void;
  onEdit: () => void;
};

const CardSinger = ({ image, name, genre, onDelete, onEdit }: CardSingerProps) => {
  return (
    <div className={style["singer-card"]}>
      <img src={image} className={style["singer-card__img"]} alt="Singer-img" />
      <h4 className={style["singer-card__name"]}>{name}</h4>
      <p className={style["singer-card__genre"]}>{genre}</p>
      <div>
        <Button onClick={onEdit}>Edit</Button>
        &nbsp;
        <Button onClick={onDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default CardSinger;
