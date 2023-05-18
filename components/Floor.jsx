import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

const Floor = (props) => {
    const texture = useLoader(TextureLoader, "/texture.jpg");

    return(
        <mesh {...props} recieveShadow>
        <boxBufferGeometry args={[20,1,10]} />
        <meshPhysicalMaterial map={texture} color='white' />
      </mesh>
    )
}

export default Floor