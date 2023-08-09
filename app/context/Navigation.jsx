import {
  Icon,
  ListItemIcon,
  ListItem,
  List,
  ListItemText
} from '@mui/material';

const links = [
  {
    id: 0,
    href: '/',
    label: 'Inicio',
    icon: 'Home'
  },

  {
    id: 1,
    href: '/produtos',
    label: 'Produtos',
    icon: 'ShoppingCart'
  },

  // empresa: {
  //   id=2,
  //   href: '/empresa',
  //   label: 'Empresa',
  //   icon: 'BusinessOutlined'
  // },
  {
    id: 3,
    href: '/contato',
    label: 'Contato',
    icon: 'ContactPhone'
  }
  // sobre: {
  //   id=4,
  //   href: '/sobre',
  //   label: 'Sobre',
  //   icon: 'InfoOutlined'
  // }
];

export const Navigation = () => {
  return (
    <List>
      {links.map((link) => (
        <ListItem key={link.id}>
          <ListItemIcon>
            <Icon vocab=''>{link.icon}</Icon>
          </ListItemIcon>
          <ListItemText>{link.label}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
