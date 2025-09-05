'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
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

// Component to handle map reset functionality
function MapResetHandler({ resetMap, selectedRegion, isMobile }) {
  const map = useMap();
  
  useEffect(() => {
    if (resetMap) {
      const zoomLevel = selectedRegion === 'All India' ? (isMobile ? 3.8 : 4.4) : isMobile ? 5 : 6;
      map.setView([22.9734, 78.6569], zoomLevel, {
        animate: true,
        duration: 1
      });
    }
  }, [resetMap, map, selectedRegion, isMobile]);
  
  return null;
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
  const [popupOpen, setPopupOpen] = useState(false);
  const [resetMap, setResetMap] = useState(false);
  const popupRef = useRef(null);
  const defaultCenter = useRef([22.9734, 78.6569]);
  const defaultZoom = useRef(selectedRegion === 'All India' ? (isMobile ? 3.8 : 4.4) : isMobile ? 5 : 6);

  useEffect(() => {
    const container = document.getElementById('leaflet-map');
    if (container) container._leaflet_id = null;
  }, []);

  // Update default zoom when selectedRegion changes
  useEffect(() => {
    defaultZoom.current = selectedRegion === 'All India' ? (isMobile ? 3.8 : 4.4) : isMobile ? 5 : 6;
  }, [selectedRegion, isMobile]);

  // Function to reset map to default position
  const resetMapToDefault = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.setView(defaultCenter.current, defaultZoom.current, {
        animate: true,
        duration: 0.8
      });
    }
  }, []);

  // Handle popup open/close events
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const handlePopupOpen = (e) => {
      setPopupOpen(true);
      setResetMap(false);
      
      // Store the popup reference
      popupRef.current = e.popup;
      
      // Disable map movement when popup is open on mobile
      if (isMobile) {
        map.touchZoom.disable();
        map.dragging.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
        
        // Center map on marker when opened on mobile
        const markerLatLng = e.popup.getLatLng();
        map.setView(markerLatLng, Math.max(map.getZoom(), 6), {
          animate: true,
          duration: 0.5
        });
      }
    };

    const handlePopupClose = () => {
      setPopupOpen(false);
      
      // Reset map to default position with a slight delay
      setTimeout(() => {
        resetMapToDefault();
      }, 50);
      
      // Re-enable map movement when popup is closed
      if (isMobile) {
        setTimeout(() => {
          if (mapRef.current) {
            mapRef.current.touchZoom.enable();
            mapRef.current.dragging.enable();
            mapRef.current.doubleClickZoom.enable();
            mapRef.current.scrollWheelZoom.enable();
            mapRef.current.boxZoom.enable();
            mapRef.current.keyboard.enable();
          }
        }, 100);
      }
      
      // Clear the popup reference
      popupRef.current = null;
    };

    // Handle clicks outside the popup
    const handleMapClick = (e) => {
      if (popupRef.current) {
        const popupElement = popupRef.current.getElement();
        if (popupElement && !popupElement.contains(e.originalEvent.target)) {
          map.closePopup();
        }
      }
    };

    // Handle touch events outside the popup on mobile
    const handleMapTouchStart = (e) => {
      if (popupRef.current && isMobile) {
        const popupElement = popupRef.current.getElement();
        if (popupElement && !popupElement.contains(e.originalEvent.target)) {
          map.closePopup();
        }
      }
    };

    // Add overlay to capture outside clicks on mobile
    const addOverlay = () => {
      if (isMobile && popupRef.current) {
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '499'; // Below popup (500) but above map (400)
        overlay.style.backgroundColor = 'transparent';
        
        overlay.addEventListener('click', () => {
          map.closePopup();
        });
        
        const container = map.getContainer();
        container.style.position = 'relative';
        container.appendChild(overlay);
        
        return overlay;
      }
      return null;
    };

    const removeOverlay = (overlay) => {
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    };

    let overlay = null;

    map.on('popupopen', (e) => {
      handlePopupOpen(e);
      overlay = addOverlay();
    });

    map.on('popupclose', () => {
      removeOverlay(overlay);
      handlePopupClose();
    });

    map.on('click', handleMapClick);
    map.on('touchstart', handleMapTouchStart);

    return () => {
      removeOverlay(overlay);
      map.off('popupopen', handlePopupOpen);
      map.off('popupclose', handlePopupClose);
      map.off('click', handleMapClick);
      map.off('touchstart', handleMapTouchStart);
    };
  }, [isMobile, resetMapToDefault]);

  // Close button component for popups
  const CloseButton = ({ onClose }) => (
    <button 
      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-10"
      onClick={onClose}
      aria-label="Close popup"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );

  return (
    <div className="relative w-full h-full">
      <div
        id="leaflet-map"
        className={`relative z-0 w-full h-full rounded-lg overflow-hidden shadow-sm ${popupOpen ? 'overflow-hidden' : 'overflow-auto'}`}
        style={{ height: isMobile ? '70vh' : '100%' }}
      >
        <MapContainer
          center={defaultCenter.current}
          zoom={defaultZoom.current}
          scrollWheelZoom={false}
          ref={mapRef}
          className="z-0 h-full w-full"
          crs={L.CRS.EPSG3857}
          // Better mobile experience
          tap={!L.Browser.mobile} // Fixes click delay on mobile
        >
          {/* Map reset handler */}
          <MapResetHandler 
            resetMap={resetMap} 
            selectedRegion={selectedRegion} 
            isMobile={isMobile} 
          />
          
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
          {data?.map((marker, idx) => (
            <Marker
              key={marker.id || idx}
              position={[
                marker.location.coordinates[1], // lat
                marker.location.coordinates[0]  // lng
              ]}
              icon={weaverIcon}
            >
              <Popup 
                className="custom-popup min-w-[280px] max-w-[90vw] md:max-w-[420px]"
                closeButton={false} // We'll use our custom close button
              >
                <div className="popup-content" style={{ maxHeight: isMobile ? '60vh' : '70vh', overflowY: 'auto' }}>
                  <CloseButton onClose={() => {
                    const map = mapRef.current;
                    if (map) {
                      map.closePopup();
                    }
                  }} />
                  
                  <div className="space-y-2">
                    {/* Header */}
                    <div className="bg-[#f7d7d8] px-2 border-b rounded-lg border-blue-100">
                      <h3 className="text-base font-bold pt-2 text-[#62402A] leading-tight">
                        {lang === "en" ? marker.region || marker.name : marker.name_hi}
                      </h3>

                      {marker.details?.designation && (
                        <div className="flex flex-col space-y-0.5 mb-2">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
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
                        <div className="bg-gray-50 p-2 flex gap-1 rounded">
                          <div className="text-gray-500 mb-1">📧</div>
                          <a href={`mailto:${marker.details.email}`} className="text-blue-600 font-medium hover:underline">
                            {marker.details.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-3">
                    {/* Main Supply Section - Blue */}
                    <div className="bg-blue-50 rounded-lg py-2 px-2 space-y-1">
                      <div className="text-xs text-[#62402A] pt-1 border-blue-100 text-center font-bold">
                        {` Total Supply under RMSS - FY: 2024-2025`}
                      </div>

                      <div className="flex items-center justify-evenly">
                        <span className="text-gray-600 text-sm">Quantity</span>
                        <span className="text-gray-900 font-medium">
                          {marker.totalSupplyUnderRMSS ? marker.totalSupplyUnderRMSS : "--"} Lakh Kg
                        </span>
                      </div>
                    </div>

                    {/* Quarter 1 Section - Light Yellow */}
                    <div className="bg-yellow-50 rounded-lg p-3 space-y-2">
                      <div className="text-xs text-[#62402A] font-bold text-center">
                        {`Total Supply under RMSS - Quarter 1 (April to June 2025)`}
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
                      <div className="bg-green-50 rounded-lg py-3 px-2 space-y-2">
                        <div className="text-xs text-[#62402A] font-bold text-center">
                          {`Activities completed`}
                        </div>
                        <span className="text-[#62402A] text-xs font-bold">GI Awareness Camp:</span>
                        {marker.giCamps.map((camp, index) => (
                          <div key={index} className="text-xs">
                            • {camp.date} – {camp.location} – {camp.weaversParticipation} – {camp.giProduct}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      {/* Add custom CSS for better mobile experience */}
      <style jsx>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          overflow: hidden;
          max-height: 80vh;
        }
        
        .leaflet-popup-content {
          margin: 0;
          width: 100% !important;
          max-height: 78vh;
          overflow-y: auto;
        }
        
        .leaflet-popup-close-button {
          display: none;
        }
        
        @media (max-width: 640px) {
          .custom-popup {
            margin-bottom: 20px;
            max-width: 95vw !important;
          }
          
          .custom-popup .leaflet-popup-tip {
            display: none;
          }
          
          /* Make popup more touch-friendly on mobile */
          .leaflet-popup-content-wrapper {
            max-height: 75vh;
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
}