import * as React from 'react';
import { Drawer, Avatar, useTheme, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import Person from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import Money from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link'


export const MenuLateral: React.FC = ({ children }) => {  //FC functional component, pegando todos os componentes que sao filhos do componente

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
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <nav>
                                <ul>       
                                    <li>
                                        <Link href='./about'>About</Link>
                                    </li>      
                                </ul>
                            </nav>   
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