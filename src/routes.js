import NextShoppingList from '@/Views/NextShoppingList'
import Shopcart from '@/Views/Shopcart'
import BasketAddress from '@/Views/BasketAddress'
import Payment from '@/Views/Payment'

export const routes = [
    {
        path: '/NextShoppingList',
        component: NextShoppingList,
        name: "NextShoppingList"
    },
    {
        path: '/BasketAddress',
        component: BasketAddress,
        name:"BasketAddress"
    },
    {
        path: '/Payment',
        component: Payment,
        name:"Payment"
    },
    {
        path: '/Shopcart',
        component: Shopcart,
        alias: '/'
    },
]

