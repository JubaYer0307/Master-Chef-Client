import React from 'react';

const Banner = () => {
    return (
        <div 
            style={{
                backgroundImage: "url('https://img.freepik.com/premium-vector/chef-cooking-kitchen-vector-illustration-flat-style_450176-204.jpg?w=2000')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                maxWidth: '600px',
                textAlign: 'center'
             }}>
                <h1>Welcome to Food Recipes </h1>
                <p>Discover delicious recipes, cooking tips and more from our team of talented chefs.</p>
            </div>
        </div>
    );
};

export default Banner;
