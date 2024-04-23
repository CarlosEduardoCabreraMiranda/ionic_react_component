import { IonButton } from '@ionic/react';

interface genericBProps {
    label: string; // Atributo personalizable: etiqueta del botón
    color?: string; // Atributo opcional: color del botón
    onClick?: () => void;// Atributo opcional: función de clic
}

const GenericButton: React.FC<genericBProps> = ({ label, color = 'primary', onClick }) => {
    return (
        <div className='button'>
        <IonButton color={color} onClick={onClick}>
            {label}
        </IonButton>
        </div>
    );
};

export default GenericButton;