import { IonInput , IonItem} from '@ionic/react';

interface genericBProps {
    label: string; // Atributo personalizable: etiqueta del botón
    color?: string; // Atributo opcional: color del botón
    placeholder: string;
    type: "text" | "password" | "number" | "email" | "tel" | "date";
}

const GenericInput: React.FC<genericBProps> = ({ label, color = 'primary', placeholder, type}) => {
    return (
        <IonItem>
            <IonInput color={color} label={label} labelPlacement='floating' placeholder={placeholder} type={type}>
            </IonInput>
        </IonItem>
    );
};

export default GenericInput;