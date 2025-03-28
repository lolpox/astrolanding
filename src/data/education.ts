interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Systems Engineering",
        startDate: "2010-09",
        endDate: "2016-04",
        school: "Universidad de los Andes",
        location: "Venezuela",
        description: "Studying Systems Engineering at ULA gave me a strong foundation in programming, covering both fundamental and advanced concepts. I gained expertise in algorithms, data structures, and problem-solving—skills that continue to shape my approach to web development.",
        currentUni: false,
    },
    {
        title: "Bachelor of Science",
        startDate: "2005-10",
        endDate: "2010-08",
        school: "Unidad Educativa Nuestra Señora de Belén",
        location: "Venezuela",
        description: "",
        currentUni: false,
    },
];

export default education;