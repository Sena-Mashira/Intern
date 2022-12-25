import React from 'react'
import './App.css';
import { useState } from 'react';

function Fyve() {
    const [email, setEmail] = useState("")

    const btnClick = () => {
        if (email.includes("@" && "com")) {
            let input = document.querySelector('input')
            alert(`Your Email is ${email}`)
            console.log("Hello")
            input.value = ""
        } if (!email.includes("@" && "com")) {
            alert('Masukkan Email Dengan Benar')
        }
    }
    return (
        <div className="fyve" >
            <div className='fyve-container'>
                <form>
                    <input type="email" placeholder='Your Email...' onChange={(e) => setEmail(e.target.value)} required />
                    <button type='button' onClick={btnClick}>send Email</button>
                </form>
            </div>
        </div>
    )
}

export default Fyve;
