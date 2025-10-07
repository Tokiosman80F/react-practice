import Accordian from "./Accordian/Accordian"
import ColorGenerator from "./ColorGenerator/ColorGenerator"
import CounterApp from "./CounterApp/CounterApp"
import DarkTheme from "./DarkTheme/DarkTheme"
import DigitalClock from "./DigitalClock/DigitalClock"
import ImageSlider from "./ImageSlider/ImageSlider"
import PracticeColorGenerator from "./PracticeColorGenerator/PracticeColorGenerator"
import PracticeStarRating from "./StarRating/PracticeStarRating"
import StarRating from "./StarRating/StarRating"

function App() {

  return (
    <>
      {/* <CounterApp/> */}
      {/* <DigitalClock/> */}
      {/* <DarkTheme/> */}
      {/* <Accordian/>   */}
      {/* <ColorGenerator/> */}
      {/* <PracticeColorGenerator/> */}
      {/* <StarRating/> */}
      {/* <PracticeStarRating/> */}
      <ImageSlider url={`https://picsum.photos`} limit={"10"}/>
    </>
  )
}

export default App
