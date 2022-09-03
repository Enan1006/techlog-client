import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-base-200 text-base-content">
            <div>
                <p>TECHLOG<br />Providing reliable tech since 1992</p>
            </div>
            <div>

                <span class="footer-title">Services</span>
                <Link to='/' class="link link-hover">Manufacturing</Link>
                <Link to='/' class="link link-hover">Sell item</Link>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <Link to='/' class="link link-hover">About us</Link>
                <Link to='/' class="link link-hover">Contact</Link>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <Link to='/' class="link link-hover">Terms of use</Link>
                <Link to='/' class="link link-hover">Privacy policy</Link>
                <Link to='/' class="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;