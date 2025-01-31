import FA from "../views/FindAnimals";
import Main from "../views/main";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
const routes = [
    {path: "/", element: <Main/>},
    {path: "/Login", element: <SignIn/>},
    {path: "/Join", element: <SignUp/>},
    {path: "/Find-animals", element: <FA/>},
];

export default routes;