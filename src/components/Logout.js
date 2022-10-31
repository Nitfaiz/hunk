import React, { useEffect, useState } from "react";

const Logout = (props) => {
    const [isUserLogin, setUserLogin] = useState(localStorage.getItem("isLogin") === "true" ? true : false);

    useEffect(() => {
        const isLogin = localStorage.setItem('isLogin', false);
        setUserLogin(isLogin);
        props.history.push('/');
    });


    return (
        <div className="firstpage">
            {/* <button className="btn btn-warning" onClick={() => logouthandle()}>Logout</button> */}
        </div>
    );

}

export default Logout;
