import { Fragment, useMemo } from 'react';
import { HandHeart, Home, LifeBuoy, Loader, Users } from 'lucide-react';

import { BurgerMenu, Header } from '@/components';
import { AboutCardInfo, ServicedFrontInfo } from './components';
import { frontItems } from './frontItems';
import { useGithubContributors } from '@/hooks';
import WithTooltip from '@/components/ui/with-tooltip';
import { removeDuplicatesByField } from '@/lib/utils';
import { IAboutUsPerson } from './types';

const AboutUs = () => {
  const { data: frontendContributors, loading: loadingFrontendContributors } =
    useGithubContributors('sos-rs', 'frontend');
  const { data: backendContributors, loading: loadingBackendContributors } =
    useGithubContributors('sos-rs', 'backend');

  const persons: IAboutUsPerson[] = [
    {
      name: 'Klaus Riffel',
      link: 'https://www.linkedin.com/in/klaus-riffel-69441928/',
    },
    {
      name: 'Rhuam Estevam',
      link: 'https://www.linkedin.com/in/rhuam/',
    },
    {
      name: 'José Fagundes',
      link: 'https://www.linkedin.com/in/jos%C3%A9-fagundes/',
    },
    {
      name: 'Manoel Júnior',
      link: 'https://www.linkedin.com/in/manoelfpjunior/',
    },
    {
      name: 'Vinicius Arantes',
      link: 'https://www.linkedin.com/in/viniciusrnt/',
    },
    {
      name: 'Thiago Marins',
      link: 'https://www.linkedin.com/in/thiago-dable',
    },
    {
      name: 'Gabriel Mancuso',
      link: 'https://www.linkedin.com/in/luizgabrielmancuso/',
    },
    {
      name: 'Max Riffel',
      link: 'https://www.linkedin.com/in/max-riffel-07a134a1/',
    },
    {
      name: 'Kiwi Bertola',
      link: 'https://www.linkedin.com/in/kiwi-bertola-10079073/',
    },
  ];

  const loading = useMemo(
    () => loadingBackendContributors || loadingFrontendContributors,
    [loadingBackendContributors, loadingFrontendContributors]
  );
  const contributors = useMemo(
    () =>
      removeDuplicatesByField(
        'login',
        frontendContributors,
        backendContributors
      ),
    [frontendContributors, backendContributors]
  );

  return (
    <div className="flex flex-col h-screen items-center">
      <Header title="SOS Rio Grande do Sul" startAdornment={<BurgerMenu />} />
      <div className="flex flex-col gap-4 p-4 max-w-4xl pb-8 w-full">
        <h2 className="text-5xl pt-4 font-semibold !text-zinc-900">About us</h2>
        <h4 className="text-lg text-muted-foreground font-medium">
          Learn about the history of the SOS RS project
        </h4>
        <h3 className="text-3xl font-medium text-muted-foreground mt-7">
          How it all started
        </h3>
        <p className="text-justify text-md md:text-lg font-medium [&>a]:text-blue-500 [&>a]:hover:text-blue-700 [&>a]:active:text-blue-800">
          Started on Sunday (04/05) and concluded on Monday (05/05), after 18
          hours of development, our webapp <b>SOS RS 🛟</b>, conceived and
          developed by{' '}
          {persons.slice(0, -1).map((p, idx) => (
            <Fragment key={idx}>
              <a className="hover:underline" href={p.link} target="_blank">
                {p.name}
              </a>
              {', '}
            </Fragment>
          ))}{' '}
          e{' '}
          <a
            className="hover:underline"
            href={persons.at(-1)?.link}
            target="_blank"
          >
            {persons.at(-1)?.name}
          </a>
          , achieved truly inspiring results.
        </p>
        <p className="text-justify font-medium text-md md:text-lg">
          SOS RS quickly gained prominence in WhatsApp groups thanks to its
          collaborative model. We quickly reached the level of all other demand
          management initiatives combined and launched our open source
          community, receiving a flood of contributions: our project has
          achieved <b>600 estrelas no GitHub</b> and it was{' '}
          <b>forked over 350 times!</b>
        </p>
        <h3 className="text-3xl font-medium text-muted-foreground mt-8 ">
          Our partners
        </h3>
        <p className="text-justify font-medium text-md md:text-lg">
          We have formed solid partnerships with more than 1,400 volunteers,
          strengthening our mission. Today, we are celebrating figures that
          speak for themselves.
        </p>
        <div className="flex gap-2 flex-wrap mt-4">
          <AboutCardInfo
            icon={<Home />}
            topLabel="mais de"
            centerLabel="800"
            bottomLabel="abrigos atendidos"
            className="flex-1"
          />
          <AboutCardInfo
            icon={<Users />}
            topLabel="apoio de mais de"
            centerLabel="1400"
            bottomLabel="voluntários"
            className="flex-1"
          />
          <AboutCardInfo
            icon={<HandHeart />}
            topLabel="mais de"
            centerLabel="55.000"
            bottomLabel="pessoas beneficiadas desde o lançamento"
            className="w-full"
          />
        </div>
        <p className="text-justify font-medium text-md md:text-lg leading-10">
          Atualmente, o <b>SOS RS </b>
          <LifeBuoy
            className="align-middle inline-block relative max-h-6 padding pb-0.5"
            size={18}
          />{' '}
          supports the management of the demands and needs of Rio Grande do
          Sul's shelters do Sul with public, up-to-date, reliable and auditable
          information.
        </p>
        <h3 className="text-2xl font-medium text-muted-foreground mt-4">
          Fronts addressed
        </h3>
        <div className="flex flex-col gap-6">
          {frontItems.map((item, idx) => (
            <ServicedFrontInfo key={idx} {...item} />
          ))}
        </div>
        <p className="text-justify font-medium text-md md:text-lg mt-4">
          SOS RS's group of volunteers now numbers more than 2100 people and
          around 126,000 hours of work since the initiative was set up.
        </p>
        <h3 className="text-2xl font-medium text-muted-foreground mt-4">
          Platform contributors ({contributors.length})
        </h3>
        <div className="flex flex-wrap gap-2">
          {loading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            contributors.map((contributor, idx) => (
              <WithTooltip key={idx} content={contributor.login}>
                <a href={contributor.html_url} target="_blank">
                  <img
                    className="rounded-full w-10 h-10 md:w-12 md:h-12"
                    src={contributor.avatar_url}
                  />
                </a>
              </WithTooltip>
            ))
          )}
        </div>
      </div>
      <div className="bg-black [&>p]:text-white p-8 w-full flex justify-center mt-4">
        <p className="text-justify text-md md:text-lg">
          We thank everyone who has made this impact possible! Let's go keep
          working together to make a difference. Access:{' '}
          <a
            href="https://sos-rs.com"
            className="hover:underline text-blue-500 hover:text-blue-600 active:text-blue-700"
          >
            sos-rs.com
          </a>
        </p>
      </div>
    </div>
  );
};

export { AboutUs };
