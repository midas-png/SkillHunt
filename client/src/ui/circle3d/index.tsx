/* eslint-disable react/no-unknown-property */
import { useRef, FC } from 'react';
import { extend } from '@react-three/fiber';
import {
  Mesh,
  CylinderGeometry,
  MeshBasicMaterial,
  TextureLoader,
} from 'three';
import { IProps } from './props';

extend({ Mesh, CylinderGeometry, MeshBasicMaterial });

export const Circle3D: FC<IProps> = ({ image, position, rotation, args }) => {
  const loader = new TextureLoader();
  const mesh = useRef<Mesh>(null!);

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <cylinderGeometry args={args} />
      <meshBasicMaterial attach='material-0' color='#000' />
      <meshBasicMaterial attach='material-1' map={loader.load(image)} />
      <meshBasicMaterial attach='material-2' color='#000' />
    </mesh>
  );
};
