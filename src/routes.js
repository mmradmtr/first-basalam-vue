import NextShoppingList from '@/components/NextShoppingList'
import Shopcart from '@/components/Shopcart'

export const routes = [
    {
        path: '/NextShoppingList',
        component: NextShoppingList
    },
    {
        path: '/Shopcart',
        component: Shopcart,
        alias: '/'
    },
]

