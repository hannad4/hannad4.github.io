import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBusinessTime} from '@fortawesome/free-solid-svg-icons'

export default function Work() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-10">
        <div className="flex flex-col w-full mb-10">
        <a href="#work" >
          <FontAwesomeIcon icon={faBusinessTime} className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white"/>
        </a>
          <h1 id="typewriter" className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
            My Work History
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            From joining the work force at age 16 till now - the most relevant positions are shown below
          </p>
        </div>

          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">January 2022 - Present</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Project Manager, 5G Implementation - Verizon</h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Driving Tri-State/NNJ 5G build plan to overcome obstacles & lead through a smooth POR target rollout
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Project Managing Small Cell New-Builds in the Newark and Jersey City polygons
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Providing Orchestration effort support for Macro & COW sites
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Worked cross-functionally with contractors, external vendors, and other engineering groups to plan and resolve conflicts throughout the build plan
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">June 2020 - Dec 2021</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Network Operations Engineer, LD Planning - Verizon</h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Ensured sufficient LD Transport capacity is available for over 150 internal and external customer demands in the SouthEast region
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Planned and provisioned circuits over the Ultra Long Haul (ULH), Optical Transport Network (OTN), former XO (fXO), former NNO (fNNO), and FlexGrid networks
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Actively utilized several internal Verizon assets to verify capacity and build projects while minimizing project revision count
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Worked cross-functionally with customers, other planners, and detailed engineering teams to resolve capacity constraints, port conflicts, and routing diversity issues
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Served as SE ULH lead for capacity planning and provisioning for critical government project originating in the SouthEast region
                </li>
              </ul>
              
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">Sep 2018 - June 2020</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Computer Technician, Residential Networking Services - The College of New Jersey</h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Performed wireless networking analysis to ensure signal strength and appropriate data speeds are met
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Assisted students with various technological issues, including: general mobile/computer wireless networking connectivity, malware/virus removal, data migration
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Performed hardware troubleshooting/fixes on a case-by-case basis
                </li>
              </ul>
            </li>

            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">May 2019 - Aug 2019</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Information Technology Project Coordinator - The College of New Jersey</h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Performed campus-wide computer imaging maintenance and upgrades
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Executed data backup and migration to upgraded computers, ensuring data is secured
                </li>
              </ul>
            </li>
          </ol>

        </div>
      </div>
    </section>
  );
}