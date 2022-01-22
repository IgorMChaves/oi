import {Switch, Route} from "react-router-dom";
import  {Ajudar, Home, Adotar} from "pages"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Ajudar" exact component={Ajudar} />
            <Route path="/Adotar" exact component={Adotar} />
        </Switch>
    );
      
};

export default Routes;