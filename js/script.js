

    fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
    .then((response) => response.json())
    .then((data) =>{

      document.getElementById('cases-item-lbl5').innerHTML = `${data.data.update_date_time}`
       document.getElementById('cases-item-lbl1').innerHTML =  `${data.data.local_total_cases}`
       document.getElementById('cases-item-lbl2').innerHTML = `${data.data.local_new_cases}`
       document.getElementById('cases-item-lbl3').innerHTML = `${data.data.local_deaths}`
       document.getElementById('cases-item-lbl4').innerHTML = `${data.data.local_recovered}`
       console.log(data.data.local_deaths)
    })
    const scrollButton = document.querySelector(".scroll-top");
    scrollButton.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
    