import React from 'react'
import './style.css'
import top from '../../img/top.png';
import backBtn from '../../img/back.png'
import { useNavigate } from "react-router-dom";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export default function ScrollToTop(props) {

 let navigate = useNavigate();
//Material UI toolTip config
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


  return (
    <div className='to-top'>
      <BootstrapTooltip title={'BACK'} >
     <img onClick={()=>(navigate(-1))} src={backBtn} alt='scroll button'/>
     </BootstrapTooltip>

     <BootstrapTooltip title={'TOP'} >
     <img onClick={()=>( window.scrollTo(0, 0))} src={top} alt='scroll to top' />
     </BootstrapTooltip>
    </div>
  )
}
