
import './App.css'
import Quote from './Components/Quote'
import MediaQuery from 'react-responsive';
function App() {
 
  return (
    <>
    {/* This component will only render when the screen width is less than 768px */}
    <MediaQuery maxWidth={768}>
    <Quote/>
    </MediaQuery>

     {/* This component will only render when the screen width is greater than or equal to 768px */}
     <MediaQuery minWidth={768}>
     <Quote/>
      </MediaQuery>
     </>
  )
}

export default App
