export default function PlaneSphere() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3.4, 0]}
      receiveShadow
      groundColor="black"
    >
      <planeGeometry args={[20, 20]} />
      <meshPhongMaterial color={0x00b09b} attach="material" />
    </mesh>
  );
}
