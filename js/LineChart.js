

    fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
    .then((response) => response.json())
    .then((data)=>{

        let lineChart = document.getElementById('mychart').getContext('2d');

        let massPopChart = new Chart(mychart,{
            type:'bar',
            data:{
                labels:['Global Deaths','Local Deaths','Global Total Cases','Local Total Cases','Global Recoverd','Local Recoverd'],
                datasets:[{
                    label:'Covid Pandemic',

                    data:[
                        data.data.global_deaths,
                        data.data.local_deaths,
                        data.data.global_total_cases,
                        data.data.local_total_cases,
                        data.data.global_recovered,
                        data.data.local_recovered
                    ],
                    backgroundColor:[
                        '#e2431e',
                        '#e7711b',
                        '#f1ca3a',
                        '#6f9654',
                        '#1c91c0',
                        '#43459d'
                    ],
                     hoverBorderWidth:1,
                     hoverBorderColor:'rgb(72, 15, 138)'
                }]
            },
            options:{
                responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
            }
        })
    })
    
    