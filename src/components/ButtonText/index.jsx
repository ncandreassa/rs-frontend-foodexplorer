import { Container } from './styles'

export function ButtonText({
  title,
  icon: Icon,
  iconSize = 20,
  fontSize = '24px',
  fontWeight = '400',
  underline = false,
  ...rest
}) {
  return (
    <Container
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $underline={underline}
      type="button"
      {...rest}
    >
      {Icon && <Icon size={iconSize} />}
      {title}
    </Container>
  )
}