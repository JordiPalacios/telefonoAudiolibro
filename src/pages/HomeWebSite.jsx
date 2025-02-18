import { MetaTags, WhatsAppMessage } from '../components'
import { HeaderHome, LazyFrases, LazySection2, LazySection3, LazySection4, LazySection5, LazySection6, LazySection7, Section1 } from '../sections/homePage';
import { LazyFooter } from '../sections/Shared';


export const HomeWebsite = () => {

  return (
    <>
      <MetaTags 
        title={'@Telefonoaudiolibro.es | Crea tu propio recuerdo'}
        keywords={'Plataforma360, Espejo Magico, White Magic Mirror, Fotomaton, Barcelona, Telefono Audiolibro, Catalunya, Bodas, Eventos, Neones, Letras Love'}
        desc={'La mejor plataforma 360 de barcelona con un atrezzo único. Haz de tu boda, evento, fiesta un momento especial con nuestro magic mirror.'}
        author={'VisualShow360'}
        rating={'General'}
        ogTitle={'VisualShow360'}
        ogDesc={'La mejor plataforma 360 de barcelona con un atrezzo único. Haz de tu boda, evento, fiesta un momento especial con nuestro magic mirror.'}
        ogType={'website'}
        ogUrl={'https://telefonoaudiolibro.es/'}
        ogImg={'./img/servicios/fotomaton360/atrezzo_1.webp'}
        OgImgType={'image/webp'}
        ogImgAlt={'Plataforma360 Barcelona'}
      />
      <HeaderHome />
      <main>
        <LazyFrases />         
        <Section1 />          
        <LazySection2 />
        <LazySection3 /> 
        <LazySection4 /> 
        <LazySection5 /> 
        <LazySection6 /> 
        <LazySection7 /> 
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <LazyFooter />
    </>
  )
}
