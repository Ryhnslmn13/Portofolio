document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Cloud Storage System',
            description: 'A cloud-based storage system built using AWS S3 and Lambda functions.',
            image: 'assets/img/cloud-storage.jpg',
            link: 'https://github.com/yourgithub/cloud-storage-system'
        },
        {
            title: 'Serverless Blog',
            description: 'A serverless blog platform using Google Cloud Functions and Firestore.',
            image: 'assets/img/serverless-blog.jpg',
            link: 'https://github.com/yourgithub/serverless-blog'
        },
        {
            title: 'Dockerized Web App',
            description: 'A scalable web application containerized using Docker and deployed on Azure.',
            image: 'assets/img/docker-webapp.jpg',
            link: 'https://github.com/yourgithub/docker-webapp'
        }
    ];

    const projectsList = document.getElementById('projects-list');

    projects.forEach((project, index) => {
        const projectCard = `
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
                    </div>
                </div>
            </div>
        `;
        projectsList.innerHTML += projectCard;
    });
});
