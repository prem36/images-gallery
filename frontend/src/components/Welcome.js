import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <div class="bg-light p-5 rounded-lg m-3">
    <h1>Images Gallery</h1>
    <p class="lead">
      This is a simple application that retrieves photos using Unsplash API. In
      order to start, enter any search term in the input field.
    </p>
    <hr class="my-4" />
    <p>Click below to check out Unsplash API</p>
    <a
      class="btn btn-primary btn-lg"
      href="https://unsplash.com"
      role="button"
      target="_blank"
    >
      Learn more
    </a>
  </div>
);

export default Welcome;
