import React from "react";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  linkText?: string;
  linkUrl?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-bold">{title}</h4>
      {linkText && linkUrl && (
        <Link
          href={linkUrl}
          className="text-blue-600">
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
