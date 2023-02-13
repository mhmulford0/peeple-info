import { useRouter } from "next/router";
import peepData from "../../utils/dashboardPlaceholderData.json";
export default function RecruiterPage() {
  const router = useRouter();
  const { id } = router.query;

  const recruiter = peepData.find((person) => person.id === id);

  if (!id) {
    return <span></span>;
  }
  return (
    <p>
      {console.log(recruiter)}
      <span>hello</span>
    </p>
  );
}
