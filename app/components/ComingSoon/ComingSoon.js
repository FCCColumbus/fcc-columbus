import React from 'react'
import PropTypes from 'prop-types'

const ComingSoon = ({ title }) => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {title} Page Coming Soon.
  </div>
)

ComingSoon.propTypes = {
  title: PropTypes.string,
}

export default ComingSoon
