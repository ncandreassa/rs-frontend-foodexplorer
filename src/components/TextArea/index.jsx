import { Container, TextAreaWrapper } from './styles'

export function TextArea({ label, bg, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <TextAreaWrapper bg={bg}>
        <textarea {...rest} />
      </TextAreaWrapper>
    </Container>
  )
}