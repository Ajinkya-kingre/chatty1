const { z } = require("zod");

// creating object schema //
const registrationSchema = z.object({
    username: 
    z.string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
    
    email: 
    z.string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim()
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
    
    password: 
    z.string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(700, { message: "Password must not be more than 700 characters" }),
   
});



const loginSchema = z.object({
    email: z.string({ required_error: "Email is required" })
        .email({ message: "Invalid email address" })
        .trim()
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z.string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(700, { message: "Password must not be more than 700 characters" })
});


module.exports ={ registrationSchema,loginSchema}