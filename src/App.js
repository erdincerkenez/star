import { Advertisement, BreakingNews, Header,Navbar,NavbarSub } from "./components/common";
import ImageSlider from "./components/common/slider";
import "./components/FontawesomeIcons"
import '../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <NavbarSub/>
      <BreakingNews/>
      <Advertisement/>
      <ImageSlider/>
    </div>
  );
}

export default App;
