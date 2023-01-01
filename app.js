import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement('h1',{key:1}, 'assalamualikum all')
    
const heading2 = React.createElement('h2',{key:2}, 'alikumassalamu ')
const div = React.createElement('p',{key:4}, [heading1, heading2])

const hrefTag = React.createElement('a',{href: 'www.google.com',key:2,  target:"_blank", rel:"noopener noreferrer"}, "to redirect google")

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render([hrefTag, div])