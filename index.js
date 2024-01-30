// Creates accessible and focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.5,
    center: { lat: 35, lng: -97 },
  });

  const tourStops = [
    ["March 22, 2018", { lat: 38.55892, lng: -122.5438017 }, "Castello di Amorosa", "Explored wineries with the boyfriend", "castello-di-amorosa.JPG"],
    ["April 16, 2019", { lat: 37.9194429, lng: -122.0464141 }, "Heather Farms Park", "Another day volunteering at the garden", "greenhouse-sales.JPG"],
    ["May 30, 2020", { lat: 37.3139673, lng: -119.5564278 }, "Bass Lake", "Went to Bass Lake with the Family", "bass-lake.jpeg"],
    ["Aug 6, 2020", { lat: 47.0721373, lng: -122.7730448 }, "Cirque Climbing Gym", "Went to our favorite gym with boyfriend's family.", "cirque-climbing-gym.JPG"],
    ["Sept 5, 2020", { lat: 46.9720177, lng: -124.1828669 }, "Ocean Shores", "Celebrated 3 year anniversary with boyfriend.", "ocean-shores-washington.jpeg"],
    ["Apr 23, 2021", { lat: 46.9092756, lng: -114.0421409 }, "Montana Road Trip", "Made friends with the lady at the front desk durring a road trip. She gave me some art.", "montana-art.jpeg"],
    ["Sept 4, 2021", { lat: 41.8967603, lng: -87.6045084 }, "Chicago", "Went on boat tour for 4 year anniversary with boyfriend.", "boat-tour.jpeg"],
    ["Aug 20, 2022", { lat: 39.0949226, lng: -84.5140239 }, "Smale Riverfront Park, Cincinnati", "Explored Cincinnati", "cincinnati-garden.jpeg"],
    ["July 24, 2023", { lat: 41.1242999, lng: -85.2180444 }, "Sweetwater", "Lunch with my favorite co-workers", "coworker-lunch.jpeg"],
    ["Sept 4, 2023", { lat: 39.6655422, lng: -105.2077865 }, "Red Rocks, Colorado", "Saw Gregory Alan Isakov at Red Rocks", "red-rocks.jpeg"],
    ["January 5, 2024", { lat: 34.1417285, lng: -119.1961006 }, "Surfside Seafood, Port Hueneme", "Had lunch with my Grandpa at one of his favorite restauraunts.", "lunch-with-grandpa.jpeg"],
  ];




  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([date, position, locName, caption, img], i) => {
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