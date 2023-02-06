import React from "react";

function Jaunelia() {
  const data = [
    {
      id: 1,
      shayari: "jo guzārī na jā sakī ham se ham ne vo zindagī guzārī hai",
    },
    {
      id: 2,
      shayari:
        "maiñ bhī bahut ajiib huuñ itnā ajiib huuñ ki bas ḳhud ko tabāh kar liyā aur malāl bhī nahīñ",
    },
    {
      id: 3,
      shayari:
        "ye mujhe chain kyuuñ nahīñ padtā ek hī shaḳhs thā jahān meñ kyā",
    },
    {
      id: 4,
      shayari: "zindagī kis tarah basar hogī dil nahīñ lag rahā mohabbat meñ",
    },
    {
      id: 5,
      shayari: "bahut nazdīk aatī jā rahī ho bichhaḌne kā irāda kar liyā kyā ",
    },
  ];

  return (
    <div className="d-flex flex-column mx-5">
      {data.map((item) => (
       
        <div class="card my-2">
        <div class="card-header bg-success text-white">
        {item.id}. Shayari
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{item.shayari}</p>
            <footer class="blockquote-footer text-success"> By <cite title="Source Title">Jaun Elia</cite></footer>
          </blockquote>
        </div>
        
      </div>
      ))}
    </div>
  );
}

export default Jaunelia;
