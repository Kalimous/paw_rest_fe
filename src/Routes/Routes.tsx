import FA from "../views/FindAnimals";
import Main from "../views/main";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Register from '../views/main/menu/Register'
const routes = [
    {path: "/", element: <Main/>},
    {path: "/Login", element: <SignIn/>},
    {path: "/Join", element: <SignUp/>},
    {path: "/Find-animals", element: <FA/>},
    {path: "/Register", element: <Register/>}
];

export default routes;