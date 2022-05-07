import React from "react";
import { Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
      <Card className="text-center my-3">
        <Card.Body>
          <Card.Title>Difference between javascript and nodejs</Card.Title>
          <Card.Text>
            Javascript is a programming language that is used for writing
            scripts on the website. Which is basically used on the client-side
            to add HTML and play with the DOM. It is the upgraded version of
            ECMA script that uses Chrome's V8 engine written in C++. On the
            other hand NodeJS is a Javascript runtime environment. Which is
            mostly used on the server-side. It has no capability to add HTML
            tags. Nodejs is written in C, C++ and Javascript.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center my-3">
        <Card.Body>
          <Card.Title>Differences between sql and nosql databases.</Card.Title>
          <Card.Text>
            RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). WHich is best suited
            for complex queries not for hierarchical data storage. These
            databases have fixed or static or predefined schema. On the
            otherhand, Non-relational or distributed database system is best
            suited for hierarchical data storage not so good for complex
            queries. They have dynamic schema
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center my-3">
        <Card.Body>
          <Card.Title>
            What is the purpose of jwt and how does it work?
          </Card.Title>
          <Card.Text>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.JWTs are used as a secure
            way to authenticate users and share information. Typically, a
            private key, or secret, is used by the issuer to sign the JWT. The
            receiver of the JWT will verify the signature to ensure that the
            token hasn't been altered after it was signed by the issuer.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
