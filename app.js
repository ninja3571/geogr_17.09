var map = L.map('map').setView([20, 0], 2);
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

var cejl = L.polygon([
    [9.948276, 79.852891],
    [8.48362, 79.336653],
    [5.60408, 80.193388],
    [6.653217, 82.258339],
    [8.688547, 81.497989],
    [9.991578, 80.303226],
]).addTo(map);
cejl.bindPopup("CEJLON");

// ----------------------------------======================================---------------------------------------=================================---------------------
// wyżyny
var abis = L.circle([12.64173678800528, 41.424320227976544], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 200000
}).addTo(map);
abis.bindPopup("WYŻYNA ABISYŃSKA")

var gujan = L.circle([5.144744179874034, -60.76262912387533], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 200000
}).addTo(map);
gujan.bindPopup("WYŻYNA GUJAŃSKA")

var brazy = L.circle([-22.46626969095402, -45.0000429675521], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 200000
}).addTo(map);
brazy.bindPopup("WYŻYNA BRAZYLIJSKA")

var patag = L.circle([-41.72743852428435, -68.87739735768916], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(map);
patag.bindPopup("WYŻYNA PATAGONIA")

var srodSyb = L.circle([68.00012793906902, 95.00012882460817], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(map);
srodSyb.bindPopup("WYŻYNA ŚRODKOWOSYBERYJSKA")

var tybeta = L.circle([32.62234645038015, 86.76206202866628], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 600000
}).addTo(map);
tybeta.bindPopup("WYŻYNA TYBETAŃSKA")

// ----------------------------------======================================---------------------------------------=================================---------------------
// pustynie
var sahar = L.polygon([
    [29.412672, -10.275975],
    [21.648523, -18.931379],
    [15.991666, -17.261844],
    [15.864832, 0.356143],
    [13.995734, 12.306498],
    [14.212401, 31.689456],
    [21.978383, 36.917737],
    [31.161922, 32.348799],
    [32.913088, 22.076591],
    [34.739135, 6.962906],
],{
    fillColor:'orange',
    color:'orange',
}).addTo(map);
sahar.bindPopup("SAHARA");

var kalaha = L.polygon([
    [-15.173083716412842, 13.142098624474903],
    [-27.386588615839845, 18.679207680524502],
    [-30.519863415381703, 25.380867450743267],
    [-23.59942207513994, 25.205086210868682],
    [-21.815804645010996, 23.99659018673087],
    [-20.27785459571107, 17.756356171182905],
    [-16.315070768419556, 16.262215632248886],
    [-15.194289331003006, 13.691414999083001],
],{
    fillColor:'orange',
    color:'orange',
}).addTo(map);
kalaha.bindPopup("KALAHARI");

var s = L.polygon([
    [-13.229024986927937, 12.75818486477772],
    [-15.823742641663912, 11.659552115561526],
    [-17.836768, 11.803297],
    [-26.105912142683003, 14.823614433304162],
    [-31.568977339816055, 18.03162206101544],
    [-31.193808615224018, 18.339239230795968],
    [-26.145367587623536, 16.713262761956003],
    [-22.745574883559122, 15.746465942645758],
    [-17.507645635274077, 12.450567694997183],
],{
    fillColor:'orange',
    color:'orange',
}).addTo(map);
s.bindPopup("NAMIB");

var s = L.polygon([
    [47.75791227047836, 113.17080545354719],
    [45.52571893391379, 108.82021976665108],
    [45.37157028652147, 104.11807160000579],
    [44.90659655958652, 95.68057208602545],
    [42.13502889388147, 94.45010340690331],
    [38.48383619504362, 100.73428273241991],
    [37.792565193149876, 103.23916540063283],
    [40.621254487882624, 106.8453556700764],
    [41.3150855280974, 107.15029798784248],
    [40.88458448504137, 110.88564933517753],
    [42.20017203659914, 113.17080545354719],
    [42.492485735739024, 116.77432087097631],
    [47.34266733409558, 117.52139114044331],
],{
    fillColor:'orange',
    color:'orange',
}).addTo(map);
s.bindPopup("GOBI");

var ataka = L.polygon([
    [-25.278478694549563, -68.57124336108184],
    [-25.361148155428975, -69.01545400101043],
    [-25.803054894211193, -69.11344164217114],
    [-25.985231288809846, -70.60285378781404],
    [-28.9179959293468, -71.55006765236764],
    [-29.181847644916903, -71.52111913739506],
    [-29.351089436018782, -71.07767769395687],
    [-29.0446375193283, -70.58804443349386],
    [-29.37524394745851, -70.47718407263432],
    [-29.536127432758814, -70.18155644367552],
    [-29.49593048645857, -69.95983572195644],
    [-27.129435085862646, -68.78656356952622],
    [-27.047185414870864, -68.28769194565827],
    [-26.47802524440673, -68.58331957461705],
    [-26.16336345944876, -68.38007557970788],
],{
    fillColor:'orange',
    color:'orange',
}).addTo(map);
ataka.bindPopup("ATAKAMA");

var wiePustPiasz = L.polygon([
    [-20.48103, 119.79682],
    [-23.813554, 125.472449],
    [-22.031915, 126.878373],
    [-24.455514, 127.713141],
    [-26.030375, 131.518782],
    [-22.682487, 131.518782],
    [-22.682487, 133.732254],
    [-19.607535, 127.317725],
    [-18.402049, 123.671109],
],{
    fillColor:'orange',
    color:'orange',
}).addTo(map);
wiePustPiasz.bindPopup("WIELKA PUSTYNIA PIASZCZYSTA");

var gibso = L.polygon([
    [-22.616432, 128.478845],
    [-22.453996, 124.436813],
    [-26.059806, 123.556991],
    [-27.238638, 126.215395],
    [-26.474704, 127.446369],
],{
    fillColor:'orange',
    color:'orange',
}).addTo(map);
gibso.bindPopup("GIBSONA");

var wiePustWikt = L.polygon([
    [-32.189751, 134.081706],
    [-28.045955, 134.213528],
    [-26.600769, 122.832924],
    [-28.162302, 121.910173],
    [-30.120586, 124.326903],
    [-29.050067, 126.567871],
],{
    fillColor:'orange',
    color:'orange',
}).addTo(map);
wiePustWikt.bindPopup("WIELKA PUSTYNIA WIKTORII");

// ----------------------------------======================================---------------------------------------=================================---------------------
// niziny



var amazo = L.circle([-5.712662, -58.658615], {
    color: 'chartreuse',
    fillColor: 'chartreuse',
    fillOpacity: 0.5,
    radius: 700000
}).addTo(map);
amazo.bindPopup("NIZINA AMAZONKI")

var kotKon = L.circle([-3.829269173417824, 21.6284314370865], {
    color: 'chartreuse',
    fillColor: 'chartreuse',
    fillOpacity: 0.5,
    radius: 500000
}).addTo(map);
kotKon.bindPopup("KOTLINA KONGA")

var laPla = L.polygon([
    [-33.007796, -52.367074],
    [-30.009704, -57.287809],
    [-18.339155, -55.513891],
    [-16.324735, -65.355361],
    [-36.04863, -67.115006],
    [-41.658594, -63.600196],
],{
    fillColor: 'chartreuse',
    color: 'chartreuse',
}).addTo(map);
laPla.bindPopup("LA PLATY");

var zachSyb = L.circle([65.774256, 68.270786], {
    color: 'chartreuse',
    fillColor: 'chartreuse',
    fillOpacity: 0.5,
    radius: 700000
}).addTo(map);
zachSyb.bindPopup("NIZINA SACHODNIOSYBERYJSKA")

var nizChin = L.circle([35.946383, 118.756817], {
    color: 'chartreuse',
    fillColor: 'chartreuse',
    fillOpacity: 0.5,
    radius: 500000
}).addTo(map);
nizChin.bindPopup("NIZINA CHIŃSKA")

var mand = L.circle([47.002006, 125.208613], {
    color: 'chartreuse',
    fillColor: 'chartreuse',
    fillOpacity: 0.5,
    radius: 500000
}).addTo(map);
mand.bindPopup("MANDŻURIA")



function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);