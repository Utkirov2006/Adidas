import React from 'react';

const About = (props) => {
    return (
        <div className='about'>
            <img src={props.img} style={{ width: "100%", height: "89vh" }} />

            <div className="list">
                <h2>Support and ultralight <br />comfort zone is guranted</h2>

                <aa>The company was started by Adolf Dassler in his <br />
                    mother's house he was joined by his elder brother <br />
                    Rudolf Molded EVA midsole plug.</aa>

                <ol style={{ fontSize: "80px", marginLeft: "-2rem" }}>$265</ol>

                <button className='btn2'> ADD TO CART</button>
            </div>


        </div>
    );
};

export default About;