import { Container } from './styles'

export function Tags({ items = [] }) {
  return (
    <Container>
      {items.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </Container>
  )
}