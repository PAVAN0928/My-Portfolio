import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  BarChart3,
  Map,
  User,
  Download,
  Globe,
  Layers,
  TrendingUp,
  FileText,
  Monitor,
  Brain,
  Target,
  Zap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Pavan_Tulasi_Resume.pdf';
    link.click();
    alert('Resume download would start here. Please upload your actual resume file.');
  };

  const technicalSkills = [
    { name: 'SQL', level: 95, icon: Database, category: 'Database' },
    { name: 'Power BI', level: 90, icon: BarChart3, category: 'Visualization' },
    { name: 'Excel', level: 98, icon: FileText, category: 'Analysis' },
    { name: 'GIS Systems', level: 92, icon: Map, category: 'Geospatial' },
    { name: 'Looker Studio', level: 85, icon: TrendingUp, category: 'Visualization' },
    { name: 'Data Analysis', level: 94, icon: Brain, category: 'Analysis' },
    { name: 'ArcGIS', level: 88, icon: Globe, category: 'Geospatial' },
    { name: 'QGIS', level: 85, icon: Layers, category: 'Geospatial' },
    { name: 'Python', level: 80, icon: Code, category: 'Programming' },
    { name: 'Tableau', level: 82, icon: Monitor, category: 'Visualization' },
    { name: 'AutoCAD', level: 78, icon: Target, category: 'Design' },
    { name: 'Machine Learning', level: 75, icon: Zap, category: 'AI/ML' },
  ];

  const softSkills = [
    'Team Leadership', 'Stakeholder Management', 'Project Management', 
    'Quality Analysis', 'Training & Mentoring', 'Problem Solving',
    'Communication', 'Strategic Planning', 'Process Improvement'
  ];

  const workExperience = [
    {
      company: 'RMSI Pvt Ltd',
      role: 'Senior GIS Engineer',
      period: 'Jan 2022 - Present',
      description: 'Leading GIS projects, data analysis, and system implementations. Managing team onboarding and stakeholder collaboration.',
      achievements: [
        'Led 5+ major GIS projects with 100% on-time delivery',
        'Improved data processing efficiency by 40% through automation',
        'Mentored 10+ junior engineers and analysts',
        'Developed standardized workflows adopted company-wide',
        'Managed stakeholder relationships for high-value clients'
      ]
    },
    {
      company: 'Infosys',
      role: 'Senior Process Executive',
      period: 'Aug 2021 - Jan 2022',
      description: 'Managed data-intensive processes and quality analysis. Developed reporting dashboards and KPI tracking systems.',
      achievements: [
        'Automated reporting processes reducing manual effort by 60%',
        'Reduced processing time by 30% through optimization',
        'Implemented quality control measures improving accuracy by 25%',
        'Created comprehensive KPI dashboards for management',
        'Led cross-functional teams for process improvements'
      ]
    },
    {
      company: 'GlobalLogic',
      role: 'Associate Analyst Data',
      period: 'Feb 2020 - Aug 2021',
      description: 'Performed data analysis, created visualizations, and supported decision-making through actionable insights.',
      achievements: [
        'Created 15+ interactive dashboards for various departments',
        'Analyzed large datasets to identify business opportunities',
        'Improved reporting accuracy by 25% through data validation',
        'Collaborated with international teams across time zones',
        'Developed data quality frameworks still in use today'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Technology (M.Tech)',
      field: 'Geoinformatics',
      institution: 'Indian Institute of Technology (IIT)',
      period: '2018 - 2020',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in advanced GIS technologies, remote sensing, and spatial data analysis. Thesis on "Machine Learning Applications in Geospatial Data Processing".'
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science Engineering',
      institution: 'Jawaharlal Nehru Technological University',
      period: '2014 - 2018',
      grade: 'CGPA: 8.2/10',
      description: 'Strong foundation in programming, data structures, algorithms, and database management. Final year project on "Web-based GIS Application Development".'
    },
    {
      degree: 'Higher Secondary Certificate',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'Narayana Junior College',
      period: '2012 - 2014',
      grade: '95.2%',
      description: 'Excelled in mathematics and sciences, laying the foundation for analytical thinking and problem-solving skills.'
    }
  ];

  const certifications = [
    {
      name: 'ESRI ArcGIS Desktop Professional',
      issuer: 'ESRI',
      year: '2023',
      icon: Globe
    },
    {
      name: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      year: '2022',
      icon: BarChart3
    },
    {
      name: 'Google Data Analytics Professional',
      issuer: 'Google',
      year: '2022',
      icon: TrendingUp
    },
    {
      name: 'Oracle SQL Expert Certification',
      issuer: 'Oracle',
      year: '2021',
      icon: Database
    },
    {
      name: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      year: '2021',
      icon: Monitor
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-sky-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">
              Pavan<span className="text-sky-600">Tulasi</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'education', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-sky-600 transition-colors duration-300 font-medium ${
                    activeSection === item ? 'text-sky-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-blue-100/50"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8 relative">
            <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-r from-sky-400 to-blue-500 p-2 mb-6 shadow-2xl hover:shadow-sky-300/50 transition-all duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                {/* Replace this with actual photo */}
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Pavan Tulasi" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 animate-fade-in">
            Pavan Tulasi
          </h1>
          <h2 className="text-2xl md:text-3xl text-sky-600 mb-6 animate-fade-in-delay font-semibold">
            Senior GIS Engineer & Data Analytics Expert
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2 leading-relaxed">
            Transforming raw data into actionable insights through advanced GIS systems, 
            mapping technologies, and data-driven performance analysis with 4+ years of expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-300/50 font-medium"
            >
              Get In Touch
            </button>
            <button 
              onClick={handleDownloadResume}
              className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-medium"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-sky-600 cursor-pointer" onClick={() => scrollToSection('about')} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-sky-600 mb-4">Navigation & Data Analysis Expert</h3>
              <p className="text-gray-600 leading-relaxed">
                I am an experienced navigation trainer with 4+ years in data-intensive roles involving 
                GIS systems, mapping, and data-driven performance analysis. My expertise spans across 
                multiple domains of geospatial technology and business intelligence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Proficient in SQL, Excel, Power BI, and Looker Studio for querying, reporting, and 
                visualization. I excel in quality analysis, team onboarding, stakeholder collaboration, 
                and transforming raw data into actionable insights through comprehensive dashboards and KPIs.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['GIS Systems', 'Data Analysis', 'SQL', 'Power BI', 'Team Leadership', 'Project Management'].map((tag) => (
                  <span key={tag} className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-200 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-sky-200/50">
                <Calendar className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-800">4+</h4>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-sky-200/50">
                <Briefcase className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-800">25+</h4>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-sky-200/50">
                <Award className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-800">3</h4>
                <p className="text-gray-600 font-medium">Companies</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-sky-200/50">
                <BarChart3 className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-800">50+</h4>
                <p className="text-gray-600 font-medium">Dashboards Created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Skills & Expertise</h2>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-sky-600 mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-sky-100">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-8 h-8 text-sky-600 mr-3" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                      <p className="text-sm text-gray-500">{skill.category}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-sky-100 h-3 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-sky-500 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="absolute right-0 top-4 text-sm text-gray-600 font-medium">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-sky-600 mb-8 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <span 
                  key={skill} 
                  className="bg-white text-gray-700 px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-sky-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-sky-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{job.role}</h3>
                    <h4 className="text-xl text-sky-600 font-semibold">{job.company}</h4>
                  </div>
                  <span className="text-gray-600 font-medium bg-white px-4 py-2 rounded-lg">{job.period}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-800">Key Achievements:</h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Education & Certifications</h2>
          
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-sky-600 mb-8 text-center">Academic Background</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-sky-100">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                      <h5 className="text-lg text-sky-600 font-semibold">{edu.field}</h5>
                      <p className="text-gray-600 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-600 font-medium bg-sky-50 px-4 py-2 rounded-lg">{edu.period}</span>
                      <p className="text-sky-600 font-semibold mt-2">{edu.grade}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-sky-600 mb-8 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-sky-100">
                  <cert.icon className="w-12 h-12 text-sky-600 mb-4" />
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 font-medium">{cert.issuer}</p>
                  <p className="text-sky-600 font-semibold">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Award className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence Award</h3>
              <p className="text-gray-600">Received company-wide recognition for outstanding performance in GIS project delivery at RMSI.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <TrendingUp className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Process Improvement Champion</h3>
              <p className="text-gray-600">Implemented data analysis processes that improved efficiency by 40% across multiple projects.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <User className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Team Leadership Excellence</h3>
              <p className="text-gray-600">Successfully mentored and onboarded 15+ junior analysts and engineers across different organizations.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Database className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Data Innovation Leader</h3>
              <p className="text-gray-600">Developed innovative dashboard solutions that became standard practice across the organization.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Map className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">GIS Project Excellence</h3>
              <p className="text-gray-600">Led multiple high-impact GIS projects with 100% on-time delivery and exceptional client satisfaction.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Zap className="w-12 h-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Automation Pioneer</h3>
              <p className="text-gray-600">Developed automated reporting solutions that reduced manual work by 60% and improved accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in the field of GIS, data analysis, and business intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-600 hover:text-sky-600 transition-colors duration-300 p-3 rounded-lg hover:bg-white">
                  <Mail className="w-6 h-6" />
                  <span className="font-medium">pavan.tulasi@email.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 hover:text-sky-600 transition-colors duration-300 p-3 rounded-lg hover:bg-white">
                  <Phone className="w-6 h-6" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 hover:text-sky-600 transition-colors duration-300 p-3 rounded-lg hover:bg-white">
                  <MapPin className="w-6 h-6" />
                  <span className="font-medium">Hyderabad, India</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 hover:text-sky-600 transition-colors duration-300 p-3 rounded-lg hover:bg-white">
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">linkedin.com/in/pavantulasi</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 hover:text-sky-600 transition-colors duration-300 p-3 rounded-lg hover:bg-white">
                  <Github className="w-6 h-6" />
                  <span className="font-medium">github.com/pavantulasi</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-sky-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-sky-50 text-gray-800 border border-sky-200 rounded-lg px-4 py-3 focus:border-sky-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-sky-50 text-gray-800 border border-sky-200 rounded-lg px-4 py-3 focus:border-sky-500 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-sky-50 text-gray-800 border border-sky-200 rounded-lg px-4 py-3 focus:border-sky-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-300/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-sky-100 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p className="font-medium">&copy; 2024 Pavan Tulasi. All rights reserved.</p>
          <p className="mt-2">Designed with passion for creating impactful data solutions</p>
        </div>
      </footer>
    </div>
  );
}

export default App;