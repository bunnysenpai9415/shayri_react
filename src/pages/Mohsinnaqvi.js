import React from 'react'

function Mohsinnaqvi() {

    const data = [
        {
          id: 1,
          shayari: "har vaqt kā hañsnā tujhe barbād na kar de tanhā.ī ke lamhoñ meñ kabhī ro bhī liyā kar",
        },
        {
          id: 2,
          shayari:
            "kaun sī baat hai tum meñ aisī itne achchhe kyuuñ lagte ho",
        },
        {
          id: 3,
          shayari:
            "tumheñ jab rū-ba-rū dekhā kareñge ye sochā hai bahut sochā kareñge",
        },
        {
          id: 4,
          shayari: "yuuñ dekhte rahnā use achchhā nahīñ 'mohsin' vo kāñch kā paikar hai to patthar tirī āñkheñ",
        },
        {
          id: 5,
          shayari: "sirf hāthoñ ko na dekho kabhī āñkheñ bhī paḌho kuchh savālī baḌe ḳhuddār huā karte haiñ",
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
              <footer class="blockquote-footer text-success"> By <cite title="Source Title">Mohsin Naqvi</cite></footer>
            </blockquote>
          </div>
          
        </div>
        ))}
      </div>)
}

export default Mohsinnaqvi