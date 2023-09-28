
import { Container } from '@mui/material'
import LayoutContainer from '../companents/layoutContainer'
import HomeDB from '../db/homeDB'
import ContentInput from '../layout/content-input'
import Hero from '../layout/hero'
import Aside from '../layout/aside'

function About() {
  return (
    <LayoutContainer>
          <Hero/>
          <Container>
            <Aside/>
            <HomeDB/>
            <ContentInput/>
          </Container>
    </LayoutContainer>
  )
}

export default About