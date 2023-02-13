import peepleDashboardData from "../utils/dashboardPlaceholderData.json";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Table() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Recruiter</th>
            <th>Active Candidates</th>
            <th>Introductions</th>
            <th>Placements</th>
            <th>Revenue</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {peepleDashboardData.map((person) => {
            const effectiveness = String(
              (person.placementsMade / person.accountsUnderMgmt) * 100
            );
            console.log(effectiveness, "effective");
            return (
              <tr key={person.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-16 w-16">
                        <img
                          src="/images/person-placeholder.jpeg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{person.name}</div>
                    </div>
                  </div>
                </td>

                <td>{person.accountsUnderMgmt}</td>
                <td>{person.introductionsMade}</td>
                <td>
                  <span className="inline-block w-8">
                    {person.placementsMade}
                  </span>
                  <span className="badge-success badge badge-sm ml-2">
                    {parseFloat(effectiveness).toFixed(2)}%
                  </span>
                </td>
                <td>{formatter.format(person.revenueProduced)}</td>
                <th>
                  <button className="btn-info btn-xs btn">details</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Dashboard() {
  return (
    <main>
      <Table />
    </main>
  );
}
