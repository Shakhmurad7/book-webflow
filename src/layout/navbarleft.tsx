
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Navbarleft({menu , setmenu}:any) {
  return (
    <div onClick={()=>setmenu(!menu)}>
    {
      menu === true?  <CloseIcon/> : <MenuIcon/>
    }
    </div>
  )
}

export default Navbarleft