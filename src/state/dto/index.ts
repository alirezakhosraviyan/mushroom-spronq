
/*
* To union all color, spot and mushroom interfaces I made a DTO (Data Transfer Object)
* Can be useful when working with APIs to ensure our data is in correct format and prevent
* future exceptions in data
* */

export enum Color {
    RED,
    GREEN,
    YEllOW,
    BLUE
}

export enum Spots {
    none,
    hidden,
    dotted,
    dashed,
    solid,
    double,
    groove,
    ridge,
    inset,
    outset,
}

export interface Mushroom {
    name: string;
    spots: Spots;
    color: Color;
    latlng: [number, number];
}

