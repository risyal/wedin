import React, { useState } from "react";
import LandingPage from "@src/components/LandingPage";
import MainInvitation from "@src/components/MainInvitation";

export default function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  return (
    <>
      {!showInvitation ? (
        <LandingPage onOpenInvitation={() => setShowInvitation(true)} />
      ) : (
        <MainInvitation />
      )}
    </>
  );
}