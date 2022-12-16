import * as React from 'react';
import { Drawer, Avatar, useTheme, Divider, List, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import Person from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import Money from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ListItem from '@mui/material/ListItem';

export const MenuLateral: React.FC = ({ children }) => {  //FC functional component, pegando href={}dos os componentes que sao filhos do componente

    const theme = useTheme()
    
    return (
        //<> fragmente - pra colocar o drayer do lado esquerdo da tela e o children no outro lado
        <> 
        <Box sx={{ display: 'flex'}}> 
       

        
            <Drawer open={true} variant={'permanent'}> 
                <Box width={theme.spacing(30)} height="100%" display="flex" flexDirection="column">                        
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center" >
                        <Avatar alt="Globalfy logo" 
                        sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                        src="https://d35n4yge3nx7tz.cloudfront.net/wp-content/uploads/2022/04/gfy-circle-fy-green.png" />
                    </Box>
                    <Divider/>
                    <List  >
                        <ListItem disablePadding sx={{ display: 'block' }} >
                            <ListItemButton component="a" href="../">
                                <ListItemIcon> <HomeIcon/> </ListItemIcon>
                                <ListItemText primary="Company" />
                            </ListItemButton>
                            <ListItemButton component="a" href="../User">
                                <ListItemIcon> <Person/> </ListItemIcon>
                                <ListItemText primary="User" />
                            </ListItemButton>
                            <ListItemButton component="a" href="../BankAccount">
                                <ListItemIcon> <AccountBalanceIcon/> </ListItemIcon>
                                <ListItemText primary="Bank Account" />
                            </ListItemButton>
                            <ListItemButton component="a" href="../Transaction">
                                <ListItemIcon> <Money/> </ListItemIcon>
                                <ListItemText primary="Transaction" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>  
            </Drawer>
            
            <Box  marginLeft={theme.spacing(28)}> {/*1 = 4 px*/}
                { children }
            </Box>
        </Box>
 
        </>
    )
}