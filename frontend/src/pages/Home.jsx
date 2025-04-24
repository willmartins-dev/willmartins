import React from "react";
import Item from "../components/Item";

export const Home = () => {
  return (
    <section>
      <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] py-4 px-4 max-w-7xl mx-auto">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};
