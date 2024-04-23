import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

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
        <ExploreContainer name="NOT THE STANDART" btnLabel='*_*' inputLabel='=/=\=' inputPlaceholder='4AF' btnClick={보톤고유작용}/>
      </IonContent>
    </IonPage>
  );
};

const 보톤고유작용 = () => {
  const 言葉 = "SHREK Once upon a time there was a lovely princess.But she had an enchantment upon her of a fearful sort which could only be broken by love's first kiss. She was locked away in a castle guarded by a terrible fire - breathing dragon. Many brave knights had attempted to free her from this dreadful prison, but non prevailed.She waited in the dragon's keep in the highest room of the tallest tower for her true love and true love's first kiss."
  console.log('Botón ' + 言葉);
  alert(言葉)
};
/*SHREK
Once upon a time there was a lovely
princess. But she had an
enchantment upon her of a fearful
sort which could only be broken by
love's first kiss. She was locked
away in a castle guarded by a
terrible fire-breathing dragon.
Many brave knights had attempted to
free her from this dreadful prison,
but non prevailed. She waited in
the dragon's keep in the highest
room of the tallest tower for her
true love and true love's first
kiss. (laughs) Like that's ever
gonna happen. What a load of -
(toilet flush)
Allstar - by Smashmouth begins to play. Shrek goes about his
day. While in a nearby town, the villagers get together to
go after the ogre.*/
export default Tab3;
