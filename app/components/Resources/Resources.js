import React from 'react'
import styles from './styles.scss'

const Resources = () => (
  <section className={styles.links}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h2>Useful Links</h2>
      </div>
      <div className={styles.item}>
        <a href="https://www.facebook.com/groups/free.code.camp.columbus/" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-facebook-square`} />
          </div>
        </a>
        <div className={styles.name}>
          <h3>Facebook Group</h3>
        </div>
      </div>
      <div className={styles.item}>
        <a href="https://www.twitter.com/fcccolumbus" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-twitter`} />
          </div>
        </a>
        <div className={styles.name}>
          <h3>Twitter</h3>
        </div>
      </div>
      <div className={styles.item}>
        <a href="https://www.freecodecamp.com/" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-free-code-camp`} />
          </div>
        </a>
        <div className={styles.name}>
          <h3>Free Code Camp</h3>
        </div>
      </div>
      <div className={styles.item}>
        <a href="http://forum.freecodecamp.com/" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-comments-o`} />
          </div>
        </a>
        <div className={styles.name}>
          <h3>FCC Forum</h3>
        </div>
      </div>
      <div className={styles.item}>
        <a href="https://github.com/FCCColumbus" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-github`} />
          </div>
        </a>
        <div className={styles.name}>
          <h3>Group GitHub</h3>
        </div>
      </div>
      <div className={styles.item}>
        <a
          href="https://drive.google.com/folderview?id=0B52DpJWs0V6GVjl5OS1SdnZ3T0E&usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-book`} />
          </div>
        </a>
        <div className={styles.name}>
          <h3>Online Library</h3>
        </div>
      </div>
    </div>
  </section>
)

export default Resources
