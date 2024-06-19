import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/Addons.js";

export const MeshFromSVG = ({
  svgPath,
  imagePath,
  rotationSpeed = 0.005,
  thickness = 0.02,
  ...props
}: {
  svgPath: string;
  imagePath: string;
  rotationSpeed?: number;
  thickness?: number;
  props?: MeshProps;
}) => {
  const meshRef =
    useRef<
      THREE.Mesh<
        THREE.BufferGeometry<THREE.NormalBufferAttributes>,
        THREE.Material | THREE.Material[],
        THREE.Object3DEventMap
      >
    >(null);

  // Load SVG
  const svgData = useLoader(SVGLoader, svgPath);

  const shapes = useMemo(() => {
    const allShapes: THREE.Shape[] = [];
    svgData.paths.forEach((path) => {
      path.toShapes(false).forEach((shape) => {
        shape.autoClose = true;

        allShapes.push(shape);
      });
    });
    return allShapes;
  }, [svgData]);

  const [geometrySize, setGeometrySize] = useState(new THREE.Vector2(0, 0));

  const geometry = useMemo(() => {
    const extrudeSettings = {
      depth: thickness,
      bevelEnabled: false,
    };

    const geometry = new THREE.ExtrudeGeometry(shapes, extrudeSettings);
    geometry.computeBoundingBox();

    if (geometry.boundingBox) {
      const x = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
      const y = geometry.boundingBox.max.y - geometry.boundingBox.min.y;

      setGeometrySize(new THREE.Vector2(x, y));

      const scale = 1 / Math.max(x, y);

      geometry.applyMatrix4(new THREE.Matrix4().makeScale(scale, scale, 1));
    }

    geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI));

    geometry.center();
    return geometry;
  }, [shapes, thickness]);

  // Load texture
  const texture = useTexture(imagePath);
  texture.magFilter = THREE.NearestFilter;
  texture.flipY = false;

  useEffect(() => {
    texture.repeat.set(1 / geometrySize.x, 1 / geometrySize.y);
  }, [texture.repeat, geometrySize]);

  texture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });

  const greyMaterial = new THREE.MeshBasicMaterial({
    color: "lightgray",
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={[material, greyMaterial]}
      {...props}
    />
  );
};

export default MeshFromSVG;
