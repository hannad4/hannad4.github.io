import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { GiLevelEndFlag } from "react-icons/gi";
import { BiRadar } from "react-icons/bi";
import { CiDumbbell } from "react-icons/ci";
import { VscCompassActive } from "react-icons/vsc";

export default function Ethics() {
  return (
    <section id="ethics">
      <div className="bg-gray-900 text-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px26 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-fuchsia-800">About Me</h2> */}
            <a href="#stats">
              <FontAwesomeIcon
                icon={faAddressCard}
                className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white"
              />
            </a>

            <p className="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">
              Who I am lies within these principles
            </p>
            <p className="text-base font-normal text-gray-300 dark:text-gray-300 mt-6">
              The following tenets are what I have found to be my guide as I
              personally and professionally develop through work and life.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-7xl items-center">
            <dl className="grid w-full p-5 grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:gap-x-20 items-center lg:items-center">
              <div className="relative pl-16 items-center lg:items-center">
                <dt className="text-2xl leading-7 text-fuchsia-500">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <BiRadar size={39} className="text-white" />
                  </div>
                  Versatile Insightfulness
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  Maintaining the ability to perceive that there's a bigger
                  picture, discerning the interconnectedness of various
                  components, and applying this knowledge to make informed
                  decisions.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-2xl leading-7 text-fuchsia-500">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <GiLevelEndFlag size={39} className="text-white" />
                  </div>
                  Asset Leverage
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  Understanding that it can't all be done solo. Using resources,
                  connections, & tools to the best of my ability so goals and
                  success can be achieved.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-2xl leading-7 text-fuchsia-500">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <VscCompassActive size={39} className="text-white" />
                  </div>
                  Reflective Rebalancing
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  Knowing that it is easy to get lost in the weeds. Recognizing
                  the importance of reflecting on the goal, analyzing the
                  current direction, & recalibrating with renewed focus and
                  purpose towards the journey.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-2xl leading-7 text-fuchsia-500">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <CiDumbbell size={39} className="text-white" />
                  </div>
                  Resiliency via Refinement
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  Learning to bounce back and grow from setbacks is what forges
                  growth for whatever comes next.
                </dd>
              </div>
            </dl>
          </div>
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-fuchsia-800">About Me</h2> */}

            <p className="text-base font-normal text-gray-650 dark:text-gray-650 mt-20 text-center lg:text-center">
              Proof is in the pudding - keep scrolling to find out more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
