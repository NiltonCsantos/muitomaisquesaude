
document.getElementById("btn-contact").addEventListener("click", ()=>{

  const textCover=document.getElementById("text-cover");
  const btnContact=document.getElementById("btn-contact")
  const div=document.createElement("div")
  const p=document.createElement("p");
  const a=document.getElementById("link-btn-contact");


  p.textContent="Desde já, lhe parabenizo, iniciar o processo de terapia é um processo importante e árduo, pois iremos traçar uma jornada em busca do autoconhecimento."

  div.style.textAlign="center";
  div.style.border="2px solid transparent"
  div.style.borderRadius="25rem";
  div.style.boxShadow=" -69px 63px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)"

  div.setAttribute("data-aos","fade-up");
  div.setAttribute("data-aos-anchor-placement","top-bottom");
  div.setAttribute("data-aos-duration","2000");
   


  textCover.removeChild(btnContact)

  textCover.append(div);
  div.append(p)

  setTimeout(()=>{

    a.setAttribute("href", "https://api.whatsapp.com/send?phone=5579996817729&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Tenho%20interesse%20em%20contratar%20os%20servi%C3%A7os%20da%20empresa");

    a.setAttribute("targer","_blank");
    a.setAttribute("rel","external");

    window.open(a);

    textCover.removeChild(div);
    textCover.append(btnContact)

    a.setAttribute("href", "#");

  },4000)

})

