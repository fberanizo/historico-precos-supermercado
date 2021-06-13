import React from 'react';
import TopAppBar, {
  TopAppBarIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle 
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import './AppTopBar.scss';

const AppTopBar = (props) => {
  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align='start'>
          {props.navIcon && 
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon hasRipple icon='menu' onClick={() => props.onNavIconClick()} />
          </TopAppBarIcon>}
          <TopAppBarTitle>{props.title}</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}

export default AppTopBar;
