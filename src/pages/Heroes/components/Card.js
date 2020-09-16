import React from 'react';
import { HeroCardName, HeroName, HeroPicture } from './Styled';

function Card({ hero, onClick }) {
  return (
    <HeroPicture
      image={`${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`}
      alt={hero.name}
      onClick={onClick}
    >
      <HeroCardName>
        <HeroName>{hero.name}</HeroName>
      </HeroCardName>
    </HeroPicture>
  );
}

export default Card;
