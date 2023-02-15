import React from 'react';
import style from './CardSinger.module.scss';
import Button from '../Button/Button';

type CardSingerProps = {
    image: string 
    name: string
    genre: string
    onDelete: () => void
    onEdit: () => void
}

const CardSinger = ({image, name, genre, onDelete, onEdit}: CardSingerProps) => {
    return (
        <div className={style.card}>
            <img src={image} alt="" width={300}/>
            <br />
            <span className={style.nameText}>
                {name}
            </span>
            <span className={style.genreText}>
                {genre}
            </span>
            <br />
            <br />
            <div className="buttons">
                <Button onClick={onEdit}>
                    Edit
                </Button>
                &nbsp;
                <Button onClick={onDelete}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default CardSinger;
