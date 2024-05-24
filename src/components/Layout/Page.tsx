import {Suspense} from 'react';
import * as React from 'react';
import {useRouter} from 'next/router';
import {SidebarNav} from './SidebarNav';
import {Footer} from './Footer';
import {Toc} from './Toc';
import {Seo} from 'components/Seo';
import PageHeading from 'components/PageHeading';
import {getRouteMeta} from './getRouteMeta';
import {TocContext} from '../MDX/TocContext';
import type {TocItem} from 'components/MDX/TocContext';
import type {RouteItem} from 'components/Layout/getRouteMeta';
import {HomeContent} from './HomeContent';
import {TopNav} from './TopNav';
import cn from 'classnames';

import(/* webpackPrefetch: true */ '../MDX/CodeBlock/CodeBlock');

interface PageProps {
  children: React.ReactNode;
  toc: Array<TocItem>;
  routeTree: RouteItem;
  meta: {
    title?: string;
    titleForTitleTag?: string;
    canary?: boolean;
    description?: string;
  };
  section: 'learn' | 'reference' | 'community' | 'home' | 'unknown';
}

export function Page({children, toc, routeTree, meta, section}: PageProps) {
  const {asPath} = useRouter();
  const cleanedPath = asPath.split(/[\?\#]/)[0];
  const {route, breadcrumbs, order} = getRouteMeta(
    cleanedPath,
    routeTree
  );
  const title = meta.title || route?.title || '';
  const canary = meta.canary || false;
  const description = meta.description || route?.description || '';
  const isHomePage = cleanedPath === '/';

  let content;
  if (isHomePage) {
    content = <HomeContent />;
  } else {
    content = (
      <div className="ps-0">
        <div
          className={cn(
          )}>
          <PageHeading
            title={title}
            canary={canary}
            description={description}
            tags={route?.tags}
            breadcrumbs={breadcrumbs}
          />
        </div>
        <div className="px-5 sm:px-12">
          <div
            className={cn(
              'max-w-7xl mx-auto',
            )}>
            <TocContext.Provider value={toc}>{children}</TocContext.Provider>
          </div>
        </div>
      </div>
    );
  }

  let hasColumns = true;
  let showSidebar = true;
  let showToc = true;
  if (isHomePage) {
    hasColumns = false;
    showSidebar = false;
    showToc = false;
  }

  let searchOrder;
  if (section === 'learn') {
    searchOrder = order;
  }

  return (
    <>
      <Seo
        title={title}
        titleForTitleTag={meta.titleForTitleTag}
        isHomePage={isHomePage}
        image={`/images/og-` + section + '.png'}
        searchOrder={searchOrder}
      />
      <TopNav
        section={section}
        routeTree={routeTree}
        breadcrumbs={breadcrumbs}
      />
      <div
        className={cn(
          hasColumns &&
            'grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc'
        )}>
        {showSidebar && (
          <div className="lg:-mt-16">
            <div className="lg:pt-16 fixed lg:sticky top-0 start-0 end-0 py-0 shadow lg:shadow-none">
              <SidebarNav
                key={section}
                routeTree={routeTree}
                breadcrumbs={breadcrumbs}
              />
            </div>
          </div>
        )}
        {/* No fallback UI so need to be careful not to suspend directly inside. */}
        <Suspense fallback={null}>
          <main className="min-w-0 isolate">
            <article
              className="break-words font-normal text-primary dark:text-primary-dark"
              key={asPath}>
              {content}
            </article>
            <div
              className={cn(
                'self-stretch w-full',
                isHomePage && 'footer-abc bg-wash dark:bg-gray-95 mt-[1px]'
              )}>
              {!isHomePage && (
                <div className="mx-auto w-full px-5 sm:px-12 md:px-12 pt-10 md:pt-12 lg:pt-10">
                  {
                    <hr className="max-w-7xl mx-auto border-border dark:border-border-dark" />
                  }

                </div>
              )} 
              <div
                className={cn(
                  'py-5 px-5 sm:px-5 md:px-5 sm:py-5 md:py-5 lg:py-5',
                  isHomePage && 'lg:pt-5'
                )}>
                <Footer />
              </div>
            </div>
          </main>
        </Suspense>
        <div className="-mt-16 hidden lg:max-w-xs 2xl:block">
          {showToc && toc.length > 0 && <Toc headings={toc} key={asPath} />}
        </div>
      </div>
    </>
  );
}
