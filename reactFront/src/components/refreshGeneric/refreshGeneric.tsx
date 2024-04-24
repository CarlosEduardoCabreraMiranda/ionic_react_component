import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    RefresherEventDetail,
} from '@ionic/react';

import React, { useEffect, useState } from 'react';

import { chevronDownCircleOutline } from 'ionicons/icons';


    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }


interface genericRProps {}

const RefreshGeneric: React.FC<genericRProps> = ({ }) => {
    return (
        <>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent
                        pullingIcon={chevronDownCircleOutline}
                        pullingText="Pull to refresh"
                        refreshingSpinner="circles"
                        refreshingText="Refreshing..."
                    ></IonRefresherContent>
                </IonRefresher>
                <p>Recargar</p>

        </>
    );
};

export default RefreshGeneric;