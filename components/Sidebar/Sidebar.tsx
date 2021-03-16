import { Flex, Box } from "@chakra-ui/react";
import menuItems from '../../constants/sidebar'
import SidebarMenuLinks from './SidebarMenuLinks/SidebarMenuLinks'

export default function Sidebar() {
  return (
      <Flex
        direction='column'
        borderRadius='lg'
        boxShadow='base'
        w='220px' 
        bg='#e6cb2d'
        display={{sm: 'none', md: 'flex'}} >
        {menuItems && menuItems.map((item, index) => {
          return (
              <SidebarMenuLinks title={item.title} href={item.href} key={index} icon={item.icon} />
          )
        })}
      </Flex>
  )
}