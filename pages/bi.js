import React from 'react';
// import styles from "./home.module.less";
import { i18n, Link, withTranslation } from '../i18n'


const Bi = ({t}) => {
  
  return <div>{t('title')}</div>
}

export default withTranslation('bi')(Bi)