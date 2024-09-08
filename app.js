var map = L.map('map').setView([51.505, -0.09], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// WYSPY
var grenland = L.polygon([
    [83.638453, -57.735096],
    [76.389211, -75.668043],
    [58.195506, -44.900731],
    [74.561185, -10.968781],
    [83.868057, -7.100891],
]).addTo(map);
grenland.bindPopup("GRENLANDIA");


var isl = L.polygon([
    [66.855889, -25.04103],
    [62.786834, -24.337777],
    [63.383863, -11.503412],
    [67.334992, -12.118759],
]).addTo(map);
isl.bindPopup("ISLANDIA");

var irl = L.polygon([
    [55.341028, -6.01881],
    [54.405479, -4.876781],
    [51.368255, -6.588649],
    [51.24457, -11.049909],
    [56.083238, -9.379683],
]).addTo(map);
irl.bindPopup("IRLANDIA");

var uk = L.polygon([
    [58.330448, -9.225771],
    [54.405479, -4.876781],
    [54.491328, -3.841491],
    [49.646279, -6.764386],
    [51.02129, 1.498835],
    [52.797537, 2.048251],
    [58.147911, -2.283227],
    [61.036277, -0.69883],
]).addTo(map);
uk.bindPopup("WIELKA BRYTANIA");

var nowaZ = L.polygon([
    [-33.525728, 172.049632],
    [-38.501343, 172.807726],
    [-46.217849, 164.984208],
    [-48.273661, 168.270147],
    [-38.074146, 180.349744],

]).addTo(map);
nowaZ.bindPopup("NOWA ZELANDIA");

var mad = L.polygon([
    [-11.463196, 49.265744],
    [-16.179275, 43.925533],
    [-25.250458, 42.464537],
    [-26.023384, 47.024677],
    [-15.327916, 50.760627],
]).addTo(map);
mad.bindPopup("MADAGASKAR");

var sum = L.polygon([
    [-5.419832, 106.403794],
    [-2.955183, 106.17291],
    [1.275124, 103.008341],
    [4.096548, 99.514128],
    [6.252917, 95.129881],
    [4.252917, 95.09881],
    [3.690802, 95.99794],
    [0.17608, 99.074605],
    [-2.758273, 100.888317],
    [-6.53721, 104.272854],
]).addTo(map);
sum.bindPopup("SUMATRA");

var jawa = L.polygon([
    [-5.419832, 106.403794],
    [-6.665874, 104.821509],
    [-7.756471, 106.963413],
    [-9.050228, 114.754741],
    [-8.19172, 114.436086],
    [-7.603812, 114.622884],
    [-7.156895, 112.667004],
    [-6.524746, 112.62252],

]).addTo(map);
jawa.bindPopup("JAWA");

var born = L.polygon([
    [7.405358, 117.050841],
    [2.259476, 109.46906],
    [0.611327, 108.458156],
    [-3.27786, 110.018465],
    [-4.506044, 116.127842],
    [0.78778, 119.270827],
    [5.328529, 119.468493],
    [7.383084, 117.32453],
]).addTo(map);
born.bindPopup("BORNEO");

var kiu = L.polygon([
    [34.265946, 130.475251],
    [33.887745, 129.640115],
    [32.711874, 128.598947],
    [32.582525, 128.601395],
    [32.485754, 129.793338],
    [32.600014, 130.451923],
    [32.358541, 130.465626],
    [32.195914, 130.097669],
    [31.214061, 130.127875],
    [30.848364, 130.629024],
    [31.337803, 131.496742],
    [32.864727, 132.166753],
    [33.700874, 131.870191],
    [33.983879, 130.969521],
]).addTo(map);
kiu.bindPopup("KIUSIU");

var siko = L.polygon([
    [34.423776, 134.137664],
    [34.38867, 133.85897],
    [34.259372, 133.545886],
    [34.03537, 133.55687],
    [33.947655, 133.138113],
    [34.13548, 132.885417],
    [33.338148, 132.005211],
    [32.741542, 132.612065],
    [32.70847, 133.026751],
    [33.51609, 133.68871],
    [33.231566, 134.184462],
    [33.832579, 134.763977],
    [34.234364, 134.652769],
]).addTo(map);
siko.bindPopup("SIKOKU");

var hons = L.polygon([
    [41.566049, 140.908094],
    [41.265186, 140.286137],
    [40.611322, 139.849532],
    [39.955486, 139.686341],
    [37.968638, 138.922968],
    [36.833561, 137.236957],
    [37.586384, 137.396222],
    [37.338828, 136.566584],
    [35.798485, 135.275989],
    [35.633387, 132.92546],
    [34.386575, 130.80559],
    [33.945039, 130.92603],
    [34.036173, 131.045479],
    [33.91426, 131.184149],
    [33.880462, 132.03387],
    [33.966998, 132.212443],
    [34.351271, 132.40054],
    [34.215043, 132.537838],
    [34.197946, 132.684809],
    [34.348899, 133.191561],
    [34.459938, 133.592583],
    [34.423679, 133.801275],
    [34.445146, 133.934575],
    [34.762858, 134.527808],
    [34.615995, 135.033062],
    [33.873639, 135.042786],
    [33.551471, 135.383388],
    [33.443772, 135.78155],
    [33.988778, 136.278718],
    [34.266286, 136.900675],
    [34.591145, 138.241088],
    [34.596751, 139.014328],
    [34.880861, 139.839894],
    [34.89662, 140.238264],
    [35.721804, 140.913767],
    [39.596157, 142.219366],
    [41.463116, 141.509878],
]).addTo(map);
hons.bindPopup("HONSIU");

var hokk = L.polygon([
    [45.597488, 141.792671],
    [45.566717, 140.804009],
    [41.307474, 139.244119],
    [41.309153, 140.242129],
    [42.064308, 142.625904],
    [41.75347, 143.295998],
    [43.124259, 145.987357],
    [43.53112, 145.701869],
    [43.690528, 145.296567],
    [44.355083, 145.41613],
]).addTo(map);
hokk.bindPopup("HOKKAIDO");

var kuba = L.polygon([
    [23.761127, -82.523815],
    [21.876831, -85.204189],
    [21.202059, -82.91928],
    [19.615688, -77.822175],
    [19.94666, -73.911466],
    [20.272242, -73.946888],
    [22.592625, -78.143344],
]).addTo(map);
kuba.bindPopup("KUBA");

var haiti = L.polygon([
    [20.117728, -71.794107],
    [20.086762, -73.474833],
    [18.437019, -74.584332],
    [17.83118, -73.903254],
    [17.83118, -71.816077],
]).addTo(map);
haiti.bindPopup("HAITI");

var kors = L.polygon([
    [43.092116, 9.462422],
    [42.584353, 8.538537],
    [42.112247, 8.425386],
    [41.517362, 8.659373],
    [41.317362, 9.263556],
    [42.316718, 9.757887],
]).addTo(map);
kors.bindPopup("KORSYKA");

var kret = L.polygon([
    [35.826194, 23.544793],
    [35.177461, 23.49536],
    [34.844369, 24.73668],
    [34.984073, 26.313048],
    [35.379352, 26.400929],
]).addTo(map);
kret.bindPopup("KRETA");

var cypr = L.polygon([
    [35.817233, 34.756008],
    [35.334483, 32.163516],
    [34.464576, 32.443637],
    [34.482699, 33.014864],
    [34.916455, 34.124363],
]).addTo(map);
cypr.bindPopup("CYPR");

var tasma = L.polygon([
    [-39.287265, 143.417868],
    [-43.982822, 145.526755],
    [-44.075761, 147.242444],
    [-43.58606, 148.90976],
    [-39.287265, 148.404506],
    [-40.635151, 146.339555],
]).addTo(map);
tasma.bindPopup("TASMANIA");

var ziemO = L.polygon([
    [-52.42291, -69.514885],
    [-52.794071, -70.572568],
    [-54.218962, -70.045347],
    [-54.398515, -72.1762],
    [-54.821586, -71.844643],
    [-55.271062, -70.520318],
    [-54.871058, -68.262623],
    [-55.016218, -65.236151],
    [-54.614046, -65.065902],
    [-52.462944, -68.729131],
]).addTo(map);
ziemO.bindPopup("ZIEMIA OGNISTA");

var hawaje = L.polygon([
    [30.215927, -180.318922],
    [24.269183, -174.52258],
    [18.369118, -155.498565],
    [20.071169, -153.872965],
    [28.915775, -174.870966],
]).addTo(map);
hawaje.bindPopup("HAWAJE");

var newG = L.polygon([
    [0.699824, 130.045073],
    [-1.551072, 130.750571],
    [-4.480085, 132.771738],
    [-5.974482, 137.864793],
    [-8.764774, 137.205766],
    [-9.459348, 143.66423],
    [-8.025367, 144.586868],
    [-10.368835, 147.047235],
    [-11.232569, 150.825656],
    [-9.546175, 151.459637],
    [-5.990698, 147.880395],
    [-3.297731, 144.715324],
    [-0.000816, 135.775493],
]).addTo(map);
newG.bindPopup("NOWA GWINEA");

var tajw = L.polygon([
    [25.828014, 121.960832],
    [23.460547, 119.138],
    [21.551645, 120.906389],
    [25.033907, 122.136572],
]).addTo(map);
tajw.bindPopup("TAJWAN");

var galap = L.polygon([
    [0.437218, -91.949633],
    [-1.189433, -91.620119],
    [-1.606984, -89.566152],
    [-0.705875, -89.104833],
    [1.019717, -90.247146],
]).addTo(map);
galap.bindPopup("GALAPAGOS");

var celeb = L.polygon([
    [1.51026, 120.393345],
    [-1.067274, 119.072245],
    [-3.587271, 118.592005],
    [-5.690604, 119.251032],
    [-5.734352, 120.569086],
    [-4.967199, 122.020918],
    [-4.353713, 122.992983],
    [-3.075922, 122.619534],
    [-2.038275, 121.598043],
    [-1.060401, 123.190691],
    [-0.510881, 123.53668],
    [-0.813126, 121.449762],
    [0.324464, 120.867621],
    [0.302481, 124.547188],
    [1.608424, 125.431603],
    [1.822662, 125.113073],
    [1.421634, 120.840382],
]).addTo(map);
celeb.bindPopup("CELEBES");

var filip = L.polygon([
    [21.369802, 121.974104],
    [16.231837, 119.272093],
    [12.077894, 119.249474],
    [7.681083, 116.877628],
    [9.44179, 122.215747],
    [6.524947, 121.600655],
    [4.972053, 125.357109],
    [7.179722, 127.070579],
    [12.076319, 125.9722],
]).addTo(map);
filip.bindPopup("FILIPINY");

var sycyl = L.polygon([
    [38.365697, 15.580234],
    [38.12399, 12.2851],
    [37.559791, 12.351002],
    [36.418503, 15.107932],
    [37.000067, 15.547283],
]).addTo(map);
sycyl.bindPopup("SYCYLIA");

var sard = L.polygon([
    [41.351181, 9.472913],
    [41.119742, 8.110924],
    [38.811891, 8.165843],
    [38.965888, 9.681605],
    [40.529211, 10.022102],
]).addTo(map);
sard.bindPopup("SARDYNIA");

var cejl = L.circle([7.500127374768941, 80.75017160537595], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100000
}).addTo(map);
cejl.bindPopup("CEJLON")

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);