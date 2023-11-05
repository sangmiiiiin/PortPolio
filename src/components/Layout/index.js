import { Outlet } from "react-router"
import { Footer } from "./footer"
import { Header } from "./Header/header"
import styled from "styled-components"

const Body = styled.body`
    position: relative;
`

export const Layout = () => {
    return (
        <>
        <Body>
            <Header />
            <Outlet />
            <Footer />
        </Body>
        </>
    )
}