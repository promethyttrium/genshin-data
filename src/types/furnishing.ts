// This file was auto-generated by quicktype.

export interface Furnishing {
    _id:         number;
    id:          string;
    rarity:      number;
    name:        string;
    description: string;
    category:    Category[];
    load?:       number;
    energy?:     number;
    exp?:        number;
    recipe?:     Recipe[];
}

export interface Category {
    id:       number;
    category: string;
    type?:    string;
}

export interface Recipe {
    _id:    number;
    id:     string;
    name:   string;
    amount: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toFurnishing(json: string): Furnishing[] {
        return JSON.parse(json);
    }

    public static furnishingToJson(value: Furnishing[]): string {
        return JSON.stringify(value);
    }
}
