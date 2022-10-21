import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

import { VerticalNavItemsType } from '@/meta-core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Profile',
      icon: AccountCogOutline,
      path: '/profile'
    }
  ]
}

export default navigation
