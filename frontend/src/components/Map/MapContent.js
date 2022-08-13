/* global kakao */
import React, { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    var imageSrc = '/icon/mapicon.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(40, 60), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.624915253753194, 127.15122688059974); // 마커가 표시될 위치입니다

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      map: map,
      position: markerPosition,
      zIndex:500,
      image: markerImage
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}

