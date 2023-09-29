
import Link from "next/link";
import React, { FC } from "react";

interface MarkdownLiteProps {
  text: string;
}

const hostName = "benmendis.vercel.app";

const MarkdownLite: FC<MarkdownLiteProps> = ({ text }) => {
  const linkRegex = /\[(.+?)\]\((.+?)\)/g;
  const parts = [];

  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    const matchStart = match.index;
    const matchEnd = matchStart + fullMatch.length;

    const linkObj = new URL(linkUrl);

    console.log("Parts",parts);
    console.log("link URL",linkUrl);
    console.log("Link obj", linkObj);
    
    

    if (lastIndex < matchStart) {
      parts.push(text.slice(lastIndex, matchStart));
    }

    if (linkObj.hostname === hostName) {
      console.log("internal link");
      parts.push(
        <Link
          rel="noreferrer"
          className="break-words underline underline-offset-2 text-accent"
          key={linkObj.pathname}
          href={linkObj.pathname}
        >
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="break-words underline underline-offset-2 text-accent"
          key={linkUrl}
          href={linkUrl}
        >
          {linkText}
        </Link>
      );
    }


    lastIndex = matchEnd;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>{part}</React.Fragment>
      ))}
    </>
  );
};

export default MarkdownLite;
