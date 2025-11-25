// src/router.jsx
import { lazy } from "react";

export const Home = lazy(() => import("./pages/Home"));
export const About = lazy(() => import("./pages/About"));
export const Offers = lazy(() => import("./pages/Offers"));
export const Jobs = lazy(() => import("./pages/Jobs"));
export const Store = lazy(() => import("./pages/Store"));
export const Contact = lazy(() => import("./pages/Contact"));
