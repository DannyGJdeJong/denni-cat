/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { MeshProps } from "@react-three/fiber";

import MeshFromSVG from "../../components/three/mesh-from-svg";

import IDenniHi from "./1.png";
import IDenniWoozy from "./2.png";
import IDenniBadge from "./3.png";
import IDenniLift from "./4.png";
import IDenniHunk from "./5.png";
import IDenniGlare from "./denniglare.png";

import IDenniHiTexture from "./3d_assets/1.png";
import IDenniHiSVG from "./3d_assets/1.svg";
import IDenniWoozyTexture from "./3d_assets/2.png";
import IDenniWoozySVG from "./3d_assets/2.svg";
import IDenniBadgeTexture from "./3d_assets/3.png";
import IDenniBadgeSVG from "./3d_assets/3.svg";
import IDenniLiftTexture from "./3d_assets/4.png";
import IDenniLiftSVG from "./3d_assets/4.svg";
import IDenniHunkTexture from "./3d_assets/5.png";
import IDenniHunkSVG from "./3d_assets/5.svg";

export const DenniHi = IDenniHi;
export const DenniWoozy = IDenniWoozy;
export const DenniBadge = IDenniBadge;
export const DenniLift = IDenniLift;
export const DenniHunk = IDenniHunk;
export const DenniGlare = IDenniGlare;
export const Dennis = [DenniHi, DenniWoozy, DenniBadge, DenniLift, DenniHunk];

export const DenniHi3D: React.FunctionComponent<MeshProps> = ({ ...props }) => (
  <MeshFromSVG svgPath={IDenniHiSVG} imagePath={IDenniHiTexture} {...props} />
);
export const DenniWoozy3D: React.FunctionComponent<MeshProps> = ({
  ...props
}) => (
  <MeshFromSVG
    svgPath={IDenniWoozySVG}
    imagePath={IDenniWoozyTexture}
    {...props}
  />
);
export const DenniBadge3D: React.FunctionComponent<MeshProps> = ({
  ...props
}) => (
  <MeshFromSVG
    svgPath={IDenniBadgeSVG}
    imagePath={IDenniBadgeTexture}
    {...props}
  />
);
export const DenniLift3D: React.FunctionComponent<MeshProps> = ({
  ...props
}) => (
  <MeshFromSVG
    svgPath={IDenniLiftSVG}
    imagePath={IDenniLiftTexture}
    {...props}
  />
);
export const DenniHunk3D: React.FunctionComponent<MeshProps> = ({
  ...props
}) => (
  <MeshFromSVG
    svgPath={IDenniHunkSVG}
    imagePath={IDenniHunkTexture}
    {...props}
  />
);
export const Dennis3D = [
  DenniHi3D,
  DenniWoozy3D,
  DenniBadge3D,
  DenniLift3D,
  DenniHunk3D,
];
