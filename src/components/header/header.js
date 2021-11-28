import './header.less'
import React, { useState, useEffect, useRef } from 'react';
const dataArr = [{ name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }, { name: 'hello' }]
function test() {
    setTimeout(() => {
        console.log('test')
    }, 1000);

}

function Header() {
    const _ = require('lodash');
    console.log(process.env.NODE_ENV)
    const windowHeight = window.innerHeight;
    const headerRef = useRef(null);
    let [data, setData] = useState(dataArr);
    const throttle = _.throttle(test, 3000)
    // const throttle = _.debounce(test, 3000)

    useEffect(() => {
        // Update the document title using the browser API

        window.addEventListener('scroll', (event) => {
            throttle()
            console.log('windowHeight', windowHeight, 'window.scrollY', window.scrollY, 'elementHeight', headerRef.current.clientHeight)
            if (headerRef.current.clientHeight - windowHeight - window.scrollY < 12) {
                console.log("距离底部10了加载数据")
                data = data.concat(dataArr)
                setData(data)

            }
        })



    });
    return (
        <div className="header" >
            <div ref={headerRef}>
                {data.map((item, index) => {
                    return (<div key={index}>{item.name}{index}</div>)
                })}
            </div>
        </div>
    )

}
export default Header;