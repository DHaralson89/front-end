const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {

  },
  songTitle: {
    fontSize: '1.5rem',
    width: '400px',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  songArtist: {
    fontSize: '.75rem'
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  gridList: {
    width: '100%',
    height: '80vh',
    [theme.breakpoints.down('md')]: {
      height: '100%'
    }
  },
  playlist: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  mobilePlaylist: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  }
}))

export default useStyles