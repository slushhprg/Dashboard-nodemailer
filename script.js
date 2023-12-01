const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Em andamento', 'Concluídos', 'Parados'],
    datasets: [{
      label: 'Total',
      data: [3, 3, 1],
      backgroundColor :[
          'rgba(11, 155, 49)',
          'rgba(255, 95, 31)',
          'rgba(255, 206, 86)'  ],
      hoverOffset: 4
    }]
  },
});

// Search Projects
const project = document.querySelectorAll('.project')

const displayProject = (values) =>{
    project.forEach(element => {
        element.style.display = "none"
         const title = element.querySelector('h2').innerHTML.toUpperCase();
         const status = element.dataset.status.toUpperCase();
         const recent = element.querySelector('p').innerHTML.toUpperCase();

         if(title.includes(values)){
             element.style.display = "block"
        }
        else if(values != 'RECENT' && status.includes(values)){
            element.style.display = "block"
        }
        else if(values != 'RECENT' && status.includes('HOUR') || recent.includes('RECENT') ){
            element.style.display = "block"
        }
    })
}

searchProject.addEventListener('input', (e) => {

    displayProject(e.target.value.toUpperCase())
})
projectFilter.addEventListener('input', (e) => {
    displayProject(e.target.value.toUpperCase())
})

const nodemailer = require('nodemailer');


