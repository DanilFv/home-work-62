import logo from '../../assets/logo.png';
import * as React from 'react';

interface Props {
    className?: string;
}

const Logo: React.FC<Props> = ({className}) => {
    return (
       <div className={className}>
           <a href="">
               <img
                   style={{ width: '50px'}}
                   src={logo}
                   alt="HomePage"
               />
           </a>
       </div>
    );
};

export default Logo;