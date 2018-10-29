import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Top from "./index"

storiesOf("lib/index", module).add("component", () => (
  <Container>
    <Row>
      <Top />
    </Row>
  </Container>
))

const Row = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`

const Container = styled.div`
  margin: 0;
  padding: 0 15px;
  width: 100%;
`
