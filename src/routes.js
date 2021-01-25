import { lazy } from "react";


const routesPages = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: lazy(() =>
            import("./pages/homePage/HomePage" /* webpackChunkName: "HomePage"*/)
        ),

    },
    {
        path: "/movies",
        name: "Movies",
        exact: false,
        component: lazy(() =>
            import("./pages/moviePages/MoviesPage" /* webpackChunkName: "MoviesPage"*/)
        )
    },
]

const routesDetailPages = [
    {
        path: "/movies/:movieId",
        name: "MovieDetailsPage",
        exact: false,
        component: lazy(() =>
            import(
                "./pages/movieDetailPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage"*/
            )
        ),
    }
]

const routesInnerPages = [
    {
        path: "/:movieId/cast",
        name: "Cast",
        exact: false,
        component: lazy(() =>
            import(
                "./pages/innerMovieDetails/cast/Cast" /* webpackChunkName: "Cast"*/
            )
        ),
    },
    {
        path: "/:movieId/reviews",
        name: "Reviews",
        exact: false,
        component: lazy(() =>
            import(
                "./pages/innerMovieDetails/reviews/Reviews" /* webpackChunkName: "Reviews"*/
            )
        ),
    },
];


export { routesPages, routesDetailPages, routesInnerPages }

