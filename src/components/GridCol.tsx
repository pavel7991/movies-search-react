import { ReactNode } from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  text-align: center;
  padding-bottom: 100px;
`

const GridCol = ({ children }: { children: ReactNode }) => <Grid>{children}</Grid>

export default GridCol
