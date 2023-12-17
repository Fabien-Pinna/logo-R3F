/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Logo } from "./logo";

export const Experience = () => {

    return (
        <>
            <Logo position={[0, -3.8, -2]} scale={0.5} />

            <rectAreaLight intensity={5} />
            <ambientLight intensity={50} />
        </>
    );
};