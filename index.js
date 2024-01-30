// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.5,
    center: { lat: 35, lng: -97 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 46.9720177, lng: -124.1828669 }, "Ocean Shores", "Sept 5, 2020", "Celebrated 3 year anniversary with boyfriend.", "ocean-shores-washington.jpeg"],
    [{ lat: 47.0721373, lng: -122.7730448 }, "Cirque Climbing Gym", "Aug16, 2020", "Went to our favorite gym with boyfriend's family.", "cirque-climbing-gym.JPG"],
    [{ lat: 41.1242999, lng: -85.2180444 }, "Sweetwater", "July 24, 2023", "Lunch with my favorite co-workers", "coworker-lunch.jpeg"],
    [{ lat: 39.0949226, lng: -84.5140239 }, "Smale Riverfront Park, Cincinnati", "Aug 20, 2022", "Explored Cincinnati", "cincinnati-garden.jpeg"],
    [{ lat: 41.8967603, lng: -87.6045084 }, "Chicago", "Sept 4, 2021", "Went on boat tour for 4 year anniversary with boyfriend.", "boat-tour.jpeg"],
    [{ lat: 39.6655422, lng: -105.2077865 }, "Red Rocks, Colorado", "Sept 4, 2023", "Saw Gregory Alan Isakov at Red Rocks", "red-rocks.jpeg"],
    [{ lat: 34.1417285, lng: -119.1961006 }, "Surfside Seafood, Port Hueneme", "January 5, 2024", "Had lunch with my Grandpa at one of his favorite restauraunts.", "lunch-with-grandpa.jpeg"],
  ];

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, locName, date, caption, img], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `<strong>${locName}<br>${date}</strong><br>${caption}<br><img src="./place-images/${img}" />`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;