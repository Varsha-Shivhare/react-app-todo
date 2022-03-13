import Idli from './images/Idli.jpg';
import dosa from './images/dosa.jpg';
import sandwich from './images/sandwich.png';
import franky from './images/franky.jpg';
import burger from './images/burger.jpg' ;
import pasta from './images/pasta.jpg' ;
import maggie from './images/maggie.png' ;
import momos from './images/momos.jpg' ;
import tea from './images/tea.jpg' ;

const MenuAPI = [
    {
      id: 1,
      category: 'Breakfast',
      image: Idli,
      name: "Idli",
      price: "5$"
    },
    {
        id: 2,
        category: 'Breakfast',
        image: dosa,
        name: "Dosa",
        price: "8$"
    },
    {
        id: 3,
        category: 'Lunch',
        image: sandwich,
        name: "Sandwich",
        price: "10$"
    },
    {
        id: 4,
        category: 'Lunch',
        image: franky,
        name: "Franky",
        price: "4$"
    },
    {
        id: 5,
        category: 'Dinner',
        image: burger,
        name: "Burger",
        price: "10$"
    },
    {
        id: 6,
        category: 'Dinner',
        image: pasta,
        name: "Pasta",
        price: "8$"
    },
    {
        id: 7,
        category: 'Breakfast',
        image: maggie,
        name: "Maggie",
        price: "5$"
    },
    {
        id: 8,
        category: 'Breakfast',
        image: momos,
        name: "Momos",
        price: "4$"
    },
    {
        id: 9,
        category: 'Breakfast',
        image: tea,
        name: "Tea",
        price: "2$"
    }
]

export default MenuAPI;
