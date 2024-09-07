import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";

export default function Work() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 mx-auto lg:px-20">
        <div className="flex flex-col w-full mb-5">
          <div className="flex flex-col w-full mb-10">
            <a href="#work">
              <FontAwesomeIcon
                icon={faBusinessTime}
                className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white"
              />
            </a>
            <h1
              id="typewriter"
              className="sm:text-4xl text-3xl font-medium font-bold title-font mb-4 text-white text-center"
            >
              My Work History
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center text-gray-300">
              From joining the work force at age 14 up to being a part of the
              Verizon Leadership Development Program now - positions outlined
              below
            </p>
          </div>

          <ol class="relative border-l border-gray-200 dark:border-gray-700">

          <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-500 dark:text-fuchsia-500">
                March 2024 - Present{" "}
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Supervisor - Network Operations, SW Region - Verizon
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Managing 7 engineers across Tempe and Tucson, in addition to 10 dotted-line reports, to ensure 24/7 operation of Verizon’s
                  Service and Transport Aggregation Point locations throughout the Southwest region, sustaining 
                  operational uptime and network resiliency
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Aligning team focus towards key initiatives to drive impactful outcomes, 
                  such as 90% of Loss of Diversity ticketing closed within 24 hours 
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Preemptively pursuing network hardening efforts, such as SFP sparing inventory 
                  and sourcing, to ensure switch readiness in events mandating critical emergency
                </li>
                <li class="text-base font-normal text-gray-400 py-2.5">
                  Investigating team performance metrics relative to regional benchmarks, 
                  facilitating team feedback for strategic insights and decision-making
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-500 dark:text-fuchsia-500">
                January 2023 - February 2024
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Engineer III - System Performance, SW Region - Verizon
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Supported 250,000+ users at events such as Waste Management
                  Phoenix Open, Superbowl LVII, and Superbowl LVIII, overseeing
                  field-testing, data aggregation, performance verification, and
                  identification of opportunities for improvement
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Prioritized and tracked 85+ projects by partnering with
                  implementation teams to address the "Top 50" most poorly
                  performing subregions per high-value key performance indicator
                  (KPI) triggers including: peak user equipment (UE) count,
                  user-perceived uplink/downlink throughput, and transmission
                  time interval (TTI) occupancy
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Improved customer-facing network equipment aggregate data
                  speeds by over 200% via the assessment of default
                  configuration performance metrics and documenting vital setup
                  recommendations
                </li>
                <li class="text-base font-normal text-gray-400 py-2.5">
                  Engaged in storefront visits to facilitate partnership and
                  strong communication with the sales teams in knowledge
                  regarding the network’s current status, future development
                  plans, and any related customer feedback
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-500">
                January 2022 - December 2022
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Engineer II - Project Management, 5G Implementation - Verizon
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Assured a smooth plan of record (POR) rollout for over 650
                  mmWave turnups, exceeding objectives by 113% and overcoming
                  obstacles to drive a cost-effective 5G build process
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Activated over 100 Small Cell New-Build sites within Northern
                  New Jersey, spearheading the analysis and resolution of
                  complications in the build-out procedure
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Ensured successful virtualized distributed unit (vDU)
                  deployment of LS3/LS6 spectrum for 30+ temporary assets and
                  50+ new build macro sites by means of orchestration process
                  management via multidisciplinary communication
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Directed a cross-functional team of contractors, external
                  vendors, construction managers, radio frequency engineers, and
                  system performance specialists to plan through conflicts,
                  prompting over 100% of the build target to be met
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">
                June 2020 - December 2021
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Engineer I - Network Operations, LD Planning - Verizon
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Surpassed 85% of service level agreement (SLA) targets by
                  ensuring sufficient transport capacity availability for over
                  150 internal and external customer demands originating in the
                  South-East region
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Initiated over 200 circuit capacity requirement (CCR) designs
                  by planning and provisioning circuits across Ultra Long Haul
                  (ULH), Optical Transport Network (OTN), former XO (fXO),
                  former NNO (fNNO), and FlexGrid networks
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Served as team lead for large-scale critical government
                  project by successfully engaging with requestors and designing
                  over 35% of complex circuit requirements for the region
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Actively utilized several internal Verizon assets to verify
                  capacity and build projects while minimizing project revision
                  count
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Worked cross-functionally with customers, other planners, and
                  detailed engineering teams to resolve capacity constraints,
                  port conflicts, and routing diversity issues
                </li>
              </ul>
            </li>

            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">
                September 2018 - April 2020
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Information Technology Technician, Residential Networking
                Services - TCNJ
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Ensured proficient signal strength and data speeds throughout
                  the 289-acre campus by engaging in wireless networking
                  analysis
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Successfully united with teammates and resolved issues for
                  over 100 students and faculty by way of personal/business
                  device imaging, malware/virus removal, system remediation, and
                  hardware repair
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Managed campus-wide computer system upgrades, achieving large
                  scale data-backup and migration across all academic
                  departments
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
