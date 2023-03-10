import { DivCard, ButtonCard, Image, H2Card } from "./style-card";
import { Link } from "react-router-dom";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <DivCard>
      <ButtonCard onClick={() => onClose(id)}>X</ButtonCard>
      <Image src={image} alt={name} />
      <Link to={`/detail/${id}`}>
        <H2Card className="title">{name}</H2Card>
      </Link>
      <H2Card className="rest">Especie: {species}</H2Card>
      <H2Card className="rest">Género: {gender}</H2Card>
    </DivCard>
  );
}
