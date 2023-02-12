import React, { useState } from 'react'

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <div>
                <h3>3000 Waterview Parkway Richardson, TX</h3>
                <h3>aiaautdallas@gmail.com</h3>
                <h3>(469) 644 1661</h3>
                <span>Name </span>
                <input
                    placeholder="Enter Your Name"
                    type="text"
                    className="form-control"
                />
                <span>Email </span>
                <input
                    placeholder="Enter Your Email"
                    type="text"
                    className="form-control"
                />
                <span>Subject </span>
                <input
                    placeholder="Enter Your Subject"
                    type="text"
                    className="form-control"
                />
                <span>Message </span>
                <textarea
                    placeholder="Enter Your messages"
                    type="text"
                    className="form-control"
                />
                <button>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Contact