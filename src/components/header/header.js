import './header.less'

function Header() {
    console.log(process.env.NODE_ENV)
    return (
        <div className="header"><span>欢迎来到my React</span><span>登录</span></div>
    )

}
export default Header;