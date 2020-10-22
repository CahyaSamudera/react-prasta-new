import React from 'react';
import Icon1 from '../../images/tamansari.png';
import Icon2 from '../../images/macaca.png';
import Icon3 from '../../images/wn.png';
import Icon4 from '../../images/bosaqiqah.png';
import Icon5 from '../../images/id.png';
import Icon6 from '../../images/jooble.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesWrapper2,
  ServicesIcon,
  ServicesCard,
  ButtonProject,
} from './ProjectElement';
const Projects = () => {
  return (
    <ServicesContainer id='projects'>
      <ServicesH1>Projek Terbaru</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ButtonProject>
            {' '}
            <a
              href='https://tamansariskyhive.com/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: '#fff' }}>Kunjungi</span>
            </a>{' '}
          </ButtonProject>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ButtonProject>
            {' '}
            <a
              href='https://macaca.id/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: '#fff' }}>Kunjungi</span>
            </a>{' '}
          </ButtonProject>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ButtonProject>
            {' '}
            <a
              href='https://www.windanajibwedding.com/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: '#fff' }}>Kunjungi</span>
            </a>{' '}
          </ButtonProject>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ButtonProject>
            {' '}
            <a
              href='https://boss-aqiqah.com/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: '#fff' }}>Kunjungi</span>
            </a>{' '}
          </ButtonProject>
        </ServicesCard>
        {/* <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ButtonProject>
            {' '}
            <a
              href='http://idigitalproject.com/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: '#fff' }}>Kunjungi</span>
            </a>{' '}
          </ButtonProject>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ButtonProject>
            {' '}
            <a
              href='https://id.jooble.org/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: '#fff' }}>Kunjungi</span>
            </a>{' '}
          </ButtonProject>
        </ServicesCard> */}
      </ServicesWrapper>
      <ServicesH1>Rekan Kami</ServicesH1>
      <ServicesWrapper2>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ButtonProject>
            {' '}
            <a
              href='http://idigitalproject.com/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: '#fff' }}>Kunjungi</span>
            </a>{' '}
          </ButtonProject>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ButtonProject>
            {' '}
            <a
              href='https://id.jooble.org/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <span style={{ color: '#fff' }}>Kunjungi</span>
            </a>{' '}
          </ButtonProject>
        </ServicesCard>
      </ServicesWrapper2>
    </ServicesContainer>
  );
};

export default Projects;
