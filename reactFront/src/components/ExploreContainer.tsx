import './ExploreContainer.css';
import GenericButton from './buttonGeneric/buttonGeneric';
import GenericInput from './inputGeneric/inputGeneric';

interface ContainerProps {
  name: string;
  inputLabelName: string;
  inputNamePlaceholder: string;
  inputLabelBirthDate: string;
  inputLabelPhone: string;
  inputPhonePlaceholder: string;
  inputLabelEmail: string;
  inputEmailPlaceholder: string;
  btnLabelA: string;
  btnLabelM: string;
  btnLabelE: string;
  btnLabelC: string;
  btnClick?: () => void;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, inputLabelName, inputLabelBirthDate, inputLabelPhone, inputLabelEmail, btnLabelA, btnClick, inputNamePlaceholder, inputPhonePlaceholder, inputEmailPlaceholder,btnLabelM, btnLabelE, btnLabelC }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <GenericInput type='text' label={inputLabelName} placeholder={inputNamePlaceholder}/>
      <GenericInput type='date' label={inputLabelBirthDate} placeholder={null}/>
      <GenericInput type='tel' label={inputLabelPhone} placeholder={inputPhonePlaceholder} />
      <GenericInput type='email' label={inputLabelEmail} placeholder={inputEmailPlaceholder} />
      <GenericButton color="success" label={btnLabelA} onClick={btnClick}/>
      <GenericButton color="warning" label={btnLabelM} onClick={btnClick} />
      <GenericButton color="danger" label={btnLabelE} onClick={btnClick} />
      <GenericButton color="secondary" label={btnLabelC} onClick={btnClick} />
    </div>
  );
};

export default ExploreContainer;
