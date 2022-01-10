import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div className='height-all'>
                <div className='nav-right visible-xs'>
                    <div className='button' id='btn'>
                        <div className='bar top' />
                        <div className='bar middle' />
                        <div className='bar bottom' />
                    </div>
                </div>
                {/* nav-right */}
                <main>
                    <nav>
                        <div className='nav-right hidden-xs'>
                            <div className='button' id='btn'>
                                <div className='bar top' />
                                <div className='bar middle' />
                                <div className='bar bottom' />
                            </div>
                        </div>
                        {/* nav-right */}
                    </nav>
                </main>
                <div className='sidebar'>
                    <ul className='sidebar-list'>
                        <li className='sidebar-item'>
                            <a href='#1' className='sidebar-anchor'>Item 1</a>
                        </li>
                        <li className='sidebar-item'>
                            <a href='#2' className='sidebar-anchor'>Item 2</a>
                        </li>
                        <li className='sidebar-item'>
                            <a href='#3' className='sidebar-anchor'>Item 3</a>
                        </li>
                        <li className='sidebar-item'>
                            <a href='#4' className='sidebar-anchor'>Item 4</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
