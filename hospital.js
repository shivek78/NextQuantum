// Replace these with the actual coordinates and hospital names
const hospitals = [
    { name: 'Hospital 1', lat: 30.9000, lng: 75.8573 },
    { name: 'Hospital 2', lat: 30.9010, lng: 75.8580 },
    // Add more hospitals...
];

function initMap() {
    const ludhiana = { lat: 30.9010, lng: 75.8573 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: ludhiana,
    });

    hospitals.forEach(hospital => {
        const marker = new google.maps.Marker({
            position: { lat: hospital.lat, lng: hospital.lng },
            map: map,
            title: hospital.name,
        });

        const infowindow = new google.maps.InfoWindow({
            content: `<strong>${hospital.name}</strong>`,
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });
    });
}
