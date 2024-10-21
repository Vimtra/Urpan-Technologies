// Function to get query parameter from the URL
const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

document.addEventListener('DOMContentLoaded', () => {
    const jobCards = document.querySelectorAll('.job-card');
    const jobInfo = document.getElementById('jobInfo');
    const jobTitle = document.getElementById('jobTitle');
    const postedDate = document.getElementById('postedDate');
    const salary = document.getElementById('salary');
    const workingHours = document.getElementById('workingHours');
    const experience = document.getElementById('experience');
    const qualifications = document.getElementById('qualifications');
    const jobDescription = document.getElementById('jobDescription');
    const dropdownMenu = document.getElementById('dropdownMenu'); // Dropdown menu element
    const jobList = document.getElementById('jobList'); // Job list element for career page

    // Job data structure
    const jobsData = {
        1: {
            title: 'Software Developer',
            date: '2024-10-01',
            salary: '$80,000',
            hours: 'Full-time',
            experience: '2+ years',
            qualifications: 'Bachelor\'s in Computer Science',
            description: 'Develop and maintain software applications.'
        },
        2: {
            title: 'Data Analyst',
            date: '2024-10-02',
            salary: '$70,000',
            hours: 'Part-time',
            experience: '1+ years',
            qualifications: 'Bachelor\'s in Data Science or related field',
            description: 'Analyze data and create reports.'
        },
        3: {
            title: 'Project Manager',
            date: '2024-10-03',
            salary: '$90,000',
            hours: 'Full-time',
            experience: '5+ years',
            qualifications: 'Project Management Certification',
            description: 'Manage projects from start to finish.'
        }
    };

    // Populate jobs dynamically
    const populateJobs = () => {
        Object.keys(jobsData).forEach(jobId => {
            const job = jobsData[jobId];

            // Create job card for the left side (career page)
            if (jobList) {
                let jobCard = document.createElement('a');
                jobCard.href = '#';
                jobCard.classList.add('list-group-item', 'list-group-item-action', 'job-card');
                jobCard.setAttribute('data-job', jobId);
                jobCard.innerText = job.title;
                jobCard.onclick = (event) => {
                    event.preventDefault(); // Prevent default anchor behavior
                    showJobDetails(jobId);
                };
                jobList.appendChild(jobCard);
            }

            // Create dropdown item for the navbar
            if (dropdownMenu) {
                const dropdownItem = document.createElement('li');
                dropdownItem.classList.add('dropdown-item');
                dropdownItem.innerText = job.title;
                dropdownItem.setAttribute('data-job', jobId);
                dropdownItem.onclick = (event) => {
                    event.preventDefault(); // Redirect to career page with job ID
                    window.location.href = `career.html?job=${jobId}`;
                };
                dropdownMenu.appendChild(dropdownItem);
            }
        });
    };

    // Show job details
    const showJobDetails = (jobId) => {
        const job = jobsData[jobId];

        if (!jobInfo) return; // Safety check

        // Fade out existing content
        jobInfo.classList.add('fade-out');

        setTimeout(() => {
            // Update job details
            jobTitle.innerText = job.title;
            postedDate.innerText = job.date;
            salary.innerText = job.salary;
            workingHours.innerText = job.hours;
            experience.innerText = job.experience;
            qualifications.innerText = job.qualifications;
            jobDescription.innerText = job.description;

            // Fade in updated content
            jobInfo.classList.remove('fade-out');
            jobInfo.classList.add('fade-in');

            setTimeout(() => {
                jobInfo.classList.remove('fade-in');
            }, 500); // Remove fade-in class after transition
        }, 500); // This should match the duration of the fade-out transition
    };

    // Populate jobs when the page loads
    populateJobs();

    // Check for job ID in the URL and display its details if present
    const jobId = getQueryParam('job');
    if (jobId && jobsData[jobId]) {
        showJobDetails(jobId); // Show job details if job ID exists in the URL
    }
});
