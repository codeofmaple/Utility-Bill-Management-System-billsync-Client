import React from 'react';
import styled from 'styled-components';

const Loader = ({ pageName = "page" }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="loader">
                    <p>loading</p>
                    <div className="words">
                        <span className="word">{pageName}</span>
                        <span className="word">content</span>
                        <span className="word">data</span>
                        <span className="word">{pageName}</span>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
.card {
    background-color: oklch(var(--b1));
    padding: 1rem 2rem;
    border-radius: 1.25rem;
    border: 1px solid oklch(var(--bc) / 0.1);
}
.loader {
    color: oklch(var(--bc) / 0.7);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: flex;
    border-radius: 8px;
}

.words {
    overflow: hidden;
    position: relative;
}
.words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        oklch(var(--b1)) 10%,
        transparent 30%,
        transparent 70%,
        oklch(var(--b1)) 90%
    );
    z-index: 20;
}

.word {
    display: block;
    height: 100%;
    padding-left: 6px;
    background: linear-gradient(135deg, #06b6d4, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: spin_4991 3s infinite;
}

@keyframes spin_4991 {
    0% {
        transform: translateY(0%);
    }
    20% {
        transform: translateY(-100%);
    }
    40% {
        transform: translateY(-100%);
    }
    45% {
        transform: translateY(-200%);
    }
    65% {
        transform: translateY(-200%);
    }
    70% {
        transform: translateY(-300%);
    }
    90% {
        transform: translateY(-300%);
    }
    95% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(0%);
    }
}`;

export default Loader;