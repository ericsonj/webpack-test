import React from 'react'

interface CompProps {
    title: string
    href: string
  }


const Comp: React.FC<CompProps> = ({ title, href }) => (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
    >
        <h1>
            Hello World from <a href={href}>{title}</a>
        </h1>
    </div>
)

export default Comp