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
        <ExploreContainer name="Cool page" btnLabel='Cool' btnClick={botonCoolAction} inputLabel='Cool input' inputPlaceholder='Cool word'/>
      </IonContent>
    </IonPage>
  );
};

const botonCoolAction = () => {
  const palabra = "cool"
  console.log('Botón '+palabra);
  alert("el botón es "+palabra);
};

export default Tab1;
