import React from 'react'
import styled from 'styled-components'
import { Layout, Row, Col } from 'antd'

// FIX https://www.caniuse.com/#search=flex-direction on IE 10/11.
const Wrapper = styled.div`
  display: flex;
  flex-direction: 'row';
`

const Container = styled(Layout)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled(Layout.Content)`
  flex: 1;
  margin-top: 100px;
`

const { Header, Footer } = Layout

export default ({ children }) => (
  <Wrapper>
    <Container>
      <Header />
      <Content>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={1} />
          <Col span={10}>
            {children}
          </Col>
          <Col span={1} />
        </Row>
      </Content>
      <Footer />
    </Container>
  </Wrapper>
)
