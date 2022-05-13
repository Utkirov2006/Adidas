import React from 'react';


const Home = (props) => {
    return (
        <div className='home'>

            <h1>adidas <br />
                Alphabounce</h1>

            <hh>The company was started by Adolf Dassler in his mother's house <br />
                he was joined by his elder brother Rudolf in 1924 under the foot <br />
                name Dassler Brothers Shoe Factory.</hh>

            <img src={props.img} style={{width:"100%",height:"89vh"}} />
            <button className='btn1'>SHOP NOW</button>
        </div>
    );
};

export default Home;