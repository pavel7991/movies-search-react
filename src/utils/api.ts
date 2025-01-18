import axios from 'axios'

export const fetchData = async (name: string) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=e70e8a97&s=${name}`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`)
    }
    throw new Error('An unknown error occurred')
  }
}
