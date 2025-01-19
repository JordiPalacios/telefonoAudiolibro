import { ProductsCard } from '../../components'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'

export const Products2 = () => {
    const workingMode = useWorkingMode('Mobile')
    
return (
    <section id='products'>
        <div className="productsContainer">
            <div className="generalProducts">
                <ProductsCard
                    id='letras-love'
                    tittle='Letras Love'
                    msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20las%20Letras%20Love!"
                    imgUrl='./img/servicios/otrosProductos/letrasLove.webp'
                    kitAnti={false}
                    colorText='var(--accent)'/>
                <ProductsCard
                    id='neones'
                    tittle='Neones'
                    msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20los%20Neones!"
                    imgUrl='./img/servicios/otrosProductos/neones.webp'
                    kitAnti={false}
                colorText='var(--accent)'/>
            </div>                    
            <ProductsCard
                id='kitAntiResaca'
                tittle='Kit AntiResaca'
                imgUrl='./img/servicios/otrosProductos/kitAntiresaca.webp'
                msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20el%20Kit%20AntiResaca!"
                workingMode={workingMode}
                kitAnti={true}
            colorText='var(--accent)'/>
        </div>
    </section>
)
}
