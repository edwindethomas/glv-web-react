import { FacebookProvider, Page } from "react-facebook";

const Facebook = () => {
    return ( <section className="facebook__container">
        <FacebookProvider appId="1075614323169480">
            <Page href="https://www.facebook.com/Lic-Jose-Cazares-Osorio-160529718180"  tabs="timeline"/>
        </FacebookProvider>
    </section> );
}
 
export default Facebook;