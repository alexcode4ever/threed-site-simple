"use client"
import '@/styles/style.css'
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from '@react-three/drei';

import Floor from "@/components/Floor";
import Box from "@/components/Box";
import LightBulb from "@/components/LightBulb";

const Home = () => {
    return(
        <div className="scene">
            <Canvas
                shadows
                className="canvas"
                camera={{
                position: [-6, 7, 7],
                }}
            >
            <ambientLight color={"white"} intensity={0.1} />
            <LightBulb position={[5,5,0]}/>
            <Box rotateX={3} rotateY={0.2} />
            <OrbitControls />
            <Floor position={[0, -1, 0]} />
            </Canvas>
        </div>
    )
}

export default Home