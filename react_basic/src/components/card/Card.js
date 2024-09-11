import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    position: relative;
`;

const CardImage = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 8px;
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
    z-index: 10;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
`;

const Card = () => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg src="https://i.pinimg.com/236x/98/1a/86/981a86ed79d43400487cfff9e6f8fc59.jpg" alt=""/>
            </CardImage>
            <CardContent>
                <div>
                    <div>
                        <img src="https://i.pinimg.com/236x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg" alt=""/>
                        <span>Duc Thien</span>
                    </div>
                    <div>
                        256
                    </div>
                </div>
                <div>
                    <h3>Comedy</h3>
                    <span>12,000,000 PSL</span>
                </div>
            </CardContent>
        </StyledCard>
    );
};

export default Card;