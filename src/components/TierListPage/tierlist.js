import { React } from "react";

import TierListTable from "./TierListTable";

const TierList = () => {
  return (
    <div
      className="text-center"
      style={{
        minHeight: "100vh",
      }}>
      <div className="container-xl mt-5">
        <article>
          <section className="justify-content-center row">
            <h1 style={{ fontWeight: "bold" }}>TIER LIST</h1>
            <img
              style={{ width: "250px", height: "20px" }}
              src="./Images/Misc/kindpng_6807215.png"
              alt="underscore"
            />
          </section>

          <section className="text-start fs-5 mt-4">
            <p>
              If you are new to the game and are looking for the best Espers to
              focus on, this Dislyte Tier List will help you out!
            </p>
            <p>
              In the table below, you can find all of the Espers in Dislyte, and
              how well they do in different modes of the game.
            </p>
            <p>
              Just take it with a grain of salt, and do remember that you can
              only use SS tier Espers to carry your whole team without even
              thinking about the strategies. In most cases, synergy still
              matters the most! If you want to create your own list, visit
              Dislyte Tier List Maker
            </p>
          </section>

          <div className="mt-4 table-responsive">
            <TierListTable />
          </div>
        </article>
      </div>
    </div>
  );
};

export default TierList;
