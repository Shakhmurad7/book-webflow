
import MenuIcon from '@mui/icons-material/Menu';

function Navbarleft({menu , setmenu}:any) {
  return (
    <div className='menu-icon' onClick={()=>setmenu(!menu)}>
 
     <MenuIcon/>

    </div>
  )
}

export default Navbarleft