import * as React from "react"
import mega from "../images/mega2.png"
import { Stage, Container, Sprite, Text} from '@inlet/react-pixi';

const IndexPage = () => {
  return (
    <Stage>
    <Sprite image={mega} x={100} y={100} />

    <Container x={500}>
      <Text text="Hello World" />
    </Container>
  </Stage>
  )
}

export default IndexPage
