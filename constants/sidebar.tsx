import { FaHome, FaMailBulk, FaBiking, FaTruckMoving } from 'react-icons/fa'

const sidebarMenuItems = [
  {    
    title: 'Home',
    href: '/admin',
    icon: FaHome,
  },
  {
    title: 'New Package',
    href: '/admin/createPackage',
    icon: FaMailBulk,
  },
  {
    title: 'My Bikes',
    href: '/admin/bikes',
    icon: FaBiking,
  },
  {
    title: 'My Vans',
    href: '/admin/vans',
    icon: FaTruckMoving,
  },    
]

export default sidebarMenuItems