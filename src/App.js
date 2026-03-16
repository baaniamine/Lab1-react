import Greeting from './Greeting';
import HelloWorld from './HelloWorld';
import ListeCourses from './ListeCourses';
import Profil from './Profil';
import Voiture from './Voiture';

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  const coursesMatin = ['Pain', 'Lait', 'Oeufs'];
  const coursesSoir = ['Pates', 'Tomates', 'Fromage'];

  return (
    <div style={{ padding: '24px' }}>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Greeting prenom="Mohamed" />

      <Profil utilisateur={utilisateur} taille={150} />

      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="Renault" modele="Clio" couleur="Bleu" />
      <Voiture marque="Peugeot" modele="208" couleur="Noir" />

      <h3>Courses matin</h3>
      <ListeCourses elements={coursesMatin} />

      <h3>Courses soir</h3>
      <ListeCourses elements={coursesSoir} />
    </div>
  );
}

export default App;
