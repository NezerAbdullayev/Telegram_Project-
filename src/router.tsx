import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import { RouterType } from "./models";
import BiographyPage from "./pages/BiographyPage";
import ArticlesPage from "./pages/ArticlesPage";
import QuotesPage from "./pages/QuotesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import LegacyPage from "./pages/LegacyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: RouterType.BIOGRAFYS, element: <BiographyPage /> },
      { path: RouterType.ARTICLES, element: <ArticlesPage /> },
      { path: RouterType.QUOTES, element: <QuotesPage /> },
      { path: RouterType.LEGACY, element: <LegacyPage /> },
      { path: RouterType.GALLERY, element: <GalleryPage /> },
      { path: RouterType.CONTACT, element: <ContactPage /> }
    ]
  }
]);
