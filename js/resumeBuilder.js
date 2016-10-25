var bio = {
    'name': 'Sachin Kumar Sahu',
    'role': 'Mechanical Engineer',
    'contacts': {
        'mobile': '+918895913785',
        'email': 'sachinsahu64@gmail.com',
        'github': 'sachinasahu',
        'location': 'India',
        'twitter': '@sachinasahu'
    },
    'welcomeMessage': 'Welcome to world of sachin. Here you will get to know everything that you need to know. This like a open book of me where you can get to know about my professional life and little about my personal things also. The one thing that need to know is about my objective of my life to make a world better place to live.',
    'skills': ['Awesomeness', 'Creative', 'Ansys', 'Designing'],
    'biopic': 'images/sachin.jpg'
}

var data = '%data%';

bio.display = function () {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedImage = HTMLbioPic.replace(data, bio.biopic);
    var formattedmsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage)
    
    $('#header').append(formattedName,formattedRole,formattedImage,formattedmsg);

    var formatedmobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formatedemail = HTMLemail.replace(data, bio.contacts.email);
    var formatedgithub = HTMLgithub.replace(data, bio.contacts.github);
    var formatedtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formatedlocation = HTMLlocation.replace(data, bio.contacts.location);

    $('#topContacts, #footerContacts').append(formatedmobile,formatedemail,formatedgithub,formatedtwitter,formatedlocation);

    
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        var formattedSkill = '';
        for (var i = 0; i < bio.skills.length; i++) {
            formattedSkill = HTMLskills.replace(data, bio.skills[i]);
            $('#skills').append(formattedSkill);
        };
    };
};
var education = {
    'schools': [{
            'name': 'IIT',
            'location': 'Guwahati',
            'degree': 'Internship',
            'majors': ['Material Science'],
            'dates': '2016',
            'url': 'http://iitguwahati.com'
	},

		{
            'name': 'NIST',
            'location': 'Berhampur',
            'degree': 'B.Tech',
            'majors': ['Mechanical'],
            'dates': '2016',
            'url': 'http://nistberhampur.com'
	},

        {
            'name': 'Kendriya Vidyalaya',
            'location': 'Delhi',
            'degree': 'Intermediate',
            'majors': ['Science'],
            'dates': '2011',
            'url': 'http://kvberhampur.com'
	}
],

    'onlineCourses': [{
            'title': 'FEND',
            'school': 'udacity',
            'dates': '2016',
            'url': 'www.udacity.com'
		}
]

}

var work = {
    'jobs': [{
            'employer': 'Indian Navy',
            'title': 'MES',
            'dates': 'april 2018-future',
            'description': 'Completely dedicated to the indian navy to develop the current wepeon status to the next generation so that no one can dare to think have a war with india.',
            'location': 'Mumbai'
	},
        {
            'employer': 'Infosys',
            'title': 'web developer',
            'dates': 'jan 2017-dec 2017',
            'description': 'To develop sites to meet the expectations of the end users.',
            'location': 'Mysore'
	}
	]
}
var projects = {
    'projects': [{
            'title': 'Animal card',
            'dates': '2016',
            'description': 'This card contains a small description about my favourite Animal',
            'images': ['images/project1.jpg']
	},
        {
            'title': 'Nano Technology',
            'dates': '2015-2016',
            'description': 'This is all about CNT n BNN',
            'images': ['images/cnt_bnn.jpg']
	},
		{
			'title': 'Sandwitch Beam',
			'dates': '2014-2015',
			'description': 'This type of beam is developed to withstand with heavy loads without failure of fulfilling the object.',
			'images': ['images/sandwitchbeam.jpg']
	}
  ]
}
work.display = function () {
    for (var job = 0; job < work.jobs.length; job++) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $('.work-entry:last').append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        $('.work-entry:last').append(formattedLocation);
        var fromattedworkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $('.work-entry:last').append(fromattedworkDescription);
    }
};


projects.display = function () {
        var project = 0;
        while (project < projects.projects.length) {
            $('#projects').append(HTMLprojectStart);
            var proj = projects['projects'][project];
            var formattedTitle = HTMLprojectTitle.replace(data, proj['title']);
            var formattedDates = HTMLprojectDates.replace(data, proj['dates']);
            var formattedDesc = HTMLprojectDescription.replace(data, proj['description']);
            var formattedImages = '';
            if (proj['images'].length > 0) {
                for (image in projects.projects[project].images) {
                    formattedImages = HTMLprojectImage.replace(data, proj['images'][image]);
                };
            }
            $('.project-entry:last').append(formattedTitle + formattedDates + formattedDesc + formattedImages);
            project++;
        };
    },

    education.display = function () {
        var school = 0;
        while (school in education['schools']) {
            $('#education').append(HTMLschoolStart);
            var sch = education['schools'][school];
            var formattedName = HTMLschoolName.replace(data, sch['name']);
            var formattedDegree = HTMLschoolDegree.replace(data, sch['degree']);
            var formattedDates = HTMLschoolDates.replace(data, sch['dates']);
            var formattedLocation = HTMLschoolLocation.replace(data, sch['location']);
            var formattedMajor = '';
            if (sch['majors'].length > 0) {
                for (var major in sch['majors']) {
                    formattedMajor += HTMLschoolMajor.replace(data, sch['majors'][major]);
                };
            };
            $('.education-entry:last').append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
            school++;
        };
        if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            for (onlineCourse in education['onlineCourses']) {
                $('#education').append(HTMLschoolStart);
                var mooc = education['onlineCourses'][onlineCourse];
                var formattedUrl = HTMLonlineURL.replace(data, mooc['url']);
                var formattedTitle = HTMLonlineTitle.replace(data, mooc['title']);
                var formattedSchool = HTMLonlineSchool.replace(data, mooc['school']);
                var formattedDates = HTMLonlineDates.replace(data, mooc['dates']);
                $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
            };
        };
    },




bio.display();
work.display();
education.display();
projects.display();



$('#mapDiv').append(googleMap);
