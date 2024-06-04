import Card from "./UI/Card";
import { useState } from "react";
import './FA.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineCrown } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const FA = ({ Ques }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className="section-wrapperr">
                <h2>
                    <span><AiOutlineCrown /></span> Our Testimonial
                </h2>
                <div className="section-wrapper">
                    {Ques.map((Q, i) => (
                        <div key={i} className="card-container">
                            <div className="card">
                                <div className="plus" onClick={() => toggle(i)}>
                                    <h2>{Q.question}</h2>
                                    <span>{activeIndex === i ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                                </div>
                                <p className={activeIndex === i ? 'open' : 'close'}>{Q.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FA;
