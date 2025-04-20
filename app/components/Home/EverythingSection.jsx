"use client"
import UseScreenSize from "../common/UseScreenSize";
import EverythingConnects from "./EverythingConnects";
import EverythingConnectsMobile from "./EverythingConnectsMobile";


const EverythingSection = () => {
    const isMobile = UseScreenSize();
    return <section>
        {isMobile ?
            <EverythingConnectsMobile />
            : <EverythingConnects />}
    </section>
        ;
}

export default EverythingSection