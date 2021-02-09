import React from 'react';
import { Link } from 'gatsby';

export default function NavBar() {
    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-evenly',
                borderBottom: '1px solid #d1c1e0',
            }}
        >
            <span>You are not logged in</span>
            <nav>
                <Link>Home</Link>
                <Link>Profile</Link>
                <Link>Logout</Link>
            </nav>
        </div>
    )
}