// This file was auto-generated by quicktype.

export interface LocalMaterial {
    _id:         number;
    id:          string;
    name:        string;
    description: string;
    source:      string[];
    location:    string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toLocalMaterial(json: string): LocalMaterial[] {
        return JSON.parse(json);
    }

    public static localMaterialToJson(value: LocalMaterial[]): string {
        return JSON.stringify(value);
    }
}
