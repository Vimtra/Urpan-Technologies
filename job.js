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
    const openings = document.getElementById('openings');
    const experience = document.getElementById('experience');
    const education = document.getElementById('education');
    const jobduties = document.getElementById('jobDuties');
    const dropdownMenu = document.getElementById('dropdownMenu'); // Dropdown menu element
    const jobList = document.getElementById('jobList'); // Job list element for career page

    // Job data structure
    const jobsData = {
        1: {
            title: 'Application Security Engineer',
            date: '09/03/2024',
            salary: "'$184,579.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six (6) Months should include working with Security Testing/Analysis of Cloud Based Networks /Applications (Either Azure or AWS or Google Cloud) is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel.',
            education: 'Master’s  degree in Computer Science, Computer Engineering, Information Technology, Engineering(Any) or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Security Analyst or Engineer or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science, Computer Engineering, Information Technology, Engineering(Any) or closely related field plus five years of progressive work experience in related field.',
            jobduties: 'Plan, implement, upgrade, or monitor security measures for the protection of computer networks and information. Ensure appropriate security controls are in place that will safeguard various cloud based (such as Azure, AWS or Google Cloud) IT applications. Interact with developers on providing solutions to flaws or vulnerabilities in applications. Install maintain, or repair security systems and continue to recommend improvements in security systems or procedures, perform risk analyses so that appropriate countermeasures can be developed. Keep updated with latest security techniques and implement latest security techniques to protect various Cloud based software applications. Work under Supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        2: {
            title: 'Software Developer',
            date: '09/03/2024',
            salary: "'$206,315.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: '-',
            education: 'Master’s  degree in Computer Science / IT/IS/Engineering (Any) or closely related field.',
            jobduties: 'Develop, Create, Analyze and Modify software applications and assist in Software Development using the latest Cloud based software development technologies. Design and develop reusable software components and application libraries, conduct code reviews, refactor non-performing assets, define best practices for software applications development by studying and incorporating latest cloud based technologies. Utilize latest cloud based software development technologies based on latest technologies such as Java, C#, AWS, Azure, DevOps, AngularJS to develop various software. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        3: {
            title: 'SOFTWARE ANALYST',
            date: '09/03/2024',
            salary: "'$143,582.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: '-',
            education: 'Master’s  degree in Computer Science, Information Technology, Management, Business or closely related field.',
            jobduties: 'Analyze science, engineering, business, and other data processing problems to implement and improve computer systems using various software analysis, business analysis and testing methods. Utilize Agile methodology to deliver software to clients and use JIRA for software defect tracking, GIT for version control to ensure continuous integration of builds. Monitor and improve front end performance and write interface code using Java Script and understand and translate the business requirements into technical requirements. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        4: {
            title: 'SOFTWARE ENGINEER (BI)',
            date: '09/03/2024',
            salary: "'$168,397.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six (6) Months using QLIKVIEW, QLIKSENSE, SQL SSRS and SQL SSIS is required. Travel And/or Relocation to unanticipated client sites throughout USA is required.',
            education: 'Master’s  degree in Computer Science/Computer Engineering/IT /Engineering(Any) or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science/Computer Engineering/IT /Engineering(Any) or closely related field plus five years of progressive work experience in related field.',
            jobduties: 'Analyze science, engineering, business, and other data processing problems to implement and improve computer systems using Business Intelligence (BI) tools and technologies. Analyze user requirements, procedures, and problems to automate or improve existing systems and review computer system capabilities, workflow, and scheduling limitations using Qlik based BI technologies and design solutions using QlikView, QlikSense and SQL SSRS and SQL SSIS. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        5: {
            title: 'SOFTWARE ENGINEER',
            date: '09/03/2024',
            salary: "'$206,315.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six (6) Months using Java, Spring and Oracle Database Server is required. Travel And/or Relocation to unanticipated client sites throughout USA is required.',
            education: 'Master’s  degree in Computer Science/Computer Engineering/IT /Engineering(Any)/Business or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science/ Computer Engineering/IT /Engineering(Any)/Business or closely field plus five years of progressive work experience in related field.',
            jobduties: 'Develop, create and modify general computer applications software or specialized utility programs using Java, J2EE, SPRING, HIBERNATE and related JAVA frameworks using those programming languages. Utilize SQL server or Oracle server database servers along with front-end programming languages. Analyze user needs and develop software solutions. Design software or customize software for client use with the aim of optimizing operational efficiency. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        6: {
            title: 'SYSTEMS ANALYST',
            date: '09/03/2024',
            salary: "'$168,397.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six months using DATAPOWER, API Connect is required. Travel And/or Relocation to unanticipated client sites throughout USA is required.',
            education: 'Master’s  degree in Computer Science, Computer Engineering, Information Technology, Engineering(Any), Business or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Engineer or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science, Computer Engineering, Information Technology, Engineering(Any), Business or closely related field plus five years of progressive work experience in related field.',
            jobduties: 'Analyze science, engineering, business and other data processing problems to implement and improve computer systems using DataPower, API Connect and related frameworks using those programming languages. Utilize EDI, ESQL, Web Services along with OAuth2.0, Security Policies. Analyze user needs and implement integration solutions using IBM DataPower and IBM API Connect. Support administration of API Connect and DataPower appliances. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        7: {
            title: 'SYSTEMS ANALYST',
            date: '09/03/2024',
            salary: "'$168,397.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six (6) Months Using Java, J2EE, Spring, Hibernate and Oracle Database Server is required. Travel And/or Relocation to unanticipated client sites throughout USA is required.',
            education: 'Master’s  degree in Computer Science/Computer Engineering/IT /Engineering(Any)/Business or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science/ Computer Engineering/IT /Engineering(Any)/Business or closely related field plus five years of progressive work experience in related field.',
            jobduties: 'Analyze science, engineering, business, and other data processing problems to implement and improve computer systems using Java based technology. Analyze user requirements, procedures, and problems to automate or improve existing systems and review computer system capabilities by using Java and Java based frameworks, SPRING, J2EE, Java Script and Oracle server backend databases. Work under Supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        8: {
            title: 'SYSTEMS ANALYST',
            date: '09/03/2024',
            salary: "'$168,397.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six (6) Months using Oracle Applications is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel.',
            education: 'Master’s  degree in Computer Science, Computer Engineering, Information Technology, Engineering(Any), Management, Business or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Engineer or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science, Computer Engineering, Information Technology, Engineering(Any), Management, Business or closely related field plus five years of progressive work experience in related field.',
            jobduties: 'Analyze science, engineering, business, and other data processing problems to implement and improve computer systems using Oracle Applications and various Oracle Apps modules. Analyze user requirements, procedures, and problems to automate or improve existing systems and review computer system capabilities, with a goal to minimize risk of defaulting of payments using Oracle OM and AR modules for order management and accounts receivables modules to analyze and minimize risk of business enterprises. Analyze and recommend effective tools for Order Management, Cash Processing, Customer data processing, customer risk analysis using Oracle Applications. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        9: {
            title: 'SYSTEMS ANALYST',
            date: '09/03/2024',
            salary: "'$168,397.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six (6) Months with Software Quality Testing, Selenium is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel.',
            education: 'Master’s  degree in Computer Science/Computer Engineering/IT /Engineering(Any)/Business or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science/ Computer Engineering/IT /Engineering(Any)/Business or closely related field plus five years of progressive work experience in related field.',
            jobduties: 'Analyze Science, Engineering, Business and other data processing problems to implement and improve computer systems by utilizing various software testing methodologies. Work with Unit testing using Junit, utilize SQL skills to analyze the computer systems, utilize quality assurance methodologies and QA automation tools such as Selenium, mobile testing tools, use SOAP UI to test web services, perform middleware testing and create automation test frameworks. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        10: {
            title: 'SYSTEMS ANALYST',
            date: '09/03/2024',
            salary: "'$168,397.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six (6) Months using Informatica and ETL is required. Travel And/or Relocation to unanticipated client sites throughout USA is required.',
            education: 'Master’s  degree in Computer Science/Computer Engineering/IT /Engineering(Any)/Business or closely related field  with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science/ Computer Engineering/IT /Engineering(Any)/Business or closely related field plus five years of progressive work experience in related field.',
            jobduties: 'Analyze science, engineering, business, and other data processing problems to implement and improve computer systems. Analyze user requirements, procedures, and problems to automate or improve existing systems and review computer system capabilities, workflow, and scheduling limitations using ETL concepts using INFORMATICA and SQL TOOLS. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        11: {
            title: 'SYSTEMS ANALYST',
            date: '09/03/2024',
            salary: "'$168,397.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Six (6) Months using QLIKVIEW, QLIKSENSE, SQL SSRS and SQL SSIS is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel.',
            education: 'Master’s  degree in Computer Science, Computer Engineering, Information Technology, Engineering (Any) or closely related Software or IT field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor’s  degree in Computer Science, Computer Engineering, Information Technology, Engineering (Any) or closely related Software or IT field plus five years of progressive work experience in related field.',
            jobduties: 'Analyze science, engineering, business, and other data processing problems to implement and improve computer systems using Business Intelligence (BI) tools and technologies. Analyze user requirements, procedures, and problems to automate or improve existing systems and review computer system capabilities, workflow, and scheduling limitations using Qlik based BI technologies and design solutions using QlikView, QlikSense and SQL SSRS and SQL SSIS. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
        12: {
            title: 'UI Developer',
            date: '09/03/2024',
            salary: "'$155,605.00' per year",
            hours: 'Fulltime job, 40 hours per week',
            openings: '5',
            location: 'Urpan Technologies Inc break 39355 California Street, Suite #303 Fremont, CA 94538',
            experience: 'Experience of Twelve (12) months working with HTML, CSS, JavaScript is required.',
            education: 'Bachelor’s  degree in Computer Science / IT / Information Systems/ Science or related with Twelve (12) months of experience in the job offered or as an IT Consultant or Analyst or Engineer or Programmer or Developer or very closely related area. Employer also accepts A Bachelors degree(or foreign Equivalent) in Computer Science / IT / Information Systems/ Science or related field earned through any suitable combination of education, training and/or experience, as determined by a professional evaluation service  plus Twelve (12) months of progressive work experience in related field.',
            jobduties: 'Developing web applications using various Front-End technologies, AEM, restful, Jsp, ReactJs, TypeScript, NodeJs. Perform application development of Client/server and web applications using JAVA, J2EE and Web technologies for enterprise applications. Install, Patch and maintain and also monitor oracle Database. Adding Chrone Jobs using Oracle DB. Implementation of the Object- Oriented Programming, Multithreading, Error Handling in JS with ES6 standards. Developing Object- Oriented Web applications using MVC architecture , Spring MVC. Work under supervision. Travel And/or Relocation to Unanticipated Client Sites throughout USA is required.'
        },
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
            openings.innerText = job.openings;
            experience.innerText = job.experience;
            education.innerText = job.education;
            jobDuties.innerText = job.jobduties;

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

      // Modal elements
      const applicationModal = new bootstrap.Modal(document.getElementById('applicationModal'));
      const applicationForm = document.getElementById('applicationForm');
      const jobTitleDisplay = document.getElementById('jobTitleDisplay');
      const jobTitleHidden = document.getElementById('jobTitleHidden');
      const applicantName = document.getElementById('applicantName');
      const applicantEmail = document.getElementById('applicantEmail');
      const applicantPhone = document.getElementById('applicantPhone');
      const resumeFile = document.getElementById('resumeFile');
      const thankYouMessage = document.getElementById('thankYouMessage');

      // Function to populate job listings
      function populateJobListings() {
        jobListDiv.innerHTML = ''; // Clear existing listings
        jobListings.forEach(job => {
          const jobCard = document.createElement('a');
          jobCard.href = '#';
          jobCard.classList.add('list-group-item', 'list-group-item-action', 'job-card');
          jobCard.dataset.jobId = job.id;
          jobCard.innerHTML = `
            <h5 class="mb-1">${job.title}</h5>
          `; // Only job title
          jobListDiv.appendChild(jobCard);
        });
      }

      // Function to display job details
      function displayJobDetails(job) {
        jobTitleElement.textContent = job.title;
        postedDateElement.textContent = job.postedDate;
        salaryElement.textContent = job.salary;
        workingHoursElement.textContent = job.workingHours;
        openingsElement.textContent = job.openings;
        experienceElement.textContent = job.experience;
        educationElement.textContent = job.education;
        jobDutiesElement.textContent = job.jobDuties;
      }

      // Event listener for job card clicks
      jobListDiv.addEventListener('click', (event) => {
        const jobCard = event.target.closest('.job-card');
        if (jobCard) {
          const jobId = jobCard.dataset.jobId;
          const selectedJob = jobListings.find(job => job.id === jobId);
          if (selectedJob) {
            displayJobDetails(selectedJob);
          }
        }
      });

      // Event listener for Apply Now button click
      applyNowBtn.addEventListener('click', () => {
        const currentJobTitle = jobTitleElement.textContent;
        if (currentJobTitle) {
          jobTitleDisplay.value = currentJobTitle; // Display in modal
          jobTitleHidden.value = currentJobTitle; // Send with form
          applicationForm.classList.remove('d-none'); // Ensure form is visible
          thankYouMessage.classList.add('d-none'); // Ensure thank you message is hidden
          applicationModal.show(); // Show the modal
        } else {
          // Handle case where no job is selected
          // Using a custom message box instead of alert()
          const customAlertModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
          document.getElementById('customAlertModalBody').textContent = 'Please select a job from the listings first.';
          customAlertModal.show();
        }
      });

      // Function to reset form and close modal
      function resetFormAndCloseModal() {
        applicationForm.reset();
        // Hide form and show thank you message
        applicationForm.classList.add('d-none');
        thankYouMessage.classList.remove('d-none');

        // Automatically close modal after 3 seconds
        setTimeout(() => {
          applicationModal.hide();
          // Reset modal content to show form for next time
          applicationForm.classList.remove('d-none');
          thankYouMessage.classList.add('d-none');
        }, 3000);
      }

      // Event listener for form submission
      applicationForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Basic validation
        if (!applicantName.value || !applicantEmail.value || !applicantPhone.value || !resumeFile.files.length) {
          const customAlertModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
          document.getElementById('customAlertModalBody').textContent = 'Please fill in all required fields and upload your resume.';
          customAlertModal.show();
          return;
        }

        const formData = new FormData(applicationForm);
        const formspreeUrl = applicationForm.action; // Get Formspree URL from form's action attribute

        console.log('Attempting to submit form to:', formspreeUrl); // Log the URL for debugging

        try {
          const response = await fetch(formspreeUrl, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json' // Important for Formspree
            }
          });

          if (response.ok) {
            resetFormAndCloseModal(); // Show thank you message and close modal
          } else {
            const data = await response.json();
            const customAlertModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
            if (data.errors) {
              document.getElementById('customAlertModalBody').textContent = 'Form submission failed: ' + data.errors.map(e => e.message).join(', ');
            } else {
              document.getElementById('customAlertModalBody').textContent = 'Form submission failed. Please try again.';
            }
            customAlertModal.show();
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          const customAlertModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
          document.getElementById('customAlertModalBody').textContent = 'An error occurred while submitting your application. Please try again later.';
          customAlertModal.show();
        }
      });

      // Initial population of job listings and display first job details
      populateJobListings();
      if (jobListings.length > 0) {
        displayJobDetails(jobListings[0]);
      };