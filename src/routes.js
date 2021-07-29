import { Switch, Route } from 'react-router-dom';

import {Home} from './pages/Home';
import {About} from './pages/About';
import {Prist} from './pages/Prist';
import {Classroom} from './pages/Classroom';
import {Contact} from './pages/Contact';


export function Routes() {
   return (
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/sobre" component={About} />
       <Route path="/padreticao" component={Prist} />
       <Route path="/aulas" component={Classroom} />
       <Route path="/contato" component={Contact} />

     </Switch>
   );
 };
 