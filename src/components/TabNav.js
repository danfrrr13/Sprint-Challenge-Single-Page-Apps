import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationList from './LocationsList';
import EpisodeList from './EpisodeList';
import './TabNav.css';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

// const panes = [
//     { menuItem: 'Home Page', render: () => <WelcomePage /> },
//     { menuItem: 'Characters', render: () => <CharacterList /> },
//     { menuItem: 'Locations', render: () => <LocationList /> },
//     { menuItem: 'Episodes', render: () => <EpisodeList /> },
// ]

// const TabNav = () => {
//     return (
//         <div>
//             <Tab panes={panes} /> 
//         </div>

//     )
// };


const TabNav = () => {
    return (
        <div>
            <div className="tabNav">
                <NavLink className='navLink' to='/'>
                    Home Page
                </NavLink>
                <NavLink className='navLink' to='/characters'>
                    Characters
                </NavLink>
                <NavLink className='navLink' to='/locations'>
                    Locations
                </NavLink>
                <NavLink className='navLink' to='/episodes'>
                    Episodes
                </NavLink>
            </div>
            <div>
                <Route exact path='/' component={WelcomePage} />
                <Route exact path='/characters' component={CharacterList} />
                <Route exact path='/locations' component={LocationList} />
                <Route exact path='/episodes' component={EpisodeList} />
            </div>
        </div>
    )
};

export default TabNav;