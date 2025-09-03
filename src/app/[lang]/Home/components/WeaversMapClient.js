'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom Icon
const weaverIcon = new L.Icon({
  iconUrl: '/assets/weaver-pin.png',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

// ✅ Component to add the Bhuvan WMS layer
function BhuvanWMSLayer() {
  const map = useMap();
  useEffect(() => {
    const wmsLayer = L.tileLayer.wms(
      'https://bhuvan-vec1.nrsc.gov.in/bhuvan/gwc/service/wms',
      {
        layers: 'basemap:INDIA_DIST',
        format: 'image/png',
        transparent: true,
        attribution: 'Bhuvan (ISRO)',
      }
    );
    wmsLayer.addTo(map);
    return () => map.removeLayer(wmsLayer);
  }, [map]);
  return null;
}

function IndiaBorderLayer() {
  const [indiaBorder, setIndiaBorder] = useState(null);

useEffect(() => {
  fetch(
      'https://raw.githubusercontent.com/datameet/maps/master/Country/india-soi.geojson'
    )
    .then((res) => res.json())
    .then((data) => setIndiaBorder(data))
    .catch((err) => console.error('Error loading India border:', err));
}, []);

  if (!indiaBorder) return null;

  return (
  <GeoJSON
  data={indiaBorder}
  style={{
    color: '#000',
    weight: 0.6,
    fillColor: 'transparent',
    fillOpacity: 0,
    stroke: true
  }}
/>
  );
}

export default function WeaversMapClient({
  selectedRegion,
  data,
  selectedDataType,
  handloomData,
  stateMapData,
  lang,
  isMobile,
}) {
  const mapRef = useRef(null);

  // console.log("selected")

  useEffect(() => {
    const container = document.getElementById('leaflet-map');
    if (container) container._leaflet_id = null;
  }, []);

  const getDataTypeDisplayName = () => {
    const dataTypeNames = {
      workers: { en: 'Handloom Workers', hi: 'हथकरघा श्रमिक' },
      weavers: { en: 'Handloom Weavers', hi: 'हथकरघा बुनकर' },
      households: { en: 'Weaver Households', hi: 'बुनकर परिवार' },
      householdsWithLooms: { en: 'Households with Looms', hi: 'करघे वाले परिवार' },
    };
    return dataTypeNames[selectedDataType]?.[lang] || dataTypeNames[selectedDataType]?.en;
  };

  const getStateData = (stateName) => {
    const stateKey = stateName.toUpperCase();
    const stateData = handloomData[stateKey];
    if (!stateData) return 0;
    return stateData[selectedDataType] || 0;
  };

  const getMarkers = () => {
    if (selectedRegion === 'All India') {
      return stateMapData.data.flatMap((state) =>
        state.regionalOffices.map((office) => ({
          id: office._id,
          name: lang === 'hi' ? office.HiName : office.EnName,
          address: lang === 'hi' ? office.HiAddress : office.EnAddress,
          lat: office.location.coordinates[1],
          lng: office.location.coordinates[0],
          region: lang === 'hi' ? state.HiName : state.EnName,
          regionEn: state.EnName,
          phone: office.contact.phone,
          email: office.contact.email,
          dataValue: getStateData(state.EnName),
        }))
      );
    } else {
      const selectedState = stateMapData.data.find(
        (state) => state.EnName === selectedRegion
      );
      if (!selectedState) return [];
      return selectedState.regionalOffices.map((office) => ({
        id: office._id,
        name: lang === 'hi' ? office.HiName : office.EnName,
        address: lang === 'hi' ? office.HiAddress : office.EnAddress,
        lat: office.location.coordinates[1],
        lng: office.location.coordinates[0],
        region: lang === 'hi' ? selectedState.HiName : selectedState.EnName,
        regionEn: selectedState.EnName,
        phone: office.contact.phone,
        email: office.contact.email,
        dataValue: getStateData(selectedState.EnName),
      }));
    }
  };

  // const markers = getMarkers();

  // const popupContent = {
  //   phone: { en: 'Phone:', hi: 'फोन:' },
  //   email: { en: 'Email:', hi: 'ईमेल:' },
  //   total: { en: 'Total', hi: 'कुल' },
  // };


  return (
    <div
      id="leaflet-map"
      className="relative z-0 w-full h-full rounded-lg overflow-hidden shadow-sm"
    >
      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={selectedRegion === 'All India' ? (isMobile ? 3.8 : 4.4) : isMobile ? 5 : 6}
        scrollWheelZoom={false}
        ref={mapRef}
        className="z-0 h-full w-full"
        crs={L.CRS.EPSG3857}
      >
        {/* Base Map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* ✅ Add Bhuvan WMS Overlay */}
        <BhuvanWMSLayer />

        {/* ✅ Add India Border Outline */}
        <IndiaBorderLayer />

        {/* Markers */}
        {data?.map((marker, idx) => {
          // console.log("console.log",marker)
        return(
          <Marker
    key={marker.id || idx}
 position={[
    marker.location.coordinates[1], // lat
    marker.location.coordinates[0]  // lng
  ]}
    icon={weaverIcon}
  >
<Popup className="min-w-[340px] max-w-[420px]">
  <div className=" space-y-2">
    {/* Header */}
 <div className="bg-[#f7d7d8] px-2 border-b rounded-lg border-blue-100">
  <h3 className="text-base font-bold pt-2 text-[#62402A] leading-tight">
    {lang === "en" ? marker.region || marker.name : marker.name_hi}
  </h3>

  {marker.details?.designation && (
  <div className="flex flex-col  space-y-0.5 mb-2">

     <span className="text-sm font-bold text-[#62402A]">
      {lang === "en"
        ? marker.details?.inCharge
        : marker.details?.inCharge_hi || marker.details?.inCharge}
    </span>

    <span className="text-xs text-[#62402A] pl-1">
      {lang === "en" ? "Regional Manager" : "क्षेत्रीय प्रबंधक"}
    </span>
    </div>
  )}
</div>


    {/* Address */}
    <div className="mb-3 flex">
      <div className="text-xs font-medium text-gray-600 mb-1">
        📍 
      </div>
      <div className="text-xs text-gray-800 leading-relaxed pl-4">
        {lang === "en" ? 
          (marker.region || "Regional Office, " + ' ' + marker.details?.address?.en) : 
          marker.details?.address?.hi
        }
      </div>
    </div>

    {/* Contact Grid */}
    <div className="grid grid-cols-2 gap-2 text-xs">
      {/* Phone */}
      {marker.details?.mobileNo && (
        <div className="bg-gray-50 p-2 gap-1 flex rounded">
          <div className="text-gray-500 mb-1">📱</div>
          <a href={`tel:${marker.details.mobileNo}`} className="text-blue-600 font-medium hover:underline">
            {marker.details.mobileNo}
          </a>
        </div>
      )}

       {marker.details?.email && (
        <div className="bg-gray-50 py-2 flex gap-1 rounded">
       <div className="text-gray-500 mb-1">📧</div>

          <a href={`mailto:${marker.details.email}`} className="text-blue-600 font-medium hover:underline">
            {marker.details.email}
          </a>
        </div>
      )}

    
    </div>
  </div>
   <div className="space-y-3">
     {/* Main Supply Section - Blue */}
    <div className="bg-blue-50 rounded-lg py-2 px-2 space-y-1">
    

        <div className="text-xs text-[#62402A] pt-1  border-blue-100 text-center font-bold">
                  {` Total Supply under RMSS - FY: 2024-2025`}
      </div>
      
      <div className="flex  items-center justify-evenly">
        <span className="text-gray-600 text-sm ">Quantity</span>
        <span className="text-gray-900 font-medium ">
           {marker.totalSupplyUnderRMSS ? marker.totalSupplyUnderRMSS : "--"} Lakh Kg
         </span>
      </div>
      
    
     </div>

     {/* Quarter 1 Section - Light Yellow */}
    <div className="bg-yellow-50 rounded-lg p-4 space-y-3">

        <div className="text-xs text-[#62402A] font-bold pt-1  text-nowrap text-center">
        {`Total Supply under RMSS - Quater 1 (April to June 2025)`}
      </div>
      <div className="flex justify-evenly items-center">
       <span className="text-gray-600 text-sm">Quantity</span>
         <span className="text-gray-900 font-medium">
           {marker.quater1Supply ? marker.quater1Supply : "--"} Lakh Kg
        </span>
      </div>
      
    
    </div>

{/* GI Awareness Camp */}

 {marker.giCamps && marker.giCamps.length > 0 && (
      <div className="bg-green-50 rounded-lg py-4 px-2 space-y-3">
        <div className="text-xs text-[#62402A] font-bold pt-1 text-nowrap text-center">
          {`Activities completed`}
        </div>
 <span className="text-[#62402A] text-sm font-bold py-1">GI Awareness Camp:</span>
        {marker.giCamps.map((camp, index) => (
          <div key={index} className="flex flex-col font-bold">
           
           <span className="text-gray-900 font-medium">
  • {camp.date} – {camp.location} – {camp.weaversParticipation} – {camp.giProduct}
</span>
          </div>
        ))}
      </div>
    )}

  </div>
</Popup>

  </Marker>

)
})}
      
      </MapContainer>
    </div>
  );
}
