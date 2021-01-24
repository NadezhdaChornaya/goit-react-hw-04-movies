import { lazy } from "react";

const routesPages = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: lazy(() =>
            import("./pages/homePage/HomePage" /* webpackChunkName: "HomePage"*/)
        )
    },
    {
        path: "/movies",
        name: "Movies",
        exact: true,
        component: lazy(() =>
            import("./pages/MoviesPage" /* webpackChunkName: "MoviesPage"*/)
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
                "./pages/innerMovieDetails/Cast" /* webpackChunkName: "Cast"*/
            )
        ),
    },
    {
        path: "/:movieId/reviews",
        name: "Reviews",
        exact: false,
        component: lazy(() =>
            import(
                "./pages/innerMovieDetails/Reviews" /* webpackChunkName: "Reviews"*/
            )
        ),
    },
];


export { routesPages, routesDetailPages, routesInnerPages }

