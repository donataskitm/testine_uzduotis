import FormApi from '../components/Form';
import List from '../pages/List';
import Detail from '../pages/Detail';
import Works from '../pages/Works';

const routeData = [
    
    {
        title: "Form for article",
        component: FormApi,
        url: '/pildymas',
        exact: true,
        requirePermission: false,
    },
    {
        title: "All articles' list",
        component: List,
        url: '/',
        exact: true,
        requirePermission: false,
    },
    {
        title: "Article details",
        component: Detail,
        url: '/aprasymas',
        exact: true,
        requirePermission: false,
    },
    {
        title: "Other works",
        component: Works,
        url: '/darbai',
        exact: true,
        requirePermission: false,
    },
]

export default routeData