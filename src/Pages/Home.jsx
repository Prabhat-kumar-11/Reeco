import React from "react";
import Navbar from "../components/Navbar";

import StatusSection from "../components/StatusSection";
import Header from "../components/header";
import Table from "../components/Table";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <StatusSection />
      <Table />
    </div>
  );
}

const styles = StyleSheet.div;
