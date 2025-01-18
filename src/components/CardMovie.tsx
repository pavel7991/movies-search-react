import { FC } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  background: #ccc;
  border-radius: 5px;
  overflow: hidden;
  aspect-ratio: 1 / 1.5;
  padding: 20px;
  border: 1px solid #fff;
`
const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 40px 25px 20px;
  z-index: 1;
`
const NameMovie = styled.h5`
  font-weight: 400;
  font-size: 18px;
`
const Poster = styled.img`
  display: block;
  position: absolute;
  inset: 0;
  object-fit: fill;
  height: 100%;
  width: 100%;
`

interface CardMovieInterface {
  title: string
  poster: string
  year: string
}

const CardMovie: FC<CardMovieInterface> = ({ title, poster, year }) => {
  return (
    <Card>
      <Overlay>
        <NameMovie>{title}</NameMovie>
        <p>{year}</p>
      </Overlay>
      <Poster src={poster} />
    </Card>
  )
}

export default CardMovie
