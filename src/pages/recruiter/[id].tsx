/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import peepData from "../../utils/dashboardPlaceholderData.json";
import RecruiterFeed from "../../components/RecruiterFeed";
export default function RecruiterPage() {
  const router = useRouter();
  const { id } = router.query;

  const recruiter = peepData.find((person) => person.id === id);
  console.log(recruiter);
  if (!id) {
    return <span></span>;
  }

  const stats = [
    {
      id: 1,
      name: "Total Placements",
      stat: "71,897",
      icon: UsersIcon,
      change: "122",
      changeType: "increase",
    },
    {
      id: 2,
      name: "Introductions Made",
      stat: "58.16%",
      icon: EnvelopeOpenIcon,
      change: "5.4%",
      changeType: "increase",
    },
    {
      id: 3,
      name: "Revenue Generated",
      stat: "$25,000",
      icon: CursorArrowRaysIcon,
      change: "3.2%",
      changeType: "decrease",
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  function Example() {
    return (
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-300">
          Last 30 days
        </h3>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-green-500 p-3">
                  <item.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {item.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {item.stat}
                </p>
                <p
                  className={classNames(
                    item.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600",
                    "ml-2 flex items-baseline text-sm font-semibold"
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.changeType === "increase"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  return (
    <main className="mx-auto flex flex-col items-center justify-center">
      <div className="avatar">
        <div className="mask mask-hexagon w-64">
          <img
            src="/images/person-placeholder.jpeg"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <h1 className="text-2xl text-white">{recruiter?.name}</h1>
      <Example />
      <RecruiterFeed />
    </main>
  );
}
