import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const someLink = 'https://i.imgur.com/ph2hjOe.jpg'

// const MainWrapper = styled.div`
//   display:grid;
//   grid-template: repeat(5,20%)/repeat(5,20%)
// `
// const NavWrapper = styled.div`
//   grid-area:  1/ 1 / 6 / 2;
// `
// const BodyWrapper = styled.div`
//   grid-area: 1/ 2 / 6 / 6;
// `

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Header = styled.header`
  display: flex;
  padding: 15px;
  margin-bottom: 40px;
  justify-content:space-between;
  align-items: baseline;
  list-style-type: none;
`
const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  list-style-type: none;
`

const Ul = styled.ul`
  display: flex;
  align-items: baseline;
  list-style-type: none;
`
const SideWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Aside = styled.aside`
  flex:1;
`
const Section = styled.section`
  flex: 3;
  margin-right: 60px;
`
const Image = styled.img`
max-width:50%;
max-height:50%;
`



class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Nav>
            <Ul>
              <Link to='/portfolio'><Image src={someLink} alt={''} /></Link>
              <Link to='/portfolio'><Image src={someLink} alt={''} /></Link>
              <Link to='/portfolio'><Image src={someLink} alt={''} /></Link>
            </Ul>
          </Nav>
        </Header>
      </Container>
    )
  }
}


export default Home;
