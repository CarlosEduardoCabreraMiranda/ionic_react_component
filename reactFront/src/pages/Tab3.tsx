import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import CustomPage from '../components/CustomPage';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>D1ST1NCT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">D1ST1NCT</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CustomPage/>
      </IonContent>
    </IonPage>
  );
};


export default Tab3;
