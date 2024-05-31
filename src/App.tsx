import React, {useState, useEffect} from 'react';
import Topbar from './componenti/topbar';
import Contenuti from './componenti/contenuti';
import Footer from './componenti/footer';
import {Post, TPost} from './types/commontypes';
import { AppContext } from './context/appcontext';

function App() {

  const[jsonData, setJsonData] = useState<Post[] | undefined>()
  const propTypes = {jsonData, setJsonData}

  useEffect(() => {
  fetch('https://dummyjson.com/posts')
.then(response => response.json())
.then(json => setJsonData(json.posts))
  }, [] )

  return (
    <div>
      <AppContext.Provider value={propTypes}>
    <Topbar></Topbar>
    <Contenuti></Contenuti>
    <Footer></Footer>
    </AppContext.Provider>
    </div>
  )
}

export default App;