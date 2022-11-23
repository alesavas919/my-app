import React from 'react';
import {WorkItems} from './WorkItems';
import Container from "react-bootstrap/Container";
//@returns{JSX.Element}
function App() {
  return (
    <Container className="p-3">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <h3 className="text-center">Work Item Tracker</h3>
      <p className="text-center">A sample application that shows you how to track work
        items served by a REST endpoint.</p>
      <hr/>
      <WorkItems />
    </Container>
  );
}
export default App;