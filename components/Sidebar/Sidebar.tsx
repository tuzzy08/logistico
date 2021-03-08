import { Flex, Box } from "@chakra-ui/react";
import menuItems from '../../constants/sidebar'
import SubMenuLink from '../../components/Navigation/SubMenuLink/SubMenuLink'

export default function Sidebar() {
  return (
      <Flex
        direction='column'
        borderRadius='lg'
        boxShadow='base'
        w='220px' 
        bg='#319795'
        display={{sm: 'none', md: 'flex'}} >
        {menuItems && menuItems.map((item, index) => {
          return (
              <SubMenuLink title={item.title} href={item.href} key={index} />
          )
        })}
      </Flex>
  )
}