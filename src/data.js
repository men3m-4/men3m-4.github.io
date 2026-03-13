// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import isaacsIcon from "./images/skillsIcon/isaacsim.png"
import airplaneIcon from "./images/skillsIcon/airplane.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"

// Company icon
import TeslaIcon from "./images/company/CODETEN.png"
// import vIcon from "./images/company/v.webp"
import TigerMarineIcon from "./images/company/TM.png"
import neutrino from "./images/company/neutrino.jpg"
import RGS from "./images/company/RGS.jpg"

// company image
import TeslaImg from "./images/workPhotos/codeten.gif"
import IsaacSim from "./images/workPhotos/tigermarine.gif"
import uwaterloo from "./images/workPhotos/robotic arm.png"

// School images
import WaterlooLogo from "./images/school/ERU.png"

import WaterlooImg from "./images/school/men3m.jpeg"

// Helper function for getting text in current language
export const getText = (textObj, language = "en") => {
  // If it's already a string, return as-is (backward compatibility)
  if (typeof textObj === "string") return textObj

  // If it's an object with language keys, return the appropriate language
  if (textObj && typeof textObj === "object") {
    return (
      textObj[language] ||
      textObj.en ||
      textObj.ar ||
      Object.values(textObj)[0] ||
      ""
    )
  }

  // Fallback
  return textObj || ""
}

const siteData = {
  name: {
    en: "MOHAMED ABDELMONEM",
    ar: "محمد عبدالمنعم",
  },

  headerParagraph: {
    en: "Mechatronics and Robotics Engineer with hands-on expertise in robotics, autonomous vehicles, biomedical systems, and marine engineering. Experienced in marine electrical systems and small boat installation. Passionate about delivering innovative engineering solutions.",
    ar: "مهندس ميكاترونكس وروبوتيات ذو خبرة عملية في الروبوتات والمركبات المستقلة والأنظمة الطبية الحيوية والهندسة البحرية. خبير في الأنظمة الكهربائية البحرية والمراكب الصغيرة. شغوف بتقديم حلول هندسية مبتكرة.",
  },

  // Navigation labels
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    work: { en: "Work", ar: "الأعمال" },
    projects: { en: "Projects", ar: "المشاريع" },
    contact: { en: "Contact", ar: "التواصل" },
    resume: { en: "Resume", ar: "السيرة الذاتية" },
  },

  // Section titles
  sections: {
    about: { en: "About", ar: "معلومات عني" },
    naima: { en: "Naima Autonomous Vehicle", ar: "مشروع نعيمة" },
    education: { en: "Education", ar: "التعليم" },
    internships: { en: "Experience", ar: "الخبرة" },
    projects: { en: "Projects", ar: "المشاريع" },
    skills: { en: "Skills", ar: "المهارات" },
    contact: { en: "Contact", ar: "التواصل" },
  },

  // Button text translations
  buttons: {
    explore: { en: "Explore", ar: "استكشف" },
    readMore: { en: "Read More", ar: "اقرأ المزيد" },
    close: { en: "Close", ar: "إغلاق" },
  },

  contactEmail: "muhammad.abdelmoniem4@gmail.com",

  education: [
    {
      title: {
        en: "EGYPTIAN RUSSIAN UNIVERSITY",
        ar: "الجامعة المصرية الروسية",
      },
      para: {
        en: "Bachelor's Degree in Mechatronics & Robotics Engineering",
        ar: "درجة البكالوريوس في هندسة الميكاترونكس والروبوتات",
      },
      imageSrc: WaterlooLogo,
      workImg: WaterlooImg,
      url: "https://www.eru.edu.eg/",
      description: [
        {
          en: "GPA: 3.72 / 4 – Grade: Excellent",
          ar: "المعدل التراكمي: 3.72 / 4 - التقدير: ممتاز",
        },
        {
          en: "Graduation Project Grade: Excellent. Specialized in robotics, autonomous systems, and control systems",
          ar: "تقدير مشروع التخرج: ممتاز. متخصص في الروبوتات والأنظمة المستقلة وأنظمة التحكم",
        },
        {
          en: "Technical expertise in ROS/ROS2, MATLAB Simulink, sensor fusion, and real-time control",
          ar: "خبرة تقنية في ROS/ROS2 و MATLAB Simulink ودمج المستشعرات والتحكم في الوقت الفعلي",
        },
      ],
    },
  ],

  projects: [
    {
      title: {
        en: "Code Ten",
        ar: "كود تن",
      },
      position: {
        en: "Field Service Engineer (Electronics & Biomedical Systems) - Code Ten",
        ar: "مهندس خدمة حقلية (الأنظمة الإلكترونية والطبية الحيوية) - كود تن",
      },
      para: {
        en: "Performing on-site installation, commissioning, and servicing of medical, dental, and aesthetic equipment across multiple medical centers.",
        ar: "تنفيذ التثبيت والتشغيل والصيانة على الموقع للمعدات الطبية والأسنان والتجميلية عبر مراكز طبية متعددة.",
      },
      imageSrc: TeslaIcon,

      url: "/work/tesla/",

      date: "11/2025 - Present",

      description: [
        {
          en: "Performing on-site installation, commissioning, and servicing of medical, dental, and aesthetic equipment across multiple medical centers",
          ar: "تنفيذ التثبيت والتشغيل والصيانة على الموقع للمعدات الطبية والأسنان والتجميلية عبر مراكز طبية متعددة",
        },
        {
          en: "Executing preventive and corrective maintenance for electrical, mechanical, and electronic systems, including board-level troubleshooting",
          ar: "تنفيذ الصيانة الوقائية والتصحيحية للأنظمة الكهربائية والميكانيكية والإلكترونية، بما في ذلك استكشاف أخطاء المستوى الأساسي",
        },
        {
          en: "Diagnosing and repairing power circuits, sensors, actuators, and control modules to ensure optimal system performance",
          ar: "تشخيص وإصلاح دوائر الطاقة والمستشعرات والمشغلات ووحدات التحكم لضمان أداء النظام الأمثل",
        },
        {
          en: "Conducting periodic preventive maintenance (PPM) and ensuring compliance with safety and operational standards",
          ar: "إجراء الصيانة الدورية الوقائية (PPM) والتأكد من الامتثال لمعايير السلامة والتشغيل",
        },
      ],

      workImg: TeslaImg,
    },
    {
      title: {
        en: "Tiger Marine Boats",
        ar: "سفن النمر البحرية",
      },
      position: {
        en: "Mechatronics Engineer - Tiger Marine Boats",
        ar: "مهندس ميكاترونكس - سفن النمر البحرية",
      },
      para: {
        en: "Handle electrical distribution and installation of marine systems, navigation, and safety devices.",
        ar: "التعامل مع التوزيع الكهربائي والتثبيت لأنظمة بحرية والملاحة وأجهزة السلامة.",
      },
      imageSrc: TigerMarineIcon,

      date: "07/2025 - 11/2025",

      description: [
        {
          en: "Handle electrical distribution and installation of marine systems",
          ar: "التعامل مع التوزيع الكهربائي والتثبيت لأنظمة بحرية",
        },
        {
          en: "Install and test navigation, lighting, and safety devices ensuring compliance with marine electrical codes",
          ar: "تثبيت واختبار أجهزة الملاحة والإضاءة والسلامة مع ضمان الامتثال لرموز الكهرباء البحرية",
        },
        {
          en: "Collaborate with technicians to deliver efficient and high-quality work with system testing and troubleshooting",
          ar: "التعاون مع الفنيين لتقديم عمل فعال وعالي الجودة مع اختبار النظام واستكشاف الأخطاء",
        },
      ],

      workImg: IsaacSim,
    },

    {
      title: {
        en: "Neutrino Racing Team",
        ar: "فريق Neutrino سباق",
      },
      position: {
        en: "Mechatronics & Robotics Specialist - Neutrino Racing Team",
        ar: "متخصص الميكاترونكس والروبوتات - فريق Neutrino سباق",
      },
      para: {
        en: "Specialized in dynamic track mechatronics and autonomous vehicle development for electric and self-driving vehicles.",
        ar: "متخصص في ميكاترونكس المسار الديناميكي وتطوير المركبات المستقلة للسيارات الكهربائية والذاتية التحكم.",
      },

      imageSrc: neutrino,

      url: "/work/ecobee/",

      date: "2022 - 2025",

      description: [
        {
          en: "Fabricated and assembled electric vehicle prototypes, designed mechanical parts using SolidWorks, and generated fabrication-ready technical drawings",
          ar: "تصنيع وتجميع نماذج أولية للمركبات الكهربائية، وتصميم الأجزاء الميكانيكية باستخدام SolidWorks، وإنشاء رسومات تقنية جاهزة للتصنيع",
        },
        {
          en: "Programmed and deployed self-driving car software using ROS and MATLAB Simulink, achieving high simulation accuracy through continuous tuning",
          ar: "برمجة ونشر برنامج السيارة ذاتية التحكم باستخدام ROS و MATLAB Simulink، مع تحقيق دقة محاكاة عالية من خلال الضبط المستمر",
        },
        {
          en: "Validated simulations and contributed to real-world field testing for system functionality and performance verification",
          ar: "التحقق من المحاكاة والمساهمة في اختبار الحقل في العالم الحقيقي للتحقق من وظائف النظام والأداء",
        },
      ],

      workImg: RGS,
    },
    {
      title: {
        en: "RGS-ERU (Robotics Geeks School)",
        ar: "RGS-ERU (مدرسة هواة الروبوتات)",
      },
      position: {
        en: "Robotics Specialist - RGS-ERU",
        ar: "متخصص روبوتات - RGS-ERU",
      },
      para: {
        en: "Validated multiple robotics projects using diverse microcontrollers with strong programming fundamentals in C++ and Python.",
        ar: "التحقق من صحة مشاريع روبوتات متعددة باستخدام وحدات تحكم متنوعة مع أساس برمجة قوي في C++ و Python.",
      },

      imageSrc: RGS,

      url: "/work/rgs/",

      date: "2021 - 2022",

      description: [
        {
          en: "Validated multiple robotics projects using diverse microcontrollers",
          ar: "التحقق من صحة مشاريع روبوتات متعددة باستخدام وحدات تحكم متنوعة",
        },
        {
          en: "Built strong programming fundamentals in C++ and Python through hands-on robotics development",
          ar: "بناء أساس برمجة قوي في C++ و Python من خلال تطوير الروبوتات العملي",
        },
        {
          en: "Developed expertise in embedded systems and real-time control applications",
          ar: "تطوير الخبرة في الأنظمة المدمجة وتطبيقات التحكم في الوقت الفعلي",
        },
      ],

      workImg: uwaterloo,
    },
  ],

  // About Section --------------
  aboutParaOne: {
    en: "Highly motivated Mechatronics and Robotics Engineer with hands-on experience in robotics, robotic arms, electric and autonomous vehicles, automotive systems, electronics, and industrial automation. Proficient in ROS/ROS2, MATLAB Simulink, control systems, sensor fusion, and real-time control, with strong capabilities in system integration, troubleshooting, and technical problem-solving.",
    ar: "مهندس ميكاترونكس وروبوتات متحمس للغاية مع خبرة عملية في الروبوتات والأذرع الروبوتية والمركبات الكهربائية والمستقلة وأنظمة السيارات والإلكترونيات والأتمتة الصناعية. يتمتع بكفاءة في ROS/ROS2 و MATLAB Simulink وأنظمة التحكم ودمج المستشعرات والتحكم في الوقت الفعلي، مع إمكانيات قوية في تكامل النظام واستكشاف الأخطاء وحل المشاكل التقنية.",
  },
  aboutParaTwo: {
    en: "Experienced in robotics and autonomous vehicle systems, electric vehicle systems, and marine manufacturing, as well as installation, maintenance, and preventive servicing of medical equipment. I deliver reliable, safe, and innovative engineering solutions that combine mechanical, electrical, and electronic expertise.",
    ar: "خبرة في أنظمة الروبوتات والمركبات المستقلة وأنظمة المركبات الكهربائية والتصنيع البحري، وكذلك التثبيت والصيانة والصيانة الوقائية للمعدات الطبية. أوفر حلول هندسية موثوقة وآمنة ومبتكرة تجمع بين الخبرة الميكانيكية والكهربائية والإلكترونية.",
  },
  aboutParaThree: {
    en: "I earned my Bachelor's degree in Mechatronics and Robotics Engineering from the Egyptian Russian University with a GPA of 3.72/4 and an Excellent graduation project grade. When I'm not engineering, I enjoy exploring new technologies and continuous learning in robotics and autonomous systems.",
    ar: "حصلت على درجة البكالوريوس في هندسة الميكاترونكس والروبوتات من الجامعة المصرية الروسية بمعدل تراكمي 3.72/4 وتقدير ممتاز في مشروع التخرج. عندما لا أعمل في الهندسة، أستمتع باستكشاف التقنيات الجديدة والتعلم المستمر في الروبوتات والأنظمة المستقلة.",
  },

  // Naima Project Time Period
  naimaTime: {
    en: "2025",
    ar: "2025",
  },

  // Naima Experience Description
  naimaExperience: [
    {
      en: "Naima is an autonomous vehicle framework built using ROS 2 Humble, integrating the ZED 2 stereo camera and UBLOX GPS with advanced navigation tools such as Nav2, SLAM, and sensor fusion using dual EKF localization. The system features a modular architecture for real-time autonomous navigation and robotics research.",
      ar: "نعيمة هو إطار عمل لمركبة ذاتية القيادة مبني باستخدام ROS 2 Humble، يدمج كاميرا ZED 2 الاستيريو مع نظام UBLOX GPS وأدوات الملاحة المتقدمة مثل Nav2 وSLAM ودمج الحساسات باستخدام نظام تموضع يعتمد على Dual EKF.",
    },
  ],

  // Projects Carousel Items
  projectsCarouselItems: [
    {
      media: "naimaImage",
      type: "image",
      title: {
        en: "Naima Autonomous Vehicle Project",
        ar: "مشروع نعيمة للمركبات ذاتية القيادة",
      },
      subtitle: {
        en: "Building autonomous mobility with ROS 2",
        ar: "بناء نظام قيادة ذاتية باستخدام ROS 2",
      },
      description: {
        en: "Naima is an autonomous vehicle framework built using ROS 2 Humble. It integrates the ZED 2 stereo camera and UBLOX GPS with advanced navigation tools such as Nav2, SLAM, and sensor fusion using dual EKF localization. The system is designed with a modular architecture for real-time autonomous navigation and robotics research.",
        ar: "نعيمة هو إطار عمل لمركبة ذاتية القيادة مبني باستخدام ROS 2 Humble. يدمج كاميرا ZED 2 الاستيريو مع نظام UBLOX GPS وأدوات الملاحة المتقدمة مثل Nav2 وSLAM ودمج الحساسات باستخدام نظام تموضع يعتمد على Dual EKF. تم تصميم النظام بهيكلية معيارية لدعم الملاحة الذاتية والتطبيقات الروبوتية في الزمن الحقيقي.",
      },
      buttons: [
        {
          text: { en: "View on GitHub", ar: "عرض على GitHub" },
          url: "https://github.com/men3m-4/Naima",
        },
      ],
    },

    {
      media: "electricvechle",
      type: "image",
      title: {
        en: "Electric Vehicle – Neutrino Racing Team (EVER Egypt 2024)",
        ar: "السيارة الكهربائية – فريق نيوترينو (EVER مصر 2024)",
      },
      subtitle: {
        en: "Designing and building an electric race vehicle",
        ar: "تصميم وبناء سيارة سباق كهربائية",
      },
      description: {
        en: "As a member of the Neutrino Racing Team, we designed and built an electric vehicle to compete in the EVER Egypt 2024 Electric Vehicle Rally. The competition brings together engineering teams from Egyptian universities to design, manufacture, and test fully functional electric cars in a real racing environment.",
        ar: "كعضو في فريق Neutrino Racing Team قمنا بتصميم وبناء سيارة كهربائية للمشاركة في رالي السيارات الكهربائية EVER Egypt 2024. تجمع هذه المسابقة فرقاً هندسية من الجامعات المصرية لتصميم وتصنيع واختبار سيارات كهربائية حقيقية في بيئة سباق واقعية.",
      },
      buttons: [
        {
          text: { en: "Team Page", ar: "صفحة الفريق" },
          url: "https://www.facebook.com/NeutrinoRacingTeam/",
        },
      ],
    },

    {
      media: "abbRobotVideo",
      type: "video",
      title: {
        en: "ABB IRB 4600 Robot Kinematics Project",
        ar: "مشروع كينماتيكس روبوت ABB IRB 4600",
      },
      subtitle: {
        en: "Forward & Inverse Kinematics with trajectory planning",
        ar: "الحركيات الأمامية والعكسية مع تخطيط المسار",
      },
      description: {
        en: "Simulation of the ABB IRB 4600 industrial robot using CoppeliaSim and Python. The project implements Forward and Inverse Kinematics with trajectory interpolation to control the robot motion.",
        ar: "محاكاة الروبوت الصناعي ABB IRB 4600 باستخدام CoppeliaSim وPython مع تطبيق الحركيات الأمامية والعكسية وتوليد المسار للتحكم في حركة الروبوت.",
      },
      buttons: [
        {
          text: { en: "View on GitHub", ar: "عرض على GitHub" },
          url: "https://github.com/men3m-4/IK_FK_ABB_IRB_4600_40_255_ROBOTICS-PROJECT",
        },
      ],
    },

    {
      media: "pcbAltiumDesignImage",
      type: "image",
      title: {
        en: "PCB Design with Altium Designer",
        ar: "تصميم لوحات PCB باستخدام Altium Designer",
      },
      subtitle: {
        en: "From schematics to PCB layout",
        ar: "من التخطيطات إلى تصميم PCB",
      },
      description: {
        en: "Completed a comprehensive PCB design course using Altium Designer, covering professional schematic creation, component selection, 3D footprint placement, annotation and validation, and efficient PCB layout and routing. Hands‑on designs included a power supply and a full Arduino Nano board implementation with successful routing.",
        ar: "أكملت دورة شاملة في تصميم لوحات PCB باستخدام Altium Designer، شملت إنشاء المخططات، اختيار المكونات، وضع نماذج ثلاثية الأبعاد، الترقيم والتحقق، وتصميم لوحات PCB وتوجيهها بكفاءة. تضمنت المشاريع تصميم مزود طاقة وتنفيذ كامل Board لأردوينو نانو مع توجيه ناجح.",
      },
      buttons: [
        {
          text: { en: "View LinkedIn Post", ar: "عرض المنشور على LinkedIn" },
          url: "https://www.linkedin.com/posts/mohamed-abdelmoniem-909a04302_pcbdesign-altiumdesigner-electronics-activity-7233497476287078400-AZm2",
        },
      ],
    },
    {
      media: "everAutonomousImage",
      type: "image",
      title: {
        en: "Autonomous Track – EVER Electric Vehicle Rally",
        ar: "المسار الذاتي – رالي السيارات الكهربائية EVER",
      },
      subtitle: {
        en: "Simulation & integration using MATLAB, ROS & CoppeliaSim",
        ar: "المحاكاة والدمج باستخدام MATLAB وROS وCoppeliaSim",
      },
      description: {
        en: "Represented the Neutrino Racing Team at the Autonomous Track of the EVER Electric Vehicle Rally in New Alamein City. Developed a detailed simulation model using MATLAB Simulink integrated with ROS and CoppeliaSim, achieving seamless testing and refinement across multiple project milestones. This experience highlights advanced modeling, simulation, and system integration capabilities in autonomous vehicle research.",
        ar: "مثّلت فريق Neutrino Racing في المسار الذاتي لرالي السيارات الكهربائية EVER في مدينة العلمين الجديدة. طورت نموذج محاكاة تفصيلي باستخدام MATLAB Simulink مدمج مع ROS وCoppeliaSim، مما أتاح اختبارًا سلسًا وتحسينًا عبر مراحل المشروع المختلفة. هذه التجربة تبرز قدراتي في نمذجة متقدمة، ومحاكاة، ودمج الأنظمة في بحث المركبات الذاتية.",
      },
      buttons: [
        {
          text: { en: "View LinkedIn Post", ar: "عرض المنشور على LinkedIn" },
          url: "https://www.linkedin.com/posts/mohamed-abdelmoniem-909a04302_everv-everfifthgeneration-grandfinale-activity-7234095178653859841-lhPv",
        },
      ],
    },
    {
      media: "matlabIPCameraimage",
      type: "image",
      title: {
        en: "Real-Time Image Processing Using MATLAB and IP Camera",
        ar: "معالجة الصور في الزمن الحقيقي باستخدام MATLAB وكاميرا IP",
      },
      subtitle: {
        en: "Live object detection and visualization",
        ar: "كشف الأجسام في الوقت الفعلي وعرض النتائج",
      },
      description: {
        en: "This project demonstrates real-time object detection using MATLAB with an IP Camera. It captures live video, processes each frame to remove noise, and visualizes results by drawing bounding boxes around detected objects. The system uses MATLAB's Image Segmenter Toolbox and integrates with the IP camera for live streaming and processing.",
        ar: "يعرض هذا المشروع كشف الأجسام في الزمن الحقيقي باستخدام MATLAB وكاميرا IP. يقوم البرنامج بالتقاط الفيديو الحي، ومعالجة كل إطار لإزالة التشويش، وعرض النتائج عن طريق رسم مربعات حول الأجسام المكتشفة. يعتمد النظام على Image Segmenter Toolbox في MATLAB ويتكامل مع كاميرا IP للبث والمعالجة في الوقت الفعلي.",
      },
      buttons: [
        {
          text: { en: "View on GitHub", ar: "عرض على GitHub" },
          url: "https://github.com/men3m-4/Real-Time-Image-Processing-Using-MATLAB-and-IP-Camera",
        },
      ],
    },
  ],
  skills: [
    {
      img: clangIcon,
      para: "C, C++, MATLAB, Python",
    },
    {
      img: codeIcon,
      para: "ROS/ROS2, Control Systems",
    },
    {
      img: RPIIcon,
      para: "Arduino, Raspberry Pi, Microcontrollers",
    },
    {
      img: openCVIcon,
      para: "Sensor Fusion, Real-time Control",
    },
    {
      img: SolidworksIcon,
      para: "SolidWorks, CAD, Technical Drawings",
    },
    {
      img: rosIcon,
      para: "CoppeliaSim, MATLAB Simulink",
    },
    {
      img: isaacsIcon,
      para: "System Integration, Troubleshooting",
    },
    {
      img: airplaneIcon,
      para: "Electrical Systems, Electronics",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: {
    en: "Let's connect and discuss robotics and engineering solutions!",
    ar: "دعنا نتواصل ونناقش حلول الروبوتات والهندسة!",
  },
  social: [
    { img: githubIcon, url: "https://github.com/men3m-4" },
    // {
    //   img: googleScholarIcon,
    //   url: "https://scholar.google.com/",
    // },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/mohamed-abdelmoniem-909a04302/",
    },
  ],

  // End Contact Section ---------------
}

export default siteData
