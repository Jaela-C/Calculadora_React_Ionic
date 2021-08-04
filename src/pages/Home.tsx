import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {

  const numberGroups = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, 'c', '/', '=']
  ];
  const onButtonPress = (symbol: string) =>
  {
    
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="calc-button">
      {numberGroups}
      </IonContent>
    </IonPage>
  );
};

export default Home;
