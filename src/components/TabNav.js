import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationList from './LocationsList';
import EpisodeList from './EpisodeList';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const panes = [
    { menuItem: 'Home Page', render: () => <WelcomePage /> },
    { menuItem: 'Characters', render: () => <CharacterList /> },
    { menuItem: 'Locations', render: () => <LocationList /> },
    { menuItem: 'Episodes', render: () => <EpisodeList /> },
]

const TabNav = () => {
    return (
        <div>
            <Tab panes={panes} /> 
        </div>

    )
};

export default TabNav;