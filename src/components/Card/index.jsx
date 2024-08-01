import PropTypes from 'prop-types'
import styles from './index.module.css'

export const Card = () => {
  return (
    <div className={styles.card}></div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: null
}
