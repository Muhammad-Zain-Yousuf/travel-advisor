import React, {useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import {AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./style";

const Header = ({setCoords}) => {

    const [autocomplete, setAutocomplete] = useState(null);
    const classes = useStyles();
    

    const handleOnLoad = (autoC) => setAutocomplete(autoC);

    const handleOnPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        
        setCoords({lat, lng});
    }
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={handleOnLoad} onPlaceChanged={handleOnPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search for place" classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Header;