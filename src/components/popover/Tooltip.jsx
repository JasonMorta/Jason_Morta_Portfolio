import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function CustomizedTooltips() {
 return (
   <div>
     <LightTooltip title="Add">
       <Button>Light</Button>
     </LightTooltip>
     <BootstrapTooltip title="Add">
       <Button>Bootstrap</Button>
     </BootstrapTooltip>
     <HtmlTooltip
       title={
         <React.Fragment>
           <Typography color="inherit">Tooltip with HTML</Typography>
           <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
           {"It's very engaging. Right?"}
         </React.Fragment>
       }
     >
       <Button>HTML</Button>
     </HtmlTooltip>
   </div>
 );
}
