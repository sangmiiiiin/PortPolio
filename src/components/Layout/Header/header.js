import { Background } from "./Background/Background";
import { Contents } from "./Contents/Contents";
import Navbar from "./Navbar/Navbar";

export const Header = () => {
    return (
        <>
            <Background>
                <Navbar />
                <Contents />
            </Background>
        </>
    );
};
