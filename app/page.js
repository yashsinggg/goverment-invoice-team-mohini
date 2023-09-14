"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";

import { UserButton } from "@clerk/nextjs";

function App() {
  return (
    <div className="App d-flex w-full flex-column align-items-center justify-content-center">
      <nav class="bg-white border-gray-200 dark:bg-gray-900 w-full">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-25 mr-300 ml-30"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-Black ml-30">
              Goverment Invoice
            </span>
          </a>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <Container>
        <InvoiceForm />
      </Container>
    </div>
  );
}

export default App;
