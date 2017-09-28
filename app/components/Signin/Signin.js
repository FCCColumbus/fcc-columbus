import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

const Signin = () => (
  <div className={styles.signin}>
    <div className={styles.user}>
      <div className={styles.userWrap} style={{ height: 'auto' }}>

        <div className={styles.userLogo}>
          <img src='images/fccc-logo.png' alt='Free Code Camp Columbus logo' />
        </div>

        <div className={styles.userLogin}>
          <div className={styles.userTitle}>
            <h1>Sign In</h1>
          </div>
          <div className={styles.userForm}>
            <form method=' action='>
              <input
                id='userName'
                type='text'
                name='name'
                placeholder='Username' />
              <label className='sr-only' htmlFor='userName'>Username</label>
              <input
                id='userPassword'
                type='text'
                placeholder='Password' />
              <label className='sr-only' htmlFor='userPassword'>Password</label>
              <input
                type='submit'
                id='loginCheck'
                value='SUBMIT' />
              <input
                type='text'
                name='_gotcha'
                style={{ display: 'none' }} />
              <input
                type='hidden'
                name='_next'
                value='#' />
            </form>
          </div>
          <div className={styles.userInfo}>
            <p>Not a member? <Link className={styles.userLink} to='/#'>Sign up now</Link></p>
            <Link className={styles.userLink} to='#index-modal'>Forgot Password?</Link>
          </div>
        </div>

        <div className={`${styles.user} ${styles.none}`}>
          <div className={styles.userTitle}>
            <h1>Sign Up</h1>
          </div>
          <div className={styles.userForm}>
            <form method=' action='>
              <input
                id='userName'
                type='text'
                name='name'
                placeholder='Username' />
              <label className='sr-only' htmlFor='userName'>Username</label>

              <input
                id='userEmail'
                type='text'
                name='name'
                placeholder='Email' />
              <label className='sr-only' htmlFor='userName'>Email</label>

              <input
                id='userPassword'
                type='text'
                placeholder='Password' />
              <label className='sr-only' htmlFor='userPassword'>Password</label>

              <div className={styles.userTerms}>
                <input
                  name='terms' id='termsCheck' value='1'
                  type='checkbox' />
                <label className={styles.terms} htmlFor='termsCheck'>I accept the <Link to='/#'>Terms and Conditions</Link></label>
              </div>

              <input
                type='submit'
                id='loginCheck'
                value='SUBMIT' />
              <input
                type='text'
                name='_gotcha'
                style={{ display: 'none' }} />
              <input
                type='hidden'
                name='_next' value='#' />
            </form>
          </div>
          <div className={styles.userInfo}>
            <p>Already a member? <Link className={styles.userLink} to='/#'>Sign in now</Link></p>
          </div>
        </div>

      </div>
    </div>
  </div>
)

Signin.propTypes = {

}

export default Signin
