import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

type CopyProps = {
  btnValue: string;
  copytext: string;
  onCopy: any;
};

const CopyButton = ({ btnValue, copytext, onCopy }: CopyProps) => {
  return (
    <CopyToClipboard text={copytext} onCopy={onCopy}>
      <button>{btnValue}</button>
    </CopyToClipboard>
  );
};

export default CopyButton;
