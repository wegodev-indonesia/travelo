import Container from 'components/common/Container'
import PromoCarousel from './PromoCarousel'
import Packages from './Packages'

import styles from './SecondSection.module.css'
import 'react-multi-carousel/lib/styles.css'

const SecondSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <PromoCarousel />
        <Packages />
      </Container>
    </section>
  );
};

export default SecondSection