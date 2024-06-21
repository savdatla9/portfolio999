import React, { useEffect, useState } from 'react';

import { TbHomeFilled } from "react-icons/tb";

import './App.css';

const Header = () => {
    const [activeScroll, setAScroll] = useState(false);

    const handleScroll = (e) => {
        if(window.scrollY>20) {
            setAScroll(true);
        } else {
            setAScroll(false);
            console.log(window.scrollY);
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => { 
            window.removeEventListener('scroll', handleScroll) 
        };
    }, []);

    return (
        <div className={activeScroll===false ? 'head2' : 'head1'}>
            <div style={{display: 'flex', paddingLeft: '10px'}}>
                <div style={{width: '90%'}}><TbHomeFilled size='1.5em' /></div>

                <div className='resume'>Resume</div>
            </div>
        </div>
    )
};

export default Header;