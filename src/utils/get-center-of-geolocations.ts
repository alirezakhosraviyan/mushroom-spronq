
/*
* Finding centre of a list of coordinates
* more information at http://www.geomidpoint.com/calculation.html
* */

const getCenterOfGeolocation = (geoCoordinates: [number, number][]) : [number, number] => {

    let x: number  = 0;
    let y: number = 0;
    let z: number = 0;

    for (let geoCoordinate of geoCoordinates)
    {
        const latitude = geoCoordinate[0] * Math.PI / 180;
        const longitude = geoCoordinate[1] * Math.PI / 180;

        x += Math.cos(latitude) * Math.cos(longitude);
        y += Math.cos(latitude) * Math.sin(longitude);
        z += Math.sin(latitude);
    }

    const total = geoCoordinates.length;

    x = x / total;
    y = y / total;
    z = z / total;

    const centralLongitude = Math.atan2(y, x);
    let centralSquareRoot = Math.sqrt(x * x + y * y);
    const centralLatitude = Math.atan2(z, centralSquareRoot);

    return [centralLatitude * 180 / Math.PI, centralLongitude * 180 / Math.PI];
}

export default getCenterOfGeolocation;
