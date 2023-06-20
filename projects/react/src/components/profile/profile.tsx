import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes  from 'prop-types';
// Box is div used to encapsulate component
//Typography is a component that we can use to style font
interface IProfile{
    name: string,
    
}
// here we have set IProfile rather assigning it too a props directly as generic type FC takes an generic type and it is assigned to the prop so we added it as generic type
export const Profile: FC<IProfile> = (props): ReactElement => {
    
    const {name="Varsha"}=props// sending value using prop and setting a default value
    return (
        <Box display="flex"
            flexDirection="column"
            justifyContent="center"
        alignItems="center">
            <Avatar
                sx={{
                    width: '96px',
                    height: "96px",
                    backgroundColor: "primary.main",
                    marginBottom:'16px'
            }}
            ><Typography variant="h4" color="text.primary">{`${name.substring(0,1)}`}
                </Typography>
            </Avatar>
            <Typography variant='h6' color="text.primary">{`Welcome, ${name}`}</Typography>
            <Typography variant='body1' color="text.primary">This is your personal tasks managere</Typography>

        </Box>
    )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};



/**
 *  difference between interfaace and PropType
 *  Interface are type scripting and only available till development,
 * while Prop type is available in javascript as well
 * Interface check the code when error occured for the first time i.e compilation time but 
 * prop give error at the time of run time
 * use both propType as well interface together
 * */