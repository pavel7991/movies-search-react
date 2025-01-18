import { useEffect, useState } from 'react'
import Container from './components/Container'
import { fetchData } from './utils/api'
import FormSearch from './components/FormSearch'
import GridCol from './components/GridCol'
import CardMovie from './components/CardMovie'

interface MovieInterface {
  Title: string
  Poster: string
  Year: string
  imdbID: string
}

const App = () => {
  const [moviesList, setMoviesList] = useState([])
  const [movieName, setMovieName] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = (query: string) => {
    setMovieName(query)
    console.log('Searching for movie:', query)
  }

  useEffect(() => {
    if (!movieName) return
    const fetchDataAndHandleloading = async () => {
      try {
        setIsLoading(true)
        await fetchData(movieName).then((res) => {
          console.log('res', res)
          console.log('res.Search', res.Search)
          console.log('movieName', movieName)
          setMoviesList(res.Search)
        })
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleloading()
  }, [movieName])

  return (
    <Container>
      <h1>Наш сервіс допоможе тобі швидко знайти фільм за назвою!</h1>
      <FormSearch onSearch={handleSearch} />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && moviesList.length > 0 && (
        <GridCol>
          {moviesList.map(({ Title: title, Poster: poster, Year: year, imdbID: id }: MovieInterface) => (
            <CardMovie key={id} title={title} poster={poster !== 'N/A' ? poster : '/no-image.png'} year={year} />
          ))}
        </GridCol>
      )}
    </Container>
  )
}

export default App
