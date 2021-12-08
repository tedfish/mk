/* eslint-disable no-use-before-define */
import React from 'react';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Container from '@material-ui/core/Container';
import SearchBox from './searchBox'
import Image from '../images/anna-sullivan-QPSvll9tIUA-unsplash.jpg';

export default function FreeSoloCreateOptionDialog() {
  const styles = {
    searchBox: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: `bottom`,
      backgroundSize: `cover`,
    },
    searchBoxInner: {
      backgroundColor: 'rgba(156,214,125,.15)',
      opacity: `1`
    },
    searchBoxInnerOver: {
      backgroundColor: 'rgba(255,255,255,.5)',
      opacity: `1`
    }
  }
  return (
    <Box
      boxShadow={1}
      style={styles.searchBox}
      mb={3}
    >
      <Box
        pt={20}
        pb={20}
        style={styles.searchBoxInner}
      >
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            style={styles.searchBoxInnerOver}
          >
            <Grid item>
              <MenuBookIcon />
            </Grid>
            <Grid item>
              <SearchBox />

            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
