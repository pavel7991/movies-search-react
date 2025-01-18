import styled from 'styled-components'
import { FC } from 'react'
import { useDebounce } from '../hooks/debounce'

const Form = styled.form`
  background-color: #58545b;
  padding: 20px;
  border-radius: 3px;
  margin: 50px 0;
  border: 1px solid #212529;
`

const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 10px;
`
const Input = styled.input`
  width: 100%;
  border: none;
  height: 30px;
  padding: 0 10px;
  font-size: 16px;
`

interface FormSearchProps {
  onSearch: (query: string) => void
}

const FormSearch: FC<FormSearchProps> = ({ onSearch }) => {
  const debounce = useDebounce()

  const inputSearchHandler = (value: string) => {
    debounce(() => {
      const searchQuery = value.trim()
      if (!searchQuery || searchQuery.length < 4) return
      onSearch(searchQuery)
    }, 1500)
  }

  return (
    <Form>
      <Label htmlFor="search-movie">Пошук фільму:</Label>
      <Input
        type="search"
        id="search-movie"
        placeholder="Введіть назву фільму"
        onChange={(e) => inputSearchHandler(e.target.value)}
      />
    </Form>
  )
}

export default FormSearch
