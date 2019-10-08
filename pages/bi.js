import React from 'react';
// import styles from "./home.module.less";
import { Button } from 'antd';
import { i18n, Link, withTranslation } from '../i18n';

const Bi = ({ t }) => {
  return (
    <>
      <div>{t('title')}</div>
      <Button
        onClick={() => {
          console.log('sd');
        }}
      >
        点击测试
      </Button>
    </>
  );
};

export default withTranslation('bi')(Bi);
