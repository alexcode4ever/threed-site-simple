const LightBulb = (props) => {
    return (
        <mesh {...props}>
            <pointLight args={[0xffffff, 2, 100]} castShadow/>
            <sphereBufferGeometry args={[0.2, 40, 10]} />
            <meshPhongMaterial emissive={"white"}/>
        </mesh>
    )
}

export default LightBulb