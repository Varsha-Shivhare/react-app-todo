import React, {useState} from 'react';
import './Restaurant.css';
import MenuAPI from './MenuAPI';
import MenuData from './MenuData';
import Navbar from './Navbar';

const navList = [
    ...new Set(MenuAPI.map((currEle) => {
return currEle.category;
})),'All'
]

console.log(navList);

const Restaurant = () => {
    const [menuData, setMenuList] = useState(MenuAPI)
    const [navItem, setnavItem] = useState(navList)
    const [searchText, setSearchText] = useState('')

    const filterItem = (category) => {

        if(category === 'All'){
            setMenuList(MenuAPI)
            return;
        }
        const updatedList = MenuAPI.filter((element) => {
            return element.category === category
        })

        setMenuList(updatedList);
    }


  return (
            <div className='back'>
                <Navbar filterItem = {filterItem} navItem ={navItem} setSearchText={setSearchText}/>
                <MenuData menuData = {menuData} searchText={searchText}/>
            </div>
  )
};

export default Restaurant;


