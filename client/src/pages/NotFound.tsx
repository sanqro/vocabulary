import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";

function notFound() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <LinkButton className="py-2 px-4 text-white rounded mx-10% bg-blue-500" destination="/">
          Go home
        </LinkButton>
      </main>
      <Footer />
    </div>
  );
}

export default notFound;
