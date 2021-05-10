import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';



export const SidebarData = [
    {
        title: 'Breakfast',
        path: '/breakfast',
        icon: <GiIcons.GiFruitBowl/>,
        cName: 'nav-text'
    },
    {
        title: 'Lunch',
        path: '/lunch',
        icon: <IoIcons.IoFastFood/>,
        cName: 'nav-text'
    },
    {
        title: 'Dinner',
        path: '/dinner',
        icon: <GiIcons.GiOpenedFoodCan/>,
        cName: 'nav-text'
    },
    {
        title: 'Add Recipe',
        path: '/add_recipe',
        icon: <BiIcons.BiMessageSquareAdd/>,
        cName: 'nav-text'
    },
]
