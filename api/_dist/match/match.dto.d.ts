export declare class Range {
    upperLimit: number;
    lowerLimit: number;
}
declare class UserObj {
    _id: string;
}
export declare class GenderObj {
    id: number;
    label: string;
}
export declare class MatchDto {
    latitude: number;
    longitude: number;
    radius_distance: Range;
    age: Range;
    gender: GenderObj[];
    exclude: UserObj[];
}
export {};
