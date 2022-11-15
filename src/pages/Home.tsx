import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { heartCircleOutline, list, personCircleOutline, toggleSharp } from "ionicons/icons";
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';


const Home: React.FC = () => {
  return (
    <>
        <IonMenu contentId='main'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Gebet App</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/">
                  <IonIcon slot='start' icon={list}/>
                  <IonLabel>Daftar Calon Pasangan</IonLabel>
                </IonItem>
                <IonItem button routerLink="/">
                  <IonIcon slot='start' icon={heartCircleOutline}/>
                  <IonLabel>Target Pasangan</IonLabel>
                </IonItem>
                <IonItem button routerLink="/">
                  <IonIcon slot='start' icon={personCircleOutline}/>
                  <IonLabel>Profile</IonLabel>
                </IonItem>
                <IonItem button routerLink="/">
                  <IonIcon slot='start' icon={toggleSharp}/>
                  <IonLabel>Welcome to Dark Mode</IonLabel>
                  <IonToggle></IonToggle>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Bosen Jombs</IonTitle>
                    <IonItem slot='end'>
                        <IonIcon icon={personCircleOutline}></IonIcon>
                    </IonItem>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    </>
  );
};

export default Home;
