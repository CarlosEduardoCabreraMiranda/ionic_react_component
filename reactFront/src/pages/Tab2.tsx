import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Boooring</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Boooring</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Boring Page" btnLabel='Boring' btnClick={botonDoesntMatterAction} inputLabel='NO HAPPY 🥱' inputPlaceholder='does it matter bro?' />
      </IonContent>
    </IonPage>
  );
};

const botonDoesntMatterAction = () => {
  const palabra = "booring"
  console.log('Botón ' + palabra);
  alert("el botón es " + palabra);
};

export default Tab2;
