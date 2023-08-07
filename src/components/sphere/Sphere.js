export default function Sphere({ position }) {
  console.log('position', position);
  return (
    <mesh position={position} castShadow>
      <sphereGeometry args={[2, 32]} />

      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
}
