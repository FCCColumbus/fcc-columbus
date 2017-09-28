import React from 'react'
import styles from './styles.scss'

const Cta = () => (
  <div className={styles.cta}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h2>{'Here\'s why you should join our open source community right now:'}</h2>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>{'You\'ll get help in real time from our community chat rooms and Facebook Group.'}</div>
        <div className={styles.item}>{'You\'ll meet up with other coders in the Columbus, OH Area.'}</div>
        <div className={styles.item}>{'You\'ll learn to code at your own pace, in your browser or on your phone.'}</div>
        <div className={styles.item}>{'You\'ll work through our focused, interactive courses and tutorials.'}</div>
        <div className={styles.item}>{'You\'ll learn state-of-the-art full stack JavaScript technologies.'}</div>
        <div className={styles.item}>{'You\'ll build projects that help nonprofits carry out their missions more effectively.'}</div>
        <div className={styles.item}>{'You\'ll assemble a portfolio of real apps used by real people.'}</div>
      </div>
    </div>
  </div>
)

export default Cta
