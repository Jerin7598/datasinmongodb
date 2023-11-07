import App from './App';
import User from './User';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function Routese() {
return(
    
<BrowserRouter>
<Routes>

    <Route path='/' element={<App/>}></Route>
    <Route path='/User' element={<User/>}></Route>
    

</Routes>
</BrowserRouter>
   
);

}

export default Routese;