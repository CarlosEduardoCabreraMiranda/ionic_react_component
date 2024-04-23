import './ExploreContainer.css';
import GenericButton from './buttonGeneric/buttonGeneric';
import GenericInput from './inputGeneric/inputGeneric';

interface ContainerProps {
  name: string;
  btnLabel: string;
  inputLabel: string;
  inputPlaceholder: string;
  btnClick?: () => void;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, btnLabel, btnClick, inputLabel, inputPlaceholder }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <GenericButton label={btnLabel} onClick={btnClick}/>
      <GenericInput label={inputLabel} placeholder={inputPlaceholder}/>
    </div>
  );
};

export default ExploreContainer;
