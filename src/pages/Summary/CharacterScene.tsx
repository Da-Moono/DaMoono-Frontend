import { Loading3D } from '@/components/loading';

const CharacterScene = () => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Loading3D
        textureUrl="src/assets/images/search-moono.png"
        size="lg"
        floatSpeed={1.8}
        rotation={0.3}
      />
    </div>
  );
};

export default CharacterScene;
