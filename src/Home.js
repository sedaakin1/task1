import React from "react";
import Nav from "./Nav";
import Card from "./Card";


const dataArray = [
  { title: "Bakım taleplerinin ortalama kapanma süresi", direction: "Azalması iyi", unit: "Zaman", category: "Bakım" },
  { title: "Bakım taleplerinin ortalama kapanma süresi", direction: "Azalması iyi", unit: "Zaman", category: "Bakım"},
  { title: "Bakım taleplerinin ortalama kapanma süresi", direction: "Azalması iyi", unit: "Zaman", category: "Bakım" },
  { title: "Bakım taleplerinin ortalama kapanma süresi", direction: "Azalması iyi", unit: "Zaman", category: "Bakım" },
  { title: "Bakım taleplerinin ortalama kapanma süresi", direction: "Azalması iyi", unit: "Zaman", category: "Bakım" },
];

function Home() {
  return (
    <React.Fragment>
      <Nav />
      <div className="container pt-4 px-3 pb-6 vh-80 overflow-auto">
        {dataArray.map((data, index) => (
          <div className="row mb-3 key={index}">
          
            <Card
              key={index}
              title={data.title}
              direction={data.direction}
              unit={data.unit}
              category={data.category}
            />
            
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
