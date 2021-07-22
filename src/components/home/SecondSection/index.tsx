import Container from 'components/common/Container'
import PromoCarousel from './PromoCarousel'

import styles from './SecondSection.module.css'
import 'react-multi-carousel/lib/styles.css'

const SecondSection = () => {
  ``
  return (
    <section className={styles.section}>
      <Container>
        <h3 className="text-heading-3 text-white font-label font-bold pt-14 mb-4">
          Promo Liburan
        </h3>
        <PromoCarousel />
      </Container>
    </section>
  );
};

export default SecondSection