import Navbar from "../components/navbar";
import { PageWrapper } from "../page-wrapper";
import Card from "../components/ContactCard";
export default function Home() {
  return (
    <PageWrapper>
    <main className="min-h-screen">
      <Navbar></Navbar>
      <Card></Card>
    </main>
    </PageWrapper>
  );
}
