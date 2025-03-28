interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Spanish",
        level: "Native",
        description: "",
        show: true
    },
    {
        name: "English",
        level: "C1 Advanced",
        description: "According to the Common European Framework of Reference (CEFR)",
        show: true
    },
];

export default languages;