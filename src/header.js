import React, { useEffect, useState } from 'react';

import { TbHomeFilled } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";

import './App.css';

const Header = () => {
    const [activeScroll, setAScroll] = useState(false);
    const [page, setPage] = useState('');

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

        setPage(window.location.pathname);

        return () => { 
            window.removeEventListener('scroll', handleScroll) 
        };
    }, []);

    return (
        <div className={activeScroll===false ? 'head2' : 'head1'}>
            <div style={{display: 'flex', paddingLeft: '10px'}}>
                <div style={{width: '90%'}}>
                    <TbHomeFilled size='1.5em' />
                </div>

                {(page!=='/signup' && page!=='/login') && <div className='resume'> 
                    <FaRegFilePdf size='1.2em' style={{marginTop: '-3px'}} /> Resume
                </div>}
            </div>
        </div>
    );
};

export default Header;