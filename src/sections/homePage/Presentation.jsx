import { NavbarMenu } from '../../components'


export const Presentation = () => {

    const handleClick = () => {
        const element = document.getElementById('plataforma360')
        if (element) {
        element.scrollIntoView({ behavior: 'smooth', top: '0' })
        }
    }

return (
    <header>
        <NavbarMenu />
        <div className="presentationContainer">
            <div className="tittles">                
                <h1>Audios que vas a querer conservar</h1>
                <h2>Un libro de visitas de audio vintage</h2>
                <h2>Una nueva forma de revivir los mejores recuerdos de tus personas favoritas</h2>
            </div>               
        </div>
    </header>
)
}
