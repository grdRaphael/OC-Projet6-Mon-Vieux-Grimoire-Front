import React from 'react';
import * as PropTypes from 'prop-types';

// Étoile exportée de la maquette Figma (pointes arrondies). La taille et la couleur
// viennent de la classe passée en props.
function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 23.0751 23.0751" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M10.7538 2.41221C11.0005 1.65295 12.0746 1.65295 12.3213 2.41221L13.9429 7.4028C14.0532 7.74236 14.3696 7.97225 14.7266 7.97225H19.9741C20.7724 7.97225 21.1043 8.99383 20.4585 9.46308L16.2132 12.5474C15.9244 12.7573 15.8035 13.1293 15.9138 13.4688L17.5354 18.4594C17.7821 19.2187 16.9131 19.85 16.2672 19.3808L12.022 16.2964C11.7331 16.0866 11.342 16.0866 11.0531 16.2964L6.8079 19.3808C6.16203 19.85 5.29302 19.2187 5.53972 18.4594L7.16127 13.4688C7.27159 13.1293 7.15073 12.7573 6.86189 12.5474L2.61664 9.46308C1.97077 8.99383 2.3027 7.97225 3.10104 7.97225H8.34846C8.70548 7.97225 9.02191 7.74236 9.13223 7.4028L10.7538 2.41221Z"
      />
    </svg>
  );
}

StarIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StarIcon;
