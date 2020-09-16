// Libs
import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Header from '../../components/Header';
import HeroCard from './components/HeroCard';
import {
  HeroDescription,
  HeroDescriptionBold,
  HeroDetailImage,
  HeroDetails,
  HeroInfo,
  HeroName,
  HeroStatus,
  HeroTexts,
  TitleDetails,
} from './components/Styled';

// Exibe os detalhes do herói selecionado na tela anteriors
function Details() {
  const history = useHistory();
  const heroDetail = history.location.state;

  return (
    <>
      <Header />
      <HeroInfo>
        <HeroDetailImage
          src={`${heroDetail.thumbnail.path}/landscape_incredible.${heroDetail.thumbnail.extension}`}
          alt={heroDetail.name}
        />
        <HeroTexts>
          <HeroName hasDescription={!!heroDetail.description}>
            {heroDetail.name}
          </HeroName>
          {heroDetail.description && (
            <>
              <HeroDescriptionBold>Biography</HeroDescriptionBold>
              <HeroDescription>{heroDetail.description}</HeroDescription>
            </>
          )}
        </HeroTexts>
      </HeroInfo>
      <HeroDetails>
        <TitleDetails>Character Details</TitleDetails>
        <HeroStatus>
          <HeroCard name="Comics" number={heroDetail.comics.available} />
          <HeroCard name="Series" number={heroDetail.series.available} />
          <HeroCard name="Stories" number={heroDetail.stories.available} />
          <HeroCard name="Events" number={heroDetail.events.available} />
        </HeroStatus>
      </HeroDetails>
    </>
  );
}

export { Details };
