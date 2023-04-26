// to make safeUser type to remove hydration err
import { User } from "@prisma/client";

export type SafeUser =Omit<
User,
"createdAt" |"updatedAt" | "emailVerified"
>  &{
    createdAt: string;
    updatedAt: string;
    emailVerified: string|null;
};

