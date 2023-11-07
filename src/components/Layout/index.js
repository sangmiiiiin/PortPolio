import { Outlet } from "react-router"
import { Footer } from "./Footer/footer"
import { Header } from "./Header/header"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}