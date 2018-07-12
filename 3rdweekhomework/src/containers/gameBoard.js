import React, { Component } from 'react';
import NewGameButton from './gameParts/newGameButton'
import SearchBar from './gameParts/searchLetter'
import GameOver from './gameParts/logic'
import HangedMan from './gameParts/hangMan'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});

class Game extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item={8}>
              <HangedMan />
          </Grid>

          <Grid item xs={8} >
              <SearchBar  />       
          </Grid>

        <GameOver />
        <NewGameButton />
      </Grid>
    );
  }
}

export default Game;