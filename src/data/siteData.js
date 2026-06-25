export const profile = {
  name: 'Abhiram R S',
  title: 'AI/ML Engineer & Full Stack Developer',
  subtitle: 'Specializing in Computer Vision, Deep Learning, & High-Performance Software Systems',
  location: 'Kannur, Kerala, India',
  email: 'abhiramvellur40@gmail.com',
  phone: '+91 7736110891',
  github: 'https://github.com/AbhiR4mRs',
  linkedin: 'https://www.linkedin.com/',
  summary:
    'Integrated M.Sc. Computer Science graduate specializing in AI and Machine Learning. Highly adaptable engineer seeking Software Developer, QA Engineer, Full Stack Developer, and AI/ML roles. Experienced in building intelligent pipelines, deep learning vision models, scalable backends (Django/FastAPI), and executing comprehensive testing frameworks.',
  hero:
    'I engineer intelligent software systems and robust full-stack pipelines — from high-accuracy computer vision models to secure, containerized backend architectures.',
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY' // Get a free key at web3forms.com to receive form submissions in your email
}

export const roles = [
  {
    id: 'aiml',
    name: 'AI/ML Specialist',
    summary: 'Designing real-time computer vision workflows, deep learning networks (LSTM, Attention, YOLO), and data pipelines with PyTorch and Scikit-learn.'
  },
  {
    id: 'fullstack',
    name: 'Full Stack Developer',
    summary: 'Building responsive frontend interfaces in React and robust backend applications using Django and FastAPI, connected to high-performance Redis caches and SQL databases.'
  },
  {
    id: 'qa',
    name: 'QA & Software Engineer',
    summary: 'Ensuring software reliability, system integrity, performance benchmarking, and structured test coverage across web apps and machine learning systems.'
  }
]

export const skillsCategorized = [
  {
    category: 'AI & Machine Learning',
    items: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'YOLO', 'LSTM', 'Attention Models', 'OpenCV', 'Pandas', 'Computer Vision']
  },
  {
    category: 'Full Stack Development',
    items: ['React', 'JavaScript', 'Django', 'FastAPI', 'HTML5/CSS3', 'Tailwind CSS', 'REST APIs', 'Node.js']
  },
  {
    category: 'Databases & Infrastructure',
    items: ['SQL', 'PostgreSQL', 'SQLite', 'Redis', 'Docker', 'Git', 'GitHub Actions', 'Linux Shell']
  },
  {
    category: 'QA & Testing Tools',
    items: ['Unit Testing (PyTest)', 'Django Test Framework', 'API Benchmarking', 'CI/CD Pipelines', 'Integration Testing']
  }
]

export const skills = [
  'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'YOLO', 'LSTM', 'Attention Models', 'FastAPI', 'Django', 'React', 'JavaScript', 'SQL', 'PostgreSQL', 'Redis', 'Docker', 'Git', 'Testing & QA'
]

export const timeline = [
  {
    title: 'Integrated M.Sc. in Computer Science — AI & ML',
    org: 'Nehru Arts and Science College, Kanhangad',
    period: 'Expected Jun 2026',
    detail: 'GPA 7.364 / 10 · Advanced coursework in Machine Learning, Deep Learning, Design and Analysis of Algorithms, DBMS, and Web Technologies.'
  },
  {
    title: 'TensorFlow Developer Certificate',
    org: 'DeepLearning.AI · Coursera',
    period: 'Jun 2025',
    detail: 'Specialized in building and training deep learning models, natural language processing architectures, and computer vision classification workflows using TensorFlow.'
  },
  {
    title: 'Python for Everybody Specialization',
    org: 'University of Michigan · Coursera',
    period: 'Nov 2021',
    detail: 'Acquired foundation in data structures, networked application interfaces, database structures, and dynamic web scraping with Python.'
  }
]

export const achievements = [
  {
    title: 'National Level Hackathon Participant',
    org: 'College Tech Fest',
    period: 'Mar 2025',
    detail: 'Designed an automated computer vision prototype for intelligent surveillance in smart cities.'
  },
  {
    title: 'Academic Project Lead',
    org: 'Nehru Arts and Science College',
    period: '2025 - 2026',
    detail: 'Led a team of three to design and deploy the Zero-Day Intrusion Detection System as the main academic project.'
  },
  {
    title: 'TensorFlow Certification Champion',
    org: 'DeepLearning.AI',
    period: '2025',
    detail: 'Earned certification by mastering sequential models, CNNs, and recurrent neural networks with real-world datasets.'
  }
]

export const projects = [
  {
    slug: 'zero-day-intrusion-detection-system',
    title: 'Zero-Day Intrusion Detection System',
    category: 'AI/ML · Cyber Security',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Redis', 'Docker', 'Network Security'],
    short: 'A real-time anomaly detection pipeline that learns normal network behaviour and flags suspicious traffic using reconstruction error.',
    problem: 'Traditional signature-based intrusion detection systems fail to detect unknown zero-day threats. The challenge is processing live network flow data at low latency while accurately marking subtle structural anomalies.',
    metrics: [
      { label: 'Latency', value: '< 15ms' },
      { label: 'Detection Rate', value: '96.2%' },
      { label: 'Throughput', value: '10k/sec' }
    ],
    approach: [
      'Developed an attention-based LSTM Autoencoder in PyTorch to model temporal network packet flow windows.',
      'Configured a custom reconstruction error threshold based on statistical outliers to dynamically flag zero-day anomalies.',
      'Implemented an asynchronous Redis ingestion buffer connected to a FastAPI model inference service for extreme low-latency processing.',
      'Orchestrated the entire service layer using Docker Compose, creating an isolated, production-ready environment.'
    ],
    impact: 'Designed a highly scalable, real-time cyber security monitor capable of running at edge networks. Successfully reduced false positive rates by 22% compared to standard MLP models.',
    link: 'https://github.com/AbhiR4mRs/zeroday',
    demo: '#'
  },
  {
    slug: 'foreign-object-intrusion-detection',
    title: 'Railway Object Intrusion Detector',
    category: 'Computer Vision',
    stack: ['Python', 'YOLO', 'OpenCV', 'Computer Vision', 'PyTorch'],
    short: 'A YOLO-based real-time object detection pipeline for identifying foreign objects on railway tracks to prevent accidents.',
    problem: 'Railway safety monitoring demands fast, ultra-reliable object classification under harsh environmental constraints such as rain, poor lighting, and fast-moving camera feeds.',
    metrics: [
      { label: 'Inference Speed', value: '45 FPS' },
      { label: 'Model Accuracy', value: '94.8% mAP' },
      { label: 'Edge Latency', value: '22ms' }
    ],
    approach: [
      'Trained a custom YOLO object detection network with a specialized railway track obstruction dataset.',
      'Utilized OpenCV for image preprocessing, frame stabilization, and dynamic contrast correction (CLAHE) to handle poor light.',
      'Created a tracking filter that monitors detected objects across consecutive frames to filter out camera noise and fleeting obstructions.',
      'Built modular Python services with clean test files to benchmark model runtimes on varying hardware configurations.'
    ],
    impact: 'Demonstrated high-accuracy safety monitoring on embedded hardware targets, ensuring real-time track safety warnings with less than 2% false alarm rate.',
    link: 'https://github.com/AbhiR4mRs/Yolo',
    demo: '#'
  },
  {
    slug: 'credit-card-approval-prediction',
    title: 'Credit Card Approval Predictor',
    category: 'Data Science',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Imbalanced-Learn', 'Seaborn'],
    short: 'An end-to-end classification pipeline for predicting credit card approval using demographic and financial features.',
    problem: 'Financial datasets suffer from severe class imbalance and missing values, which can lead to biased model approvals if left unaddressed.',
    metrics: [
      { label: 'Model Accuracy', value: '93.43%' },
      { label: 'ROC-AUC Score', value: '0.961' },
      { label: 'Class Balance', value: '50:50 SMOTE' }
    ],
    approach: [
      'Cleaned and merged multiple financial record datasets, handling missing entries and performing engineered features like Age and EmploymentYears.',
      'Developed preprocessing pipelines using StandardScaler, OneHotEncoder, and SMOTE for handling class imbalances.',
      'Benchmarked Random Forest, Gradient Boosting, SVM, Logistic Regression, and KNN classifiers to select the best predictor.',
      'Exported optimal training weights and preprocessing pipelines as reusable pickle files (.pkl) for instant server integration.'
    ],
    impact: 'Achieved a peak classification accuracy of 93.43% using Random Forest, providing loan officers with a transparent, risk-based credit score analysis.',
    link: '#',
    demo: '#'
  },
  {
    slug: 'hostel-management-system',
    title: 'Full-Stack Hostel Management System',
    category: 'Full-Stack Dev',
    stack: ['Python', 'Django', 'SQLite', 'HTML', 'JavaScript', 'Tailwind CSS'],
    short: 'A web application for automating room allocation, fee tracking, and student record management.',
    problem: 'Traditional educational hostels manage student registration using manual paperwork, leading to room conflicts, lost payment records, and slow report retrieval.',
    metrics: [
      { label: 'Workload Reduction', value: '40%' },
      { label: 'Query Latency', value: '< 80ms' },
      { label: 'Record Capacity', value: '500+ Students' }
    ],
    approach: [
      'Designed a relational database schema in SQLite to map students, fee payments, room availability, and allocation histories.',
      'Developed administrative portals and MVC routes in Django with strict role-based access control (RBAC).',
      'Engineered automatic room allocation routines that evaluate student applications according to custom priority criteria.',
      'Refined frontend templates with Tailwind CSS and asynchronous JavaScript (Fetch API) for dynamic table updates.'
    ],
    impact: 'Built a reliable, paperless admin center that reduces room allocation times from days to minutes and lowers administrative manual workloads by 40%.',
    link: 'https://github.com/jitheshjr/Hostel_Manangement_System',
    demo: '#'
  }
]
