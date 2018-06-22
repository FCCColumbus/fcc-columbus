import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const Resources = () => (
  <section className={styles.links}>
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h2>Useful Links</h2>
      </div>
      <div className={styles.item}>
        <Link to="https://www.facebook.com/groups/free.code.camp.columbus/" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-facebook-square`} />
          </div>
        </Link>
        <div className={styles.name}>
          <h2>Facebook Group</h2>
        </div>
      </div>
      <div className={styles.item}>
        <Link to="https://www.twitter.com/fcccolumbus" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-twitter`} />
          </div>
        </Link>
        <div className={styles.name}>
          <h2>Twitter</h2>
        </div>
      </div>
      <div className={styles.item}>
        <Link to="https://www.freecodecamp.com/" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-free-code-camp`} />
          </div>
        </Link>
        <div className={styles.name}>
          <h2>Free Code Camp</h2>
        </div>
      </div>
      <div className={styles.item}>
        <Link to="http://forum.freecodecamp.com/" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-comments-o`} />
          </div>
        </Link>
        <div className={styles.name}>
          <h2>FCC Forum</h2>
        </div>
      </div>
      <div className={styles.item}>
        <Link to="https://www.twitch.tv/fcccolumbus" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-twitch`} />
          </div>
        </Link>
        <div className={styles.name}>
          <h2>Twitch Channel</h2>
        </div>
      </div>
      <div className={styles.item}>
        <Link to="https://www.youtube.com/channel/UC6qdwVNZzr0dkQEF7SdsoAg" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-youtube`} />
          </div>
        </Link>
        <div className={styles.name}>
          <h2>Youtube Channel</h2>
        </div>
      </div>
      <div className={styles.item}>
        <Link to="https://github.com/FCCColumbus" target="_blank" rel="noopener noreferrer">
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-github`} />
          </div>
        </Link>
        <div className={styles.name}>
          <h2>Group GitHub</h2>
        </div>
      </div>
      <div className={styles.item}>
        <Link
          to="https://drive.google.com/folderview?id=0B52DpJWs0V6GVjl5OS1SdnZ3T0E&usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.logo}>
            <i className={`${styles.icon} fa fa-fw fa-book`} />
          </div>
        </Link>
        <div className={styles.name}>
          <h2>Online Library</h2>
        </div>
      </div>
    </div>
  </section>
)

export default Resources
