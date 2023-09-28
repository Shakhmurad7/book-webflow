
import { Container } from '@mui/material'
import LayoutContainer from '../companents/layoutContainer'
import Content from '../db/content'
import HomeDB from '../db/homeDB'
import ContentInput from '../layout/content-input'
import Hero from '../layout/hero'

function About() {
  return (
    <LayoutContainer>
          <Hero/>

          <Container>

            <HomeDB/>
            <ContentInput/>
          </Container>
    </LayoutContainer>
  )
}

export default About