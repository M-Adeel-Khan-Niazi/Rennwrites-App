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
        image: 'https://m.media-amazon.com/images/I/81oKg5eh2wL._SL1500_.jpg',
        title: 'The Alchemy Of Vision: Exploring The Depths of Heaven and Hell With William Blake and Neville Goddard',
        price: '$20.50',
        auther: 'Mychael T. Renn',
        topSeller: true,
        OrderID: '1008',
        time: '50:59'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61iwH6+qsPL._SL1499_.jpg',
        id: 1,
        title: 'NAILED IT!!: A metaphysical translation of Bible parables',
        price: '$20.50',
        topSeller: true,
        auther: 'Mychael T. Renn',
        OrderID: '1008',
        time: '50:59'
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/71i7biq-haL._SL1500_.jpg',
        title: 'Imagining Divinity: God as Our Human Imagination',
        price: '$20.50',
        topSeller: true,
        OrderID: '1008',
        auther: 'By Mychael T Renn',
        time: '50:59'
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

export const ordersList = [
    {
        id: 0,
        image: Assets.shop,
        title: 'Order ID: RW321654',
        price: '$20.50'
    },
]
export const addressList = [
    {
        checked: true,
        title: 'Address 1',
        address: 'Shop# 804, Lorem ipsum, dummy address, vero eos et accusamus, dignissimos, CA',
        defaultText: 'Default Address'
    },
    {
        checked: false,
        title: 'Address 1',
        address: 'Shop# 804, Lorem ipsum, dummy address, vero eos et accusamus, dignissimos, CA',
        defaultText: 'Default Address'
    }
]
export const orderItems = [
    {
        image: Assets.shop,
        title:'RennWrites T-Shirt', 
        name: 'RennWrites T-Shirt',
        quantity: 'X2',
        price: '$20.50',
        date: '16 Nov 2024',
        status: 'Completed',
        sold: '10',
        orderID: '1008',
        qtyAvailable: '50'
    },
    {
        image: Assets.shop,
        title:'RennWrites T-Shirt', 
        name: 'RennWrites T-Shirt',
        quantity: 'X2',
        price: '$20.50',
        date: '16 Nov 2024',
        status: 'Completed',
        sold: '10',
        orderID: '1008',
        qtyAvailable: '50'
    },
    {
        image: Assets.shop,
        title:'RennWrites T-Shirt', 
        name: 'RennWrites T-Shirt',
        quantity: 'X2',
        price: '$20.50',
        date: '16 Nov 2024',
        status: 'Completed',
        sold: '10',
        orderID: '1008',
        qtyAvailable: '50'
    }
]
export const AboutUsCollapseList = [
    {
        id: 0,
        title: 'Our Vision',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',

    },
    {
        id: 1,
        title: 'Our Mission',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        
    },
    {
        id: 2,
        title: 'Platform for Top Class Audio & e-Books',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        
    }
]
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const subscriptionChecks = [
    'Nemo enim ipsam voluptatem quia voluptas.',
'Sit aspernatur aut odit aut fugit, sed quia conseq.',
'Uuntur magni dolores eos qui ratione voluptate.',
'Sequi nesciunt. Neque porro quisquam est, qui.',
'Dolorem ipsum quia dolor sit amet, consectetur.',
'Ut enim ad minima veniam, quis nostrum exerc.',
]
export const filterMenuList = [
    'All',
    'Pending',
    'Completed',
    'Incomplete'
]
export const creditCardList = [
    {
        image: Assets.cardImage,
        name: 'John Doe',
        number: '1234 **** ****',
        checked: true
    },
    {
        image: Assets.cardImage,
        name: 'John Doe',
        number: '1234 **** ****',
        checked: false
    }
]
export const orderTable = [
    {
        id: 'RW321654',
        qty: '01',
        price: '$20.50',
        status: 'Completed'
    },
    {
        id: 'RW321654',
        qty: '01',
        price: '$20.50',
        status: 'Completed'
    },

    {
        id: 'RW321654',
        qty: '01',
        price: '$20.50',
        status: 'Completed'
    },
    {
        id: 'RW321654',
        qty: '01',
        price: '$20.50',
        status: 'Completed'
    },
]