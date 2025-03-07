import React, { lazy, Suspense } from "react";

const Component = lazy(() => import("./Home/Home"));

const Loading = () => {
  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      }
    >
      <Component />
    </Suspense>
  );
};
export default Loading;
