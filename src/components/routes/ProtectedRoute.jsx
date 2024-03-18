import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoute = ({
    // eslint-disable-next-line react/prop-types
    canActive,
    // eslint-disable-next-line react/prop-types
    redirectPath = '/'

}) => {
    if (!canActive) {
        return <Navigate to={redirectPath} replace/>
    }

    return <Outlet/>
}

export default ProtectedRoute