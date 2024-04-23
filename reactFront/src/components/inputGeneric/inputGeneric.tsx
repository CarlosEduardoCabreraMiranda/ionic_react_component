import { IonInput , IonItem} from '@ionic/react';

interface genericBProps {
    label: string; // Atributo personalizable: etiqueta del botón
    color?: string; // Atributo opcional: color del botón
    placeholder: string;

}

const GenericInput: React.FC<genericBProps> = ({ label, color = 'primary', placeholder}) => {
    return (
        <IonItem>
            <IonInput color={color} label={label} labelPlacement='floating' placeholder={placeholder}>
            </IonInput>
        </IonItem>
    );
};

export default GenericInput;