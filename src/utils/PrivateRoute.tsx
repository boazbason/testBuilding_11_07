import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {

    const floorAccess = useSelector((state: {floorAccess: {floorAccess: boolean[]}})=>state.floorAccess.floorAccess)
    const {index} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        if(!floorAccess[parseInt(index || "0")]){
            navigate("/forbidden")
            console.log("go to biddddden");
            
        }

    },[index])

    


    return(

        <div>
            {component}
        </div>
    )
};

export default PrivateRoute