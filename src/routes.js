import NextShoppingList from '@/Views/NextShoppingList'
import Shopcart from '@/Views/Shopcart'
import BasketAddress from '@/Views/BasketAddress'

export const routes = [
    {
        path: '/NextShoppingList',
        component: NextShoppingList
    },
    {
        path: '/BasketAddress',
        component: BasketAddress,
        name:"BasketAddress"
    },
    {
        path: '/Shopcart',
        component: Shopcart,
        alias: '/'
    },
]

