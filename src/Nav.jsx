
function Nav(){
    return(
            <div className="nav">
                <h1>W.</h1>
                <select name="explore" id=""> <option value="value">Explore</option></select>
                <a href="" className="login">Directory</a>
                <a href="" className="login">Academy</a>
                <a href="" className="login">Conferences <span className="to">2</span></a>
                <a href="" className="login">Market</a>
                <form action="">
                    <input type="text" placeholder="Search by inspiration" className="search"/>
                </form>
               
                    <a href="" className="login">Login</a>
                    <a href="" className="login">Sign in</a>
                    <button id="id1">Be Pro</button>
                    <button id="id2">Submit Website</button>
            </div>
    )
}

export default Nav