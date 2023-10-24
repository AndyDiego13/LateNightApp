import styles from './page.module.css'

export default function Lights() {
    return (
        <div>
            <h1>Control de iluminación</h1>
            <div>
                <Image 
                    src="foco.png"
                    width={85}
                    height={25}>
                </Image>
            </div>
        </div>
    )
}