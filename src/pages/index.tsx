import Navbar from "./components/navbar";
import Card from "./components/HomepageCard";
import { PageWrapper } from "./page-wrapper";



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
