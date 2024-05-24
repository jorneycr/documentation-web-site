import cn from 'classnames';
import ButtonLink from '../ButtonLink';

import {Logo} from 'components/Logo';


export function HomeContent() {
  return (
    <>
      <div className="ps-0">
        <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center">
          <Logo
            className={cn(
              'mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out'
            )}
          />
          <h1 className="text-5xl font-display lg:text-6xl self-center flex font-semibold leading-snug text-primary dark:text-primary-dark">
            EMPRESA ABC
          </h1>
          <p className="text-4xl font-display max-w-lg md:max-w-full py-1 text-center text-secondary dark:text-primary-dark leading-snug self-center">
            Documentación
          </p>
          
          {/*           
          <div className="mt-5 self-center flex gap-2 w-full sm:w-auto flex-col sm:flex-row">
            <ButtonLink
              href={'/learn'}
              type="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              label="Learn React">
              Learn React
            </ButtonLink>
            <ButtonLink
              href={'/reference/react'}
              type="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              label="API Reference">
              API Reference
            </ButtonLink>
          </div> */}
          <div className="mt-5 self-center flex gap-2 w-full sm:w-auto flex-col sm:flex-row">
            <ButtonLink
              href={'/learn'}
              type="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              label="Learn React">
              PROYECTO1
            </ButtonLink>
            <ButtonLink
              href={'/reference/react'}
              type="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              label="API Reference">
              PROYECTO2
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}