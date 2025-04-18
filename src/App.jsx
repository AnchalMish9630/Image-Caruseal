import './App.css'
import Carouseal from './Carouseal'
import SelectBox from './SelectBox'

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
     
    </div>
  </>
  )
}

export default App
