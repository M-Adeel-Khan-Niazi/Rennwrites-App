import { Assets } from ".."
import labels from "../Labels"

export const listTabs = [
    {
        id: 0,
        label: 'All'
    },
    {
        id: 1,
        label: 'Entertainment'
    },
    {
        id: 2,
        label: 'Science'
    },
    {
        id: 3,
        label: 'Romance'
    },
    {
        id: 4,
        label: 'Self Help'
    }

]
export const BooksFilterList = [
    {
        id: 0,
        label: labels.EBooks
    },
    {
        id: 1,
        label: labels.AudioBooks
    },
]
export const bookList = [
    {
        id: 0,
        image: Assets.trackImage,
        title: 'The Alchemy of Soul',
        auther: 'By Mychael T Renn'
    },
    {
        image: Assets.trackImage,
        id: 1,
        title: 'The Alchemy of Soul',
        auther: 'By Mychael T Renn'
    },
    {
        id: 2,
        image: Assets.trackImage,
        title: 'The Alchemy of Soul',
        auther: 'By Mychael T Renn'
    }
]
export const shopData = [
    {
        id: 0,
        image: Assets.shop,
        title: 'Chronicles of the Lost Kingdom',
        price: '$20.50'
    },
    {
        id: 1,
        image: Assets.shop,
        title: 'Chronicles of the Lost Kingdom',
        price: '$20.50'
    },
    {
        id: 2,
        image: Assets.shop,
        title: 'Chronicles of the Lost Kingdom',
        price: '$20.50'
    },
    {
        id: 3,
        image: Assets.shop,
        title: 'Chronicles of the Lost Kingdom',
        price: '$20.50'
    },
    {
        id: 4,
        image: Assets.shop,
        title: 'Chronicles of the Lost Kingdom',
        price: '$20.50'
    }
]
export const addressList = [
    {
        checked: true,
        title: 'Address 1',
        address: 'Shop# 804, Lorem ipsum, dummy address, vero eos et accusamus, dignissimos, CA',
        defaultText: 'Default Address'
    }
]
export const orderItems = [
    {
        name: 'RennWrites T-Shirt',
        quantity: 'X2',
        price: '$20.50'
    },
    {
        name: 'RennWrites T-Shirt',
        quantity: 'X2',
        price: '$20.50'
    },
    {
        name: 'RennWrites T-Shirt',
        quantity: 'X2',
        price: '$20.50'
    }
]