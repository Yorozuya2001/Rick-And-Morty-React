import { DivCard, ButtonCard, Image, H2Card } from "./style-card";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <DivCard>
      <ButtonCard onClick={onClose}>X</ButtonCard>
      <Image src={image} alt={name} />
      <H2Card className="title">{name}</H2Card>
      <H2Card className="rest">Especie: {species}</H2Card>
      <H2Card className="rest">Género: {gender}</H2Card>
    </DivCard>
  );
}
