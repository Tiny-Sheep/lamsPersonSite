import React, { Component } from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.section`
  background:#9caea9;
  width:75%;

`


class Portfolio extends Component {

  componentDidMount() {
    console.log("mounted")
  }
  render() {
    console.log("getting into portfolio component?")
    return (
      <div>
        <ContentWrapper>
          <h1>This is the Portfolio Header</h1>
        </ContentWrapper>
      </div>
    )
  }
}

export default Portfolio;
