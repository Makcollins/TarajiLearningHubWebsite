import { Cloudinary } from "@cloudinary/url-gen/index";
import { BookOpen, Globe, Brain, Shield, Users, Heart, GraduationCap } from "lucide-react";
export const cld = new Cloudinary({
    cloud: {
      cloudName: 'xnlxwmb1'
    }
  });
export const teamMembers = [
  {
    name: "Joseph Onyonka",
    role: "C.E.O. / Mental Health Educator",
    image: "joseph",
    alt: "Profile image of Joseph Onyonka, a Mental Health Educator at Taraji"
  },
  {
    name: "Cliff Omayio",
    role: "Education Specialist",
    image: "cliff",
    alt: "Profile image of Cliff Omayio, an Education specialist at Taraji"
  },
  {
    name: "Lanith Juma",
    role: "IT Specialist",
    image: "jumataraji",
    alt: "Profile image of Lanith Juma, an IT specialist at Taraji"
  },
  {
    name: "Bridget Kamau",
    role: "Education Specialist",
    image: "bridget",
    alt: "Profile image of Bridget Kamau, an Education specialist at Taraji"
  },
];
export const partners = [
  { name: "County government of Kisii", description: "County government of Kisii", logo: "kisii-county", },
  { name: "County government of Nyamira", description: "County government of Nyamira", logo: "nyamira-county-logo" },
  { name: "European Union", description: "European Union", logo: "european-union" },
  { name: "International Solidarity Foundation", description: "International Solidarity Foundation", logo: "international-solidarity-foundation-logo" },
  { name: "Kilimo Bora", description: "Kilimo Bora", logo: "kilimo-bora" },
  { name: "Victory Child Empowerment", description: "Victory Child Empowerment", logo: "vce" },
];
export const services = [
  {
    icon: Brain,
    title: "Mental Health & Psychosocial Support (MHPSS)",
    description: ` We provide a safe harbor for emotional recovery through diverse therapeutic paths. 
      From Art & Play Therapy and professional Individual and Group Counseling 
      to our innovative Sustainable Textile Initiative,
      we integrate creative healing to help individuals process trauma and build coping skills..`,
    features: []
  },
  {
    icon: BookOpen,
    title: "Trauma-Informed Education",
    description: `Sustainable healing happens within a supported community. 
      We empower the foundation of the home through Trauma-Informed Parenting programs and 
      dedicated support for caregivers, children in CCIs, and reintegrated families, 
      ensuring a stable environment for growth`,
    features: []
  },
  {
    icon: Shield,
    title: "Child Protection & Safeguarding",
    description: `We are committed to the safety and rights of every child. 
      Our experts work to strengthen protection systems and facilitate safe reintegration, 
      while simultaneously building robust mental health referral networks to ensure seamless access to care.`,
    features: []
  },
  {
    icon: BookOpen,
    title: "Capacity Strengthening",
    description: `Empowering the community to lead the way. 
      We transform child welfare by providing essential trauma-informed training to caregivers, social workers, 
      and community leaders. Our mission is to close the knowledge gap, 
      ensuring professional-grade support is available at every level of a child's life.`,
    features: []
  },
  {
    icon: GraduationCap,
    title: "Knowledge Development",
    description: `To ensure our impact is lasting and scalable, we bridge practice with theory. 
      We conduct in-depth MHPSS research and situational analysis and 
      develop specialized manuals and handbooks that serve as blueprints 
      for high-quality, scalable interventions across the sector`,
    features: []
  }];
export const achievements = [
  { icon: Users, value: 2150, label: "Lives Impacted" },
  { icon: BookOpen, value: 50, label: "Workshops Conducted" },
  { icon: Heart, value: 20, label: "Counseling Sessions" },
  { icon: Globe, value: 3, label: "Counties reached" }
];

//region infographics 
// Gender-Based Violence Statistics
export const gbvData = [
  { category: "Physical Violence", percentage: 35 },
  { category: "Emotional Abuse", percentage: 43 },
  { category: "Sexual Violence", percentage: 27 },
  { category: "Economic Abuse", percentage: 22 },
];

// Mental Health Statistics
export const mentalHealthData = [
  { age: "18-25", affected: 28, seekHelp: 15 },
  { age: "26-35", affected: 32, seekHelp: 18 },
  { age: "36-45", affected: 25, seekHelp: 12 },
  { age: "46-55", affected: 20, seekHelp: 10 },
  { age: "56+", affected: 15, seekHelp: 8 },
];

//Gallery
export const galleryItems = [
    {
      image: "ay2",
      title: "Youth Empowerment Workshop",
      date: "August 2026",
      location: "Kisii town"
    },
    {
      image: "gbvart2",
      title: "Community Empowerment Workshop",
      date: "February 2026",
      location: "Local Community"
    },
    {
      image: "kccYouth1",
      title: "Play Therapy",
      date: "July 2025",
      location: "Kisii"
    },
    {
      image: "lsa",
      title: "Child Counselling",
      date: "October 2025",
      location: "Little Sunshine Academy"
    },
    {
      image: "tarajipaints",
      title: "Art Therapy",
      date: "October 2025",
      location: "Little Sunshine Academy"
    },
    {
      image: "tarajiteam",
      title: "Team Building Workshop",
      date: "June 2025",
      location: "Nyamira"
    },
    {
      image: "taraji2",
      title: "Child Counselling",
      date: "October 2025",
      location: "Little Sunshine Academy"
    },
    {
      image: "tl2",
      title: "Visit to Prison",
      date: "August 2024",
      location: "Kisii women prison"
    },
    {
      image: "group",
      title: "Team Building",
      date: "January 2026",
      location: "Kisii"
    }
  ];

// Support Services Impact
export const impactData = [
  { name: "Reported progress", value: 80 },
  { name: "Not reported", value: 20 },
];

export const blogs = [
  {
    id: 1,
    title: "Taraji Hub Blog 1",
    slug: 'taraji-hub-blog-1',
    description: "Taraji learning hub is an NGO focused on...",
    coverImg: "/gallery/tarajipaints.JPG",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus iusto repudiandae veniam amet eveniet earum sit, impedit atque, quis mollitia in cumque placeat cum quaerat, eos nisi minus! Incidunt repudiandae sint harum nam distinctio deserunt, quod dolorum ducimus consectetur earum omnis at laborum suscipit dolore id maxime dicta totam neque illum provident ut sapiente non numquam! Eveniet suscipit quas beatae enim consectetur voluptas eaque nesciunt a iste corrupti delectus quae nostrum, expedita minima quibusdam dolore laboriosam, doloribus libero. Laborum cumque vero, iure officia, incidunt obcaecati quas eveniet neque deleniti repellendus maxime numquam accusamus rem a aperiam sequi quis id ratione magni consectetur praesentium! Nobis aperiam suscipit laboriosam assumenda necessitatibus animi rem maxime? Cum adipisci asperiores quidem tempore consequuntur autem cumque nostrum error eligendi et, inventore consectetur numquam nobis commodi, quos eius deserunt est temporibus eos vitae. Quia vero consequatur omnis aspernatur asperiores consectetur alias eligendi laborum, nemo non. Corrupti corporis non fugiat dolorem nemo eaque, ipsa porro aliquam expedita consequuntur molestias nam consequatur minus soluta nihil voluptates repudiandae dolor culpa sint? Fugit sit voluptatibus quia eaque saepe ipsam nostrum! Est quam obcaecati accusamus, et voluptate rem reprehenderit, inventore architecto pariatur totam exercitationem perferendis minus libero mollitia sapiente. Quasi, reprehenderit.",
    authorName: "Collins Makui",
    author_profile: "",
    authorRole: "Software Engineer"
  },
  {
    id: 2,
    title: "Taraji Hub Blog 2",
    slug: 'taraji-hub-blog-2',
    description: "Taraji learning hub is an NGO focused on....",
    coverImg: "/gallery/tarajipaints.JPG",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus iusto repudiandae veniam amet eveniet earum sit, impedit atque, quis mollitia in cumque placeat cum quaerat, eos nisi minus! Incidunt repudiandae sint harum nam distinctio deserunt, quod dolorum ducimus consectetur earum omnis at laborum suscipit dolore id maxime dicta totam neque illum provident ut sapiente non numquam! Eveniet suscipit quas beatae enim consectetur voluptas eaque nesciunt a iste corrupti delectus quae nostrum, expedita minima quibusdam dolore laboriosam, doloribus libero. Laborum cumque vero, iure officia, incidunt obcaecati quas eveniet neque deleniti repellendus maxime numquam accusamus rem a aperiam sequi quis id ratione magni consectetur praesentium! Nobis aperiam suscipit laboriosam assumenda necessitatibus animi rem maxime? Cum adipisci asperiores quidem tempore consequuntur autem cumque nostrum error eligendi et, inventore consectetur numquam nobis commodi, quos eius deserunt est temporibus eos vitae. Quia vero consequatur omnis aspernatur asperiores consectetur alias eligendi laborum, nemo non. Corrupti corporis non fugiat dolorem nemo eaque, ipsa porro aliquam expedita consequuntur molestias nam consequatur minus soluta nihil voluptates repudiandae dolor culpa sint? Fugit sit voluptatibus quia eaque saepe ipsam nostrum! Est quam obcaecati accusamus, et voluptate rem reprehenderit, inventore architecto pariatur totam exercitationem perferendis minus libero mollitia sapiente. Quasi, reprehenderit.",
    authorName: "Collins Makui",
    author_profile: "/gallery/ceo.JPG",
    authorRole: "Software Engineer"
  },
  {
    id: 3,
    title: "Taraji Hub Blog 3",
    slug: 'taraji-hub-blog-3',
    description: "Taraji learning hub is an NGO focused on...",
    coverImg: "/gallery/tarajipaints.JPG",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus iusto repudiandae veniam amet eveniet earum sit, impedit atque, quis mollitia in cumque placeat cum quaerat, eos nisi minus! Incidunt repudiandae sint harum nam distinctio deserunt, quod dolorum ducimus consectetur earum omnis at laborum suscipit dolore id maxime dicta totam neque illum provident ut sapiente non numquam! Eveniet suscipit quas beatae enim consectetur voluptas eaque nesciunt a iste corrupti delectus quae nostrum, expedita minima quibusdam dolore laboriosam, doloribus libero. Laborum cumque vero, iure officia, incidunt obcaecati quas eveniet neque deleniti repellendus maxime numquam accusamus rem a aperiam sequi quis id ratione magni consectetur praesentium! Nobis aperiam suscipit laboriosam assumenda necessitatibus animi rem maxime? Cum adipisci asperiores quidem tempore consequuntur autem cumque nostrum error eligendi et, inventore consectetur numquam nobis commodi, quos eius deserunt est temporibus eos vitae. Quia vero consequatur omnis aspernatur asperiores consectetur alias eligendi laborum, nemo non. Corrupti corporis non fugiat dolorem nemo eaque, ipsa porro aliquam expedita consequuntur molestias nam consequatur minus soluta nihil voluptates repudiandae dolor culpa sint? Fugit sit voluptatibus quia eaque saepe ipsam nostrum! Est quam obcaecati accusamus, et voluptate rem reprehenderit, inventore architecto pariatur totam exercitationem perferendis minus libero mollitia sapiente. Quasi, reprehenderit.",
    authorName: "Collins Makui",
    author_profile: "/gallery/ceo.JPG",
    authorRole: "Software Engineer"
  },
  {
    id: 4,
    title: "Taraji Hub Blog 4",
    slug: 'taraji-hub-blog-4',
    description: "Taraji learning hub is an NGO focused on...",
    coverImg: "/gallery/tarajipaints.JPG",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus iusto repudiandae veniam amet eveniet earum sit, impedit atque, quis mollitia in cumque placeat cum quaerat, eos nisi minus! Incidunt repudiandae sint harum nam distinctio deserunt, quod dolorum ducimus consectetur earum omnis at laborum suscipit dolore id maxime dicta totam neque illum provident ut sapiente non numquam! Eveniet suscipit quas beatae enim consectetur voluptas eaque nesciunt a iste corrupti delectus quae nostrum, expedita minima quibusdam dolore laboriosam, doloribus libero. Laborum cumque vero, iure officia, incidunt obcaecati quas eveniet neque deleniti repellendus maxime numquam accusamus rem a aperiam sequi quis id ratione magni consectetur praesentium! Nobis aperiam suscipit laboriosam assumenda necessitatibus animi rem maxime? Cum adipisci asperiores quidem tempore consequuntur autem cumque nostrum error eligendi et, inventore consectetur numquam nobis commodi, quos eius deserunt est temporibus eos vitae. Quia vero consequatur omnis aspernatur asperiores consectetur alias eligendi laborum, nemo non. Corrupti corporis non fugiat dolorem nemo eaque, ipsa porro aliquam expedita consequuntur molestias nam consequatur minus soluta nihil voluptates repudiandae dolor culpa sint? Fugit sit voluptatibus quia eaque saepe ipsam nostrum! Est quam obcaecati accusamus, et voluptate rem reprehenderit, inventore architecto pariatur totam exercitationem perferendis minus libero mollitia sapiente. Quasi, reprehenderit.",
    authorName: "Collins Makui",
    author_profile: "/gallery/ceo.JPG",
    authorRole: "Software Engineer"
  },
  {
    id: 5,
    title: "Taraji Hub Blog 5",
    slug: 'taraji-hub-blog-5',
    description: "Taraji learning hub is an NGO focused on...",
    coverImg: "/gallery/tarajipaints.JPG",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus iusto repudiandae veniam amet eveniet earum sit, impedit atque, quis mollitia in cumque placeat cum quaerat, eos nisi minus! Incidunt repudiandae sint harum nam distinctio deserunt, quod dolorum ducimus consectetur earum omnis at laborum suscipit dolore id maxime dicta totam neque illum provident ut sapiente non numquam! Eveniet suscipit quas beatae enim consectetur voluptas eaque nesciunt a iste corrupti delectus quae nostrum, expedita minima quibusdam dolore laboriosam, doloribus libero. Laborum cumque vero, iure officia, incidunt obcaecati quas eveniet neque deleniti repellendus maxime numquam accusamus rem a aperiam sequi quis id ratione magni consectetur praesentium! Nobis aperiam suscipit laboriosam assumenda necessitatibus animi rem maxime? Cum adipisci asperiores quidem tempore consequuntur autem cumque nostrum error eligendi et, inventore consectetur numquam nobis commodi, quos eius deserunt est temporibus eos vitae. Quia vero consequatur omnis aspernatur asperiores consectetur alias eligendi laborum, nemo non. Corrupti corporis non fugiat dolorem nemo eaque, ipsa porro aliquam expedita consequuntur molestias nam consequatur minus soluta nihil voluptates repudiandae dolor culpa sint? Fugit sit voluptatibus quia eaque saepe ipsam nostrum! Est quam obcaecati accusamus, et voluptate rem reprehenderit, inventore architecto pariatur totam exercitationem perferendis minus libero mollitia sapiente. Quasi, reprehenderit.",
    authorName: "Collins Makui",
    author_profile: "/gallery/ceo.JPG",
    authorRole: "Software Engineer"
  },
  {
    id: 6,
    title: "Taraji Hub Blog 6",
    slug: 'taraji-hub-blog-6',
    description: "Taraji learning hub is an NGO focused on...",
    coverImg: "/gallery/tarajipaints.JPG",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus iusto repudiandae veniam amet eveniet earum sit, impedit atque, quis mollitia in cumque placeat cum quaerat, eos nisi minus! Incidunt repudiandae sint harum nam distinctio deserunt, quod dolorum ducimus consectetur earum omnis at laborum suscipit dolore id maxime dicta totam neque illum provident ut sapiente non numquam! Eveniet suscipit quas beatae enim consectetur voluptas eaque nesciunt a iste corrupti delectus quae nostrum, expedita minima quibusdam dolore laboriosam, doloribus libero. Laborum cumque vero, iure officia, incidunt obcaecati quas eveniet neque deleniti repellendus maxime numquam accusamus rem a aperiam sequi quis id ratione magni consectetur praesentium! Nobis aperiam suscipit laboriosam assumenda necessitatibus animi rem maxime? Cum adipisci asperiores quidem tempore consequuntur autem cumque nostrum error eligendi et, inventore consectetur numquam nobis commodi, quos eius deserunt est temporibus eos vitae. Quia vero consequatur omnis aspernatur asperiores consectetur alias eligendi laborum, nemo non. Corrupti corporis non fugiat dolorem nemo eaque, ipsa porro aliquam expedita consequuntur molestias nam consequatur minus soluta nihil voluptates repudiandae dolor culpa sint? Fugit sit voluptatibus quia eaque saepe ipsam nostrum! Est quam obcaecati accusamus, et voluptate rem reprehenderit, inventore architecto pariatur totam exercitationem perferendis minus libero mollitia sapiente. Quasi, reprehenderit.",
    authorName: "Collins Makui",
    author_profile: "/gallery/ceo.JPG",
    authorRole: "Software Engineer"
  },
]