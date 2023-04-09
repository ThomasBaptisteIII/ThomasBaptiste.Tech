import Navbar from "../components/navbar";
import { PageWrapper } from "../page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
    <main className="min-h-screen">
      <Navbar></Navbar>
    </main>
    </PageWrapper>
  );
}
