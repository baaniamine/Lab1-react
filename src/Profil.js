import PropTypes from 'prop-types';

function Profil({ utilisateur, taille }) {
  return (
    <div>
      <img
        src={utilisateur.photo}
        alt={utilisateur.nom}
        width={taille}
        height={taille}
        style={{ objectFit: 'cover', borderRadius: '50%' }}
      />
      <p>{utilisateur.nom}</p>
    </div>
  );
}

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

Profil.defaultProps = {
  taille: 100,
};

export default Profil;
