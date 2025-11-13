import './App.css'
import Carouseal from './Carouseal'
import DebounceDemo from './DebounceDemo'
import SelectBox from './SelectBox'
import TwoPointerTracker from './TwoPointerTracker'

function App() {
  return (
    <>
    <div style={{
     margin: "40px",
     display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center"}}>
    {/* <Carouseal /> */}
    <SelectBox label={""} />
    {/* <SelectBox label={""} />
    <SelectBox label={""} />
    <SelectBox label={""} /> */}
     {/* <TwoPointerTracker /> */}
     <DebounceDemo />
    </div>
  </>
  )
}

export default App
