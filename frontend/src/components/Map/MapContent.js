/* global kakao */
import React, { useEffect } from "react";
// import { axios } from 'axios';
import { photoBoxData } from "./mapData";

export default function Map(props) {
  // console.log(props.keyword);
  useEffect(() => {
    mapscript();
  }, []);

  // const photoBoxData = () => {
  //   axios.get("/api/checks/photo")
  //     .then(res=>{
  //       console.log(res.data);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }


  const data = photoBoxData;

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.56558938812878, 126.92331466130965),
      level: 4,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    let imageSrc = '/icon/mapicon.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(40, 60), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)};
    
    let imageSrc2 = '/icon/mapicon2.svg', // 마커이미지의 주소입니다    
    imageSize2 = new kakao.maps.Size(30, 45), // 마커이미지의 크기입니다
    imageOption2 = {offset: new kakao.maps.Point(27, 69)};
      
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    // markerPosition = new kakao.maps.LatLng(37.624915253753194, 127.15122688059974); // 마커가 표시될 위치입니다
    let markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2);


    data.forEach((el) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
        zIndex:500,
        image: markerImage
      });
      if(props.keyword === el.title){
        console.log("same!");
        console.log(el.title);
        let moveLatLon = new kakao.maps.LatLng(el.lat, el.lng);
        map.panTo(moveLatLon);
        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(el.lat, el.lng),
          title: el.title,
          zIndex: 500,
          image: markerImage2
        })
      }
    });

    // 마커를 지도 위에 표시
    
  };

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}

