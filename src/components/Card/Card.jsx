import {
  StyledNavLink,
  DivCard,
  ButtonCard,
  Image,
  H2Card,
} from "./style-card";


export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <DivCard>
      <ButtonCard onClick={() => onClose(id)}>X</ButtonCard>
      <Image src={image} alt={name} />
      <StyledNavLink to={`/detail/${id}`}>{name}</StyledNavLink>
      <H2Card>Especie: {species}</H2Card>
      <H2Card>Género: {gender}</H2Card>
    </DivCard>
  );
}
