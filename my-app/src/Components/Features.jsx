import React from 'react';

const Features = (props) => {
    return (
        <div className='features'>
            <img src={props.img} style={{ width: "100%", height: "89vh" }} />

            <ul className='wrapper'>
                <h4 style={{fontSize:"50px"}}>adidas <br />
                    Alphabounce</h4>
                <li>Torison Control System</li>
                <li>Segments of Solid Rubber</li>
                <li>Thin Mesh Sewr panel</li>
                <li>Molded Sockliner Mimics</li>
                <li>Waffle Outsole Pistons</li>

            </ul>

        </div>
    );
};

export default Features;