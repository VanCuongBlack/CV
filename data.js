var CV_DATA = {
    header: {
        name: { en: "Tran Van Cuong", vi: "Trần Văn Cương" },
        initials: "TV",
        title: { en: "Software Engineer", vi: "Kỹ sư Phần mềm" },
        contact: {
            email: "email@example.com",
            phone: "+84 xxx xxx xxx",
            location: { en: "Ho Chi Minh City, Vietnam", vi: "TP. Hồ Chí Minh, Việt Nam" },
            github: { url: "https://github.com/tranv", label: "github.com/tranv" },
            linkedin: { url: "https://linkedin.com/in/tranv", label: "linkedin.com/in/tranv" }
        }
    },

    about: {
        title: { en: "About Me", vi: "Giới thiệu" },
        content: {
            en: "A passionate software engineer with experience in building web applications and scalable systems. Dedicated to writing clean, maintainable code and continuously learning new technologies.",
            vi: "Kỹ sư phần mềm đam mê với kinh nghiệm xây dựng ứng dụng web và hệ thống có khả năng mở rộng. Tận tâm viết mã sạch, dễ bảo trì và không ngừng học hỏi công nghệ mới."
        }
    },

    experience: {
        title: { en: "Experience", vi: "Kinh nghiệm làm việc" },
        items: [
            {
                role: { en: "Senior Software Engineer", vi: "Kỹ sư Phần mềm Cao cấp" },
                company: "Company Name",
                date: { en: "Jan 2023 – Present", vi: "01/2023 – Hiện tại" },
                details: [
                    {
                        en: "Developed and maintained scalable web applications using modern frameworks",
                        vi: "Phát triển và bảo trì các ứng dụng web có khả năng mở rộng sử dụng framework hiện đại"
                    },
                    {
                        en: "Collaborated with cross-functional teams to deliver high-quality products",
                        vi: "Phối hợp với các nhóm liên chức năng để cung cấp sản phẩm chất lượng cao"
                    },
                    {
                        en: "Implemented CI/CD pipelines and improved deployment processes",
                        vi: "Triển khai CI/CD pipeline và cải thiện quy trình triển khai"
                    }
                ]
            },
            {
                role: { en: "Software Engineer", vi: "Kỹ sư Phần mềm" },
                company: "Previous Company",
                date: { en: "Jun 2020 – Dec 2022", vi: "06/2020 – 12/2022" },
                details: [
                    {
                        en: "Built RESTful APIs and microservices architecture",
                        vi: "Xây dựng RESTful API và kiến trúc microservices"
                    },
                    {
                        en: "Optimized database queries resulting in 40% performance improvement",
                        vi: "Tối ưu hóa truy vấn cơ sở dữ liệu giúp cải thiện hiệu suất 40%"
                    },
                    {
                        en: "Mentored junior developers and conducted code reviews",
                        vi: "Hướng dẫn các lập trình viên mới và thực hiện đánh giá mã nguồn"
                    }
                ]
            }
        ]
    },

    education: {
        title: { en: "Education", vi: "Học vấn" },
        items: [
            {
                degree: { en: "Bachelor of Computer Science", vi: "Cử nhân Khoa học Máy tính" },
                school: { en: "University Name", vi: "Tên Trường Đại học" },
                date: "2016 – 2020",
                details: [
                    { en: "GPA: 3.5/4.0", vi: "Điểm trung bình: 3.5/4.0" },
                    {
                        en: "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
                        vi: "Các môn liên quan: Cấu trúc dữ liệu, Thuật toán, Hệ quản trị CSDL, Công nghệ phần mềm"
                    }
                ]
            }
        ]
    },

    skills: {
        title: { en: "Skills", vi: "Kỹ năng" },
        categories: [
            {
                name: { en: "Programming Languages", vi: "Ngôn ngữ lập trình" },
                tags: ["JavaScript", "TypeScript", "Python", "Java", "C#"]
            },
            {
                name: { en: "Frameworks & Libraries", vi: "Framework & Thư viện" },
                tags: ["React", "Node.js", "Express", "Spring Boot", ".NET"]
            },
            {
                name: { en: "Tools & Platforms", vi: "Công cụ & Nền tảng" },
                tags: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
            },
            {
                name: { en: "Databases", vi: "Cơ sở dữ liệu" },
                tags: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
            }
        ]
    },

    projects: {
        title: { en: "Projects", vi: "Dự án" },
        items: [
            {
                name: { en: "Project Management App", vi: "Ứng dụng Quản lý Dự án" },
                link: "#",
                description: {
                    en: "A full-stack project management application with real-time collaboration features, built with React, Node.js, and PostgreSQL.",
                    vi: "Ứng dụng quản lý dự án full-stack với tính năng cộng tác thời gian thực, được xây dựng bằng React, Node.js và PostgreSQL."
                }
            },
            {
                name: { en: "E-commerce Platform", vi: "Nền tảng Thương mại Điện tử" },
                link: "#",
                description: {
                    en: "A microservices-based e-commerce platform with payment integration, inventory management, and order tracking.",
                    vi: "Nền tảng thương mại điện tử dựa trên microservices với tích hợp thanh toán, quản lý kho và theo dõi đơn hàng."
                }
            }
        ]
    },

    certifications: {
        title: { en: "Certifications", vi: "Chứng chỉ" },
        items: [
            { en: "AWS Certified Solutions Architect – Associate", vi: "AWS Certified Solutions Architect – Associate" },
            { en: "Professional Scrum Master I (PSM I)", vi: "Professional Scrum Master I (PSM I)" }
        ]
    },

    languages: {
        title: { en: "Languages", vi: "Ngôn ngữ" },
        items: [
            { en: "Vietnamese – Native", vi: "Tiếng Việt – Bản ngữ" },
            { en: "English – Professional working proficiency", vi: "Tiếng Anh – Thành thạo trong công việc" }
        ]
    },

    footer: {
        text: { en: "Last updated: March 2026", vi: "Cập nhật lần cuối: Tháng 3, 2026" }
    }
};
