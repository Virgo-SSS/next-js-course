import TestClientComponent from "./components/TestClientComponent";

export default function Home() {
  console.log("console log from page.tsx - server side");
  return (
    <>
      <h1>Hallo wORLD</h1>
      <TestClientComponent />
    </>
  );
}
