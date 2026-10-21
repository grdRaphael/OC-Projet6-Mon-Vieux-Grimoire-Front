/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import StarIcon from '../components/StarIcon/StarIcon';
import styles from '../components/Books/BookItem/BookItem.module.css';

// eslint-disable-next-line import/prefer-default-export
export function displayStars(rating) {
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < Math.round(rating)) {
      stars.push(<StarIcon key={`full-${i}`} className={styles.full} />);
    } else {
      stars.push(<StarIcon key={`empty-${i}`} className={styles.empty} />);
    }
  }
  return stars;
}
export function generateStarsInputs(rating, register, readOnly = false) {
  const stars = [];
  for (let i = 1; i < 6; i += 1) {
    if (rating > 0 && i <= Math.round(rating)) {
      stars.push(readOnly ? <StarIcon key={`full-${i}`} className={styles.full} /> : (
        <label key={`full-${i}`} htmlFor={`rating${i}`}>
          <StarIcon className={styles.full} />
          <input type="radio" value={i} id={`rating${i}`} {...register('rating')} readOnly={readOnly} />
        </label>
      ));
    } else {
      stars.push(readOnly ? <StarIcon key={`full-${i}`} className={styles.empty} /> : (
        <label key={`full-${i}`} htmlFor={`rating${i}`}>
          <StarIcon className={styles.empty} />
          <input type="radio" value={i} id={`rating${i}`} {...register('rating')} />
        </label>
      ));
    }
  }
  return stars;
}
