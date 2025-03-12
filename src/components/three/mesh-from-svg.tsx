import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/Addons.js";

type MeshFromSVGProps = {
  svgPath: string;
  imagePath: string;
  rotationSpeed?: number;
  thickness?: number;
} & MeshProps;

export const MeshFromSVG = ({
  svgPath,
  imagePath,
  rotationSpeed = 0.005,
  thickness = 0.02,
  ...props
}: MeshFromSVGProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

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

  // Create geometry
  const { geometry, geometrySize } = useMemo(() => {
    const extrudeSettings = {
      depth: thickness,
      bevelEnabled: false,
    };

    const geometrySize = new THREE.Vector2(0, 0);
    const geometry = new THREE.ExtrudeGeometry(shapes, extrudeSettings);
    geometry.computeBoundingBox();

    if (geometry.boundingBox) {
      const x = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
      const y = geometry.boundingBox.max.y - geometry.boundingBox.min.y;

      geometrySize.set(x, y);

      const scale = 1 / Math.max(x, y);

      geometry.applyMatrix4(new THREE.Matrix4().makeScale(scale, scale, 1));
    }

    geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI));
    geometry.center();

    return { geometry, geometrySize };
  }, [shapes, thickness]);

  // Load and configure texture
  const texture = useTexture(imagePath);
  texture.magFilter = THREE.NearestFilter;
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.repeat.set(1 / geometrySize.x, 1 / geometrySize.y);

  // Create materials
  const materials = useMemo(
    () => [
      new THREE.MeshBasicMaterial({ map: texture }),
      new THREE.MeshBasicMaterial({ color: "lightgray" }),
    ],
    [texture]
  );

  // Cleanup
  useEffect(() => {
    return () => {
      geometry.dispose();
      texture.dispose();
      materials.forEach((material) => material.dispose());
    };
  }, [geometry, texture, materials]);

  // Rotate the mesh
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={materials} {...props} />
  );
};

export default MeshFromSVG;
