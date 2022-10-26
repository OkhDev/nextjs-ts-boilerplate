import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex items-center justify-center w-screen h-screen`}
`
const HelloWorld = styled(motion.span)`
  ${tw`text-3xl font-bold`}
`

function Hero() {
  return (
    <Container>
      <HelloWorld
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 2 }}
        transition={{ duration: 2 }}
      >
        Hello World!
      </HelloWorld>
    </Container>
  )
}

export default Hero
