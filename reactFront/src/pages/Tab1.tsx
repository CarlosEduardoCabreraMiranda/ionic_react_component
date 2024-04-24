import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import GenericButton from '../components/buttonGeneric/buttonGeneric';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>COOL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">COOL</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Cool page" btnLabelA='ADD COOL' btnLabelM='MODIFY COOL' btnLabelE='DELETE COOL 😢' btnLabelC='CONSULTAR COOL' btnClick={botonCoolAction} inputLabelName='Cool Name input' inputNamePlaceholder='Write your complete name'
          inputLabelBirthDate='Cool date picker' inputLabelPhone='Phone' inputPhonePlaceholder='Write down your phone' inputLabelEmail='Email' inputEmailPlaceholder='Put your email like this [your_email_address]@email.com'/>
      </IonContent>
    </IonPage>
  );
};

const botonCoolAction = () => {
  const palabra = "cool clickeado"
  console.log('Botón '+palabra);
  alert("el botón es "+palabra);
};

export default Tab1;
