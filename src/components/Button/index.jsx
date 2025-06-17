import { Container } from './styles';

export function Button({
  title,
  icon: Icon,
  image,
  background,
  width,
  height,
  fontSize,
  marginTop,
  ...rest
}) {
  return (
    <Container
      type="button"
      background={background}
      width={width}
      height={height}
      fontSize={fontSize}
      marginTop={marginTop}
      {...rest}
    >
      {image && <img src={image} alt="ícone do botão" className="button-image" />}
      {!image && Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
