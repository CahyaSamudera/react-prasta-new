import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesCard,
  ServicesH2,
  ServicesP,
} from './ServicesElements';
const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Layanan Kami</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Web Development</ServicesH2>
          <ServicesP>
            Kami membantu kamu untuk membuat website profesional untuk keperluan
            bisnis ataupun personal kamu.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Digital Marketing</ServicesH2>
          <ServicesP>
            Digital marketing memudahkan kamu memasarkan bisnismu dengan
            cara-cara yang lebih praktis, efektif dan efisien.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>E-Commerce</ServicesH2>
          <ServicesP>
            Miliki toko online untuk produk-produk yang kamu jual sendiri dengan
            transaksi yang langsung masuk ke rekening kamu.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
