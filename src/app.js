import React from 'react';
import { Navigation } from './components/Navigation/navigation';
import { Footer } from './components/Footer/footer';
import { AppStyles } from './app.styles';
import { Home } from './pages/Home/home';
import { Stackers } from './pages/Stackers/stackers';
import { CounterweightedWinchStackers } from './pages/Stackers/CounterweightedWinch/counterweighted-winch';
import { PlatformStackers } from './pages/Stackers/Platform/platform';
import { ForkStackers } from './pages/Stackers/Fork/fork';
import { PalletStackers } from './pages/Stackers/Pallet/pallet';
import { Cranes } from './pages/Cranes/cranes';
import { StraddleCranes } from './pages/Cranes/Straddle/straddle';
import { CounterweightedCranes } from './pages/Cranes/Counterweighted/counterweighted';
import { LiftTables } from './pages/LiftTables/lift-tables';
import { ScissorLiftTables } from './pages/LiftTables/ScissorLifts/scissor-lift';
import { TiltTables } from './pages/LiftTables/TiltTables/tilt-table';
import { VRCs } from './pages/VRCs/vrcs';
import { HydraulicLiftVRCs } from './pages/VRCs/HydraulicLift/hydraulic-lift';
import { MechanicalLiftVRCs } from './pages/VRCs/MechanicalLift/mechanical-lift';
import { PowerDriven } from './pages/PowerDriven/power-driven';
import { PowerDrivenCounterweightedCranes } from './pages/PowerDriven/CounterweightedCrane/counterweighted-crane';
import { PowerDrivenForkStackers } from './pages/PowerDriven/ForkStacker/fork-stacker';
// import { PowerDrivenPlatformStackers } from './pages/PowerDriven/PlatformStackers/platform-stackers';
import { About } from './pages/About/about';
import { Contact } from './pages/Contact/contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './_framework.css';
import StartAtTop from './start-at-top';

const hideAllSubMenus = (el) => {
  var radios = document.querySelectorAll('input[name=menuRadio]');
  for(var i = 0; i < radios.length; i++) {
    toggleRadio(el, radios[i])
  }
}

const toggleRadio = (el, radio) => {
  if (radio !== null) {
    if(radio.checked === true) {
        radio.checked = false;
        el.preventDefault();
    } else {
        radio.check = true;
    }
  }
}

const hideSubMenu = (el) => {
  var radio = document.querySelector('#' + el.currentTarget.getAttribute('for'));
  toggleRadio(el, radio);
}

export const App = () => (
  <BrowserRouter>
    <div id="app">
      <Navigation hide={hideSubMenu} />
      <AppStyles onClick={hideAllSubMenus}>
        <Switch>
          <StartAtTop>
            <Route exact path="/" component={Home} />
            <Route exact path="/stackers" component={Stackers} />
            <Route path="/stackers/counterweighted-winch" component={CounterweightedWinchStackers} />
            <Route path="/stackers/platform" component={PlatformStackers} />
            <Route path="/stackers/fork" component={ForkStackers} />
            <Route path="/stackers/pallet" component={PalletStackers} />
            <Route exact path="/cranes" component={Cranes} />
            <Route path="/cranes/straddle" component={StraddleCranes} />
            <Route path="/cranes/counterweighted" component={CounterweightedCranes} />
            <Route exact path="/lift-tables" component={LiftTables} />
            <Route path="/lift-tables/loadredi-scissor" component={ScissorLiftTables} />
            <Route path="/lift-tables/loadredi-tilt" component={TiltTables} />
            <Route exact path="/vrcs" component={VRCs} />
            <Route path="/vrcs/hydraulic-lift" component={HydraulicLiftVRCs} />
            <Route path="/vrcs/mechanical-lift" component={MechanicalLiftVRCs} />
            <Route exact path="/power-driven" component={PowerDriven} />
            <Route path="/power-driven/counterweighted-crane" component={PowerDrivenCounterweightedCranes} />
            <Route path="/power-driven/fork-stacker" component={PowerDrivenForkStackers} />
            {/* <Route path="/power-driven/platform-stacker" component={PowerDrivenPlatformStackers} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </StartAtTop>
        </Switch>
        <Footer />
      </AppStyles>
    </div>
  </BrowserRouter>
);
