import { Outlet } from "react-router";
 
 
 

const Root = () => {
    return (
        <div className="mx-8  ">
          
          <Outlet></Outlet>
        </div>
    );
};

export default Root;