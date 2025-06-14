import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Future is Cloud: Why Your Business Needs to Migrate Now",
    paragraph:
      "Explore the compelling reasons businesses are moving to the cloud, from enhanced scalability and cost efficiency to robust security and disaster recovery.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Alex Johnson",
      image: "/images/blog/author-01.png",
      designation: "Cloud Solutions Architect",
    },
    tags: ["cloud migration", "business growth"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Understanding Cloud Security: Protecting Your Data in the Digital Age",
    paragraph:
      "Dive deep into essential cloud security practices and learn how our advanced protocols keep your valuable business data safe from cyber threats.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Sophia Lee",
      image: "/images/blog/author-02.png",
      designation: "Cybersecurity Specialist",
    },
    tags: ["security", "data protection"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Optimizing Cloud Costs: Strategies for Efficient Resource Management",
    paragraph:
      "Learn practical tips and strategies to effectively manage and optimize your cloud spending, ensuring maximum value without compromising performance.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Michael Chen",
      image: "/images/blog/author-03.png",
      designation: "Cloud Financial Analyst",
    },
    tags: ["cost optimization", "cloud management"],
    publishDate: "2025",
  },
];
export default blogData;