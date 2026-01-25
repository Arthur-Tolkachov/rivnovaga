import Link from "next/link";
import React from "react";

import HomeIcon from "@public/assets/icons/home.svg";

export interface BreadCrumbsProps {
  home?: {
    title: string;
    href: string;
  };
  config?: {
    key: string;
    title: string;
    href?: string;
  }[];
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ config, home }) => (
  <ul className="flex flex-wrap gap-3">
    <li>
      <Link
        href={home?.href || "/"}
        className="flex gap-3 text-secondary-darker hover:underline group"
      >
        <HomeIcon className="w-5 h-5 fill-secondary-darker group-hover:fill-secondary-main duration-200" />
        {home?.title || "Головна"}
      </Link>
    </li>

    {config?.map(({ key, title, href }) => (
      <React.Fragment key={key}>
        <li>
          <span className="text-primary-main">/</span>
        </li>
        <li>
          {href && (
            <Link href={href} className="text-secondary-darker hover:underline">
              {title}
            </Link>
          )}
          {!href && <span className="text-primary-main">{title}</span>}
        </li>
      </React.Fragment>
    ))}
  </ul>
);
