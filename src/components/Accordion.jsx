import { useState } from "react";
import Item from "./Item";
export default function Accordion() {
    const [faqs, setFaqs] = useState([
        {
            title: "Where are these chairs assembled?",
            text: "Our chairs are assembled in our manufacturing facility located in Germany, ensuring the highest quality standards in every product."
        },
        {
            title: "How long do I have to return my chair?",
            text: "You have 30 days from the date of purchase to return your chair. Please ensure it is in its original packaging and condition for a full refund."
        },
        {
            title: "Do you ship to countries outside the EU?",
            text: "Yes, we offer international shipping to several countries outside the EU. Shipping costs and times vary by location. Please check our shipping policy for more details."
        }
    ]);
    
    const [curOpenNum, setCurOpenNum] = useState(null)

    return (


        <div className="accordion">
            {faqs.map((item, index) => (
                <Item
                    key={index}
                    title={item.title}
                    num={index + 1}
                    curOpenNum={curOpenNum}
                    Onopen={setCurOpenNum}
                >
                    <span>{item.text}</span>
                </Item>
            ))}
        </div>
    );
}
