import Container from 'components/common/Container'

import styles from './TopSection.module.css'

const TopSection = () => {
  return (
    <section className={styles.header}>
      <Container>
        <h1>Hello!</h1>
      </Container>
    </section>
  )
}

export default TopSection