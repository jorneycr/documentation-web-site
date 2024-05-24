import * as React from 'react';
import Link from 'next/link';

export interface BlogCardProps {
  title?: string;
  badge?: boolean;
  icon?: string;
  date?: string;
  url?: string;
  children?: React.ReactNode;
}

function BlogCard({title, badge, date, icon, url, children}: BlogCardProps) {
  return (
    <Link
      href={url as string}
      passHref
      className="block h-full w-full rounded-2xl outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark">
      <div className="justify-between p-5 sm:p-5 cursor-pointer w-full h-full flex flex-col flex-1 shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10  hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10 rounded-2xl text-xl text-primary dark:text-primary-dark leading-relaxed">
        <div className="flex flex-row gap-3 w-full">
          <h2 className="font-semibold flex-1 text-2xl lg:text-3xl hover:underline leading-snug mb-4">
            {title}
          </h2>
        </div>
        <div>
          <div className="flex flex-row justify-start gap-2 items-center text-base text-tertiary dark:text-tertiary-dark">
            {icon === 'labs' && (
              <svg
                className="w-6 h-6 text-tertiary dark:text-tertiary-dark"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.4865 9C25.8297 9 24.4865 10.3431 24.4865 12C24.4865 13.6569 25.8297 15 27.4865 15V31.1087C27.4865 32.3397 27.1078 33.5409 26.4019 34.5494L13.095 53.5592C10.3114 57.5359 13.1563 63 18.0104 63H54.9626C59.8167 63 62.6616 57.5359 59.878 53.5592L46.5711 34.5494C45.8652 33.5409 45.4865 32.3397 45.4865 31.1087V15C47.1434 15 48.4865 13.6569 48.4865 12C48.4865 10.3431 47.1434 9 45.4865 9H27.4865ZM39.4865 31.1087V15H33.4865V31.1087C33.4865 33.5707 32.7292 35.9732 31.3173 37.9902L28.5104 42H44.4626L41.6557 37.9902C40.2438 35.9732 39.4865 33.5707 39.4865 31.1087ZM18.0104 57L24.3104 48H48.6626L54.9626 57H18.0104Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {date}
            {badge ? (
              <div className="h-fit px-1 bg-highlight dark:bg-highlight-dark rounded uppercase text-link dark:text-link-dark font-bold tracking-wide text-xs whitespace-nowrap">
                New
              </div>
            ) : null}
          </div>
          <span className="text-base text-secondary dark:text-secondary-dark">
            {children}
          </span>
          {children != null && (
            <div className="text-link text-base dark:text-link-dark hover:underline mt-4">
              Read more
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
