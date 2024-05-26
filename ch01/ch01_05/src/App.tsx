import DivTest from './pages/DivTest';
import ViewportTest from './pages/ViewportTest';
import HeightTest from './pages/HeightTest';
import PaddingTest from './pages/PaddingTest';
import MarginTest from './pages/MarginTest';
import ImageTest from './pages/ImageTest';
import BackgroundImageTest from './pages/BackgroundImageTest';
import DisplayTest from './pages/DisplayTest';
import DisplayNoneTest from './pages/DisplayNoneTest';
import AvatarTest from './pages/AvatarTest';
import PositionTest from './pages/PositionTest';
import OverlayTest from './pages/OverlayTest';
import CardContainer from './pages/CardContainer';
import AlignTest from './pages/AlignTest';
import DirectionTest from './pages/DirectionTest';
import JustifyCenterTest from './pages/JustifyCenterTest';
import MinMaxTest from './pages/MinMaxTest';
import UserContainer from './pages/UserContainer';
import WrapTest from './pages/WrapTest';

import ButtonTest from './pages/ButtonTest';
import InputTest from './pages/InputTest';
import ModalTest from './pages/ModalTest';

export default function App() {
  return (
    <main>
      <ButtonTest />
      <InputTest />
      <ModalTest />

      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest />

      {false && <OverlayTest />}
      <PositionTest />
      <DisplayNoneTest />
      <DisplayTest />
      <AvatarTest />
      <BackgroundImageTest />
      <ImageTest />
      <MarginTest />
      <PaddingTest />
      <HeightTest />
      <ViewportTest />
      <DivTest />
    </main>
  );
}
