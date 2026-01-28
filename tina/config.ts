import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,
    clientId: process.env.TINA_CLIENT_ID || "",
    token: process.env.TINA_TOKEN || "",
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "uploads",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "global",
                label: "Global Settings",
                path: "content/global",
                format: "json",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                fields: [
                    { type: "string", name: "phone", label: "Phone Number" },
                    { type: "string", name: "whatsapp", label: "WhatsApp Number" },
                    { type: "string", name: "address", label: "Address" },
                    { type: "image", name: "logo", label: "Logo" },
                    {
                        type: "object",
                        name: "socials",
                        label: "Social Links",
                        fields: [
                            { type: "string", name: "instagram", label: "Instagram" },
                            { type: "string", name: "facebook", label: "Facebook" },
                        ],
                    },
                ],
            },
            {
                name: "page",
                label: "Pages",
                path: "content/pages",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
            {
                name: "service",
                label: "Services",
                path: "content/services",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    { type: "string", name: "icon", label: "Icon Name (e.g. 'tooth', 'implant')" },
                    { type: "string", name: "shortDesc", label: "Short Description" },
                    { type: "rich-text", name: "longDesc", label: "Long Description" },
                    { type: "string", name: "priceRange", label: "Price Range" },
                ],
            },
            {
                name: "doctor",
                label: "Doctors",
                path: "content/doctors",
                format: "md",
                fields: [
                    { type: "string", name: "name", label: "Name", isTitle: true, required: true },
                    { type: "string", name: "credentials", label: "Credentials" },
                    { type: "rich-text", name: "bio", label: "Bio" },
                    { type: "image", name: "photo", label: "Photo" },
                ],
            },
            {
                name: "testimonial",
                label: "Testimonials",
                path: "content/testimonials",
                format: "md",
                fields: [
                    { type: "string", name: "patientName", label: "Patient Name", isTitle: true, required: true },
                    { type: "string", name: "review", label: "Review", ui: { component: "textarea" } },
                    { type: "string", name: "treatmentType", label: "Treatment Type" },
                ],
            },
            {
                name: "gallery",
                label: "Gallery",
                path: "content/gallery",
                format: "md",
                fields: [
                    { type: "string", name: "procedureName", label: "Procedure Name", isTitle: true, required: true },
                    { type: "image", name: "beforeImage", label: "Before Image" },
                    { type: "image", name: "afterImage", label: "After Image" },
                ],
            },
        ],
    },
});
