import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#171214",
        color: "white",
        textAlign: "center",
        fontSize: 17,
      }}
    >
      <p> Created by Darshil Lalchandani</p>
      <p style={{ marginBottom: 0 }}>
        Source at{" "}
        <a
          target="blank"
          href="https://github.com/Darshil-Lalchandani/Meme-Generator"
          style={{ color: "salmon" }}
        >
          {" "}
          Github
        </a>
      </p>
    </footer>
  );
}
