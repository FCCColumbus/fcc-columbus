import React from 'react';
import HeroContainer from '../Hero/HeroContainer';
import AdminsContainer from '../Admins/AdminsContainer';
import CtaContainer from '../Cta/CtaContainer';
import ResourcesContainer from '../Resources/ResourcesContainer';
import Contributors from '../../components/Contributors';
import NetlifyBadge from '../../components/NetlifyBadge';
import styles from './styles.module.scss';

const HomeContainer = () => (
  <>
    <HeroContainer />
    <hr className={styles.break} />
    <AdminsContainer />
    <hr className={styles.break} />
    <Contributors />
    <hr className={styles.break} />
    <CtaContainer />
    <hr className={styles.break} />
    <ResourcesContainer />
    <hr className={styles.break} />
    <NetlifyBadge />
  </>
);

export default HomeContainer;
