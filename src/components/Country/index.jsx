import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({ info, width, height }) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.propTypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  width: PropTypes.number,
  height: PropTypes.number,
};

Country.defaultProps = {
  info: {
    imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
    name: 'アメリカ',
  },
  width: 120,
  height: 80
};