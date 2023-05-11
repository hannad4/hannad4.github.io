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
            From joining the work force at age 14 till now - positions outlined below
          </p>
        </div>

          <ol class="relative border-l border-gray-200 dark:border-gray-700">

          <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">January 2023 - Present </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Engineer III - System Performance, SW Region - Verizon</h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Actively field-testing temporary asset deployments for large-scale events, enabling sufficient data aggregation to facilitate system optimization for hundreds of assets serving over 30,000 customers 
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Strategically partnering with implementation teams to address customer needs via monitoring of deficiently performing systems, identifying in-flight solution projects for over 85% of areas within 7 markets across 3 states
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Purposefully monitoring and tracking project progress on a daily basis, providing attention to bottleneck concerns for dozens of projects at any given time
                </li>
              </ul>
            </li>
            
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">January 2022 - December 2022</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Engineer II - Project Management, 5G Implementation - Verizon</h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Drove the 5G build process to overcome obstacles & supplement the cost-effective and smooth plan of record (POR) rollout for over 650 mmWave turnups, exceeding objectives by 113%
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Spearheaded analysis and resolution of complications in the build-out procedure, resulting in over 100 Small Cell New-Build activations within Northern New Jersey
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Managed Orchestration support for assets via multidisciplinary communication, ensuring successful vDU deployment of LS3/LS6 spectrum for 100% of temporary assets and 98% of new build macro sites
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Operated cross-functionally with contractors, external vendors, construction managers, radio frequency engineers, and system performance specialists to intellectually plan and troubleshoot through conflicts, prompting over 100% of the build target to be met across all initiatives
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">June 2020 - December 2021</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Engineer I - Network Operations, LD Planning - Verizon</h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Ensured sufficient Long Distance (LD) Transport capacity availability for over 150 internal and external customer demands originating in the South-East region, surpassing 85% of service level agreement (SLA) targets
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Planned and provisioned circuits across Ultra Long Haul (ULH), Optical Transport Network (OTN), former XO (fXO), former NNO (fNNO), and FlexGrid networks, initiating over 200 circuit capacity requirement (CCR) designs
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Served as Southeast (SE) ULH lead for a majorly critical government project, ensuring the successful design of over 35% of new circuit requirements for the program
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Actively utilized several internal Verizon assets to verify capacity and build projects while minimizing project revision count
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Worked cross-functionally with customers, other planners, and detailed engineering teams to resolve capacity constraints, port conflicts, and routing diversity issues
                </li>
              </ul>
              
            </li>


            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">September 2018 - April 2020</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Information Technology Technician, Residential Networking Services - TCNJ</h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Processed wireless networking analysis to ensure proficient signal strength & data speeds throughout the 289-acre campus
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Executed personal and business device imaging, malware and virus removal, data migration, system remediation, and machine restoration, yielding successful issue resolution for over 100 students and faculty
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                Managed campus-wide computer system upgrades, achieving large scale data-backup & migration across all 7 schools and associated departments
                </li>
              </ul>
            </li>

            
          </ol>

        </div>
      </div>
    </section>
  );
}