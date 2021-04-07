import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'google-maps'
import { listing } from './sampleListings.data';
import MarkerClusterer from '@google/markerclusterer'

import Listings from './sampleListings.data'



@Component({
  selector: 'app-view-listings',
  templateUrl: './view-listings.component.html',
  styleUrls: ['./view-listings.component.scss'],
})



export class ViewListingsComponent implements OnInit {

  @ViewChild('map', {read: ElementRef, static:false}) mapElement:ElementRef;

  map: any;

  infoWindow:any =[];


  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.initMap();
    this.addMarkers(Listings)
  }

  addMarkers(listings:listing[]){
    let markers = [];
    for (let listing of listings){
      let position = new google.maps.LatLng(+listing.lat,+listing.lng)

      let mapMarker = new google.maps.Marker({
        position: position,
        title: listing.name,


      })
      mapMarker.set('name', listing.name)
      mapMarker.set('email', listing.email)
      mapMarker.set('phone', listing.phone)
      mapMarker.set('details', listing.details)
      mapMarker.set('listingID', listing.id)


      mapMarker.setMap(this.map)
      this.addInfoWindowToMarker(mapMarker)
      markers.push(mapMarker)
    }

    new MarkerClusterer(this.map, markers,
      {

          styles:[{
                    url: '../../assets/icon/marker-icon.png',

                    width: 75,
                    height: 50,
                    fontFamily:"'Raleway','Helvetica Neue', 'Arial', 'sans-serif'" ,
                    textSize:40,
                    textColor: "black",
                    setMinimumClusterSize:4

                  }]
      });
  }
  addInfoWindowToMarker(marker){
    let infoWindowContent =
    '<div id="content">'+
    ' <h2>' + marker.name +'</h2>'+
    ' <p><b>Listing #: </b>' + marker.listingID +'</p>'+
    ' <p><b>Email: </b>' + marker.email +'</p>'+
    ' <p><b>Phone: </b>' + marker.phone +'</p>'+
    ' <p><b>Description: </b>' + marker.details +'</p>'+
    '</div>'
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    })
    marker.addListener('click',()=>{
      this.closeAllInfoWindows();
      infoWindow.open(this.map,marker)
    })
    this.infoWindow.push(infoWindow)
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindow){
      window.close();
    }
  }

  initMap(){
    let coords = new google.maps.LatLng(45,100);
    let mapOptions: google.maps.MapOptions = {

      zoom: 4,
      maxZoom: 10,
      center: {lat: 38, lng: -96},
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,

      // center: coords,
      // zoom:14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions)
  }

}
