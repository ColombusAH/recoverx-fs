import { useSidebar } from '@/store/sidebar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function SidebarToggler() {
  console.log('sidebarToggler rendered!');
  const [, sidebarActions] = useSidebar();

  return (
    <IconButton
      onClick={sidebarActions.toggle}
      size="large"
      edge="start"
      color="info"
      aria-label="menu"
      sx={{ mr: 1 }}
    >
      <MenuIcon />
    </IconButton>
  );
}
export default SidebarToggler;
