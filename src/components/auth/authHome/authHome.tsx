import * as React from 'react';
import './authHome.scss'
import { Card, TextField, Typography } from '@material-ui/core'

export interface AuthHomeProps {
    
}
 
export interface AuthHomeState {
    
}
 
class AuthHome extends React.Component {
    state = { "":"" }
    render() { 
        return ( 
            <Card className="auth-card">
                <header>
                    <Typography variant="h4" >
                        Welcome
                    </Typography>
                    <Typography variant="h5">
                        Sign in
                    </Typography>
                    <Typography variant="subtitle2">
                        to continue to services.
                    </Typography>
                </header>
                <div className="padding1015">
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width: '100%'}} />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width: '100%'}} />
                </div>
            </Card>
        );
    }
}
 
export default AuthHome;