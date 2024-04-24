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
        <ExploreContainer name="Boring Page" btnLabelA='Normal Add' btnLabelC='Search Normal People' btnLabelE='Delete Normal People' btnLabelM='Modify normal People' btnClick={botonDoesntMatterAction} inputLabelName='NO HAPPY NAME 🥱' inputNamePlaceholder='does your name matter bro?' inputLabelBirthDate='how old are you?⌛' inputLabelPhone='Phone💼' inputPhonePlaceholder='Write down your phone already' inputLabelEmail='Email' inputEmailPlaceholder='Digit your email like ... super_complex_address@mail.com'/>
      </IonContent>
    </IonPage>
  );
};

const botonDoesntMatterAction = () => {
  const palabra = "booring clickeado"
  console.log('Botón ' + palabra);
  alert("el botón es " + palabra);
};

export default Tab2;
