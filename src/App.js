import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './comp/Header'
import Home from './Home'
import NotFound from './comp/NotFound'
import Movie from './comp/Movie'

library.add(faSearch)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>

      </React.Fragment>     
      </BrowserRouter>
      
    );
  }
}

export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//      die
//       </div>
//     );
//   }
// }

// export default App;


// import React from 'react'


// const Header = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Header
