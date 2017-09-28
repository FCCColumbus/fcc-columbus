import React from 'react'
import { HeroContainer, AdminsContainer, CtaContainer, ResourcesContainer } from '../'
import styles from './styles.scss'

const HomeContainer = () => (
  <div>
    <HeroContainer />
    <hr className={styles.break} />
    <AdminsContainer />
    <hr className={styles.break} />
    <CtaContainer />
    <hr className={styles.break} />
    <ResourcesContainer />
  </div>
)

export default HomeContainer
