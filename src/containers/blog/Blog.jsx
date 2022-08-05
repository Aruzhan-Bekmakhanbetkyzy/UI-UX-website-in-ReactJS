import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05} from './imports';
import "./blog.css";

const Blog = () => {
    return (
        <div className="gpt3__blog section-padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imageUrl={blog01} date='Aug 05, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imageUrl={blog02} date='Aug 05, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imageUrl={blog03} date='Aug 05, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imageUrl={blog04} date='Aug 05, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imageUrl={blog05} date='Aug 05, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
            </div>
        </div>
    );
};

export default Blog;
