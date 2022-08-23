import React from 'react'
import { DivCard, DivTextContainer, H3TextContainer, ImgCard, PStatus, PTitle } from '../styles/styles';

interface CharacterType {
    character: any;
}

export default function Character({ character }: CharacterType) {
    return (
        <DivCard>
            <ImgCard src={character.image} alt="" />
            <DivTextContainer>
                <H3TextContainer>
                    {character.name}
                </H3TextContainer>
                <PStatus>
                    {character.status} - {character.species}
                </PStatus>
                <PTitle>
                    Last seen on
                </PTitle>
                <p>{character.location.name}</p>
                <p>{character.gender}</p>
            </DivTextContainer>
        </DivCard>
    )
}
