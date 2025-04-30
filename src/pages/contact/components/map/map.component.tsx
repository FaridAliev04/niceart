import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 25.1972, 
  lng: 55.2744
};
const MapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyBX1z5nvjcjzyxSMT-QCVS3ERu6Y3iNSb0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    );
}

export default MapComponent;
