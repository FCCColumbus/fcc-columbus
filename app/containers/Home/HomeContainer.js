import React, { Fragment } from 'react'
import { HeroContainer, AdminsContainer, CtaContainer, ResourcesContainer } from '../'
import styles from './styles.scss'

const HomeContainer = () => (
  <Fragment>
    <HeroContainer />
    <hr className={styles.break} />
    <AdminsContainer />
    <hr className={styles.break} />
    <CtaContainer />
    <hr className={styles.break} />
    <ResourcesContainer />
  </Fragment>
)

export default HomeContainer
