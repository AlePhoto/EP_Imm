(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": 147.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_764BF363_6F10_D70F_41CD_1F3156FCAC6B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -124.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_763223F8_6F10_D6F9_4192_648952368219",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_640B295A_6F11_7339_41DA_BCEF79838034",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640B295A_6F11_7339_41DA_BCEF79838034_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6344D5D0_6F11_5309_41BE_827CB317DD05",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_641FAC8D_6F11_5118_41BC_152B9652316C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_641FAC8D_6F11_5118_41BC_152B9652316C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_640812DF_6F11_7138_41C6_5E97B13748DA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640812DF_6F11_7138_41C6_5E97B13748DA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_640B4C58_6F11_5139_41C1_779334D80985",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640B4C58_6F11_5139_41C1_779334D80985_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_64092311_6F11_370B_41C1_7F893A7495C5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64092311_6F11_370B_41C1_7F893A7495C5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano005-2",
 "hfovMin": "150%",
 "id": "panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2",
 "overlays": [
  "this.overlay_7D3A52CB_6F13_511F_41D7_621EA58CB0DF",
  "this.overlay_7C95689F_6F31_5138_41C2_1CEF8710CDC2",
  "this.overlay_7CE3F26E_6F30_D118_41D3_54789DAC1B64"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -39.02,
   "distance": 1,
   "backwardYaw": 144.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B4C58_6F11_5139_41C1_779334D80985"
  },
  {
   "yaw": 52.33,
   "distance": 1,
   "backwardYaw": -79.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C"
  },
  {
   "yaw": 138.99,
   "distance": 1,
   "backwardYaw": 17.42,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B295A_6F11_7339_41DA_BCEF79838034"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -41.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_760173DA_6F10_D739_41D1_8BDA3CB06722",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 120,
  "yaw": -162.58,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7682C4E5_6F10_D10B_41C6_5A85664E31CC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_641FAC8D_6F11_5118_41BC_152B9652316C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -141.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7625E416_6F10_D109_41CA_7F55D95D9552",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 108.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_766A739E_6F10_D739_41D0_7A0B69B6AC5E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_640B4C58_6F11_5139_41C1_779334D80985_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano008-2",
 "hfovMin": "150%",
 "id": "panorama_64092311_6F11_370B_41C1_7F893A7495C5",
 "overlays": [
  "this.overlay_7B326E09_6F3F_711B_41D8_ABA44688304F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -160.4,
   "distance": 1,
   "backwardYaw": -32.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B4C58_6F11_5139_41C1_779334D80985"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano009-2",
 "hfovMin": "150%",
 "id": "panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF",
 "overlays": [
  "this.overlay_7B3377CC_6F3F_5F19_41BF_55478A97972D",
  "this.overlay_7BEDE288_6F31_7119_41CD_C370B78C941F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 102.87,
   "distance": 1,
   "backwardYaw": -124.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B4C58_6F11_5139_41C1_779334D80985"
  },
  {
   "yaw": -77.05,
   "distance": 1,
   "backwardYaw": 112.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano003-2",
 "hfovMin": "150%",
 "id": "panorama_640812DF_6F11_7138_41C6_5E97B13748DA",
 "overlays": [
  "this.overlay_7BA328FC_6F33_52F8_41D1_3C7102AC983E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -100.67,
   "distance": 1,
   "backwardYaw": 55.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B4C58_6F11_5139_41C1_779334D80985"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano002-2",
 "hfovMin": "150%",
 "id": "panorama_641FAC8D_6F11_5118_41BC_152B9652316C",
 "overlays": [
  "this.overlay_7D66D718_6F31_7F39_41D5_17649C3B4D64",
  "this.overlay_7DE79035_6F33_D10B_41B0_A34C8F108816"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 38.44,
   "distance": 1,
   "backwardYaw": -81.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6344D5D0_6F11_5309_41BE_827CB317DD05"
  },
  {
   "yaw": -71.66,
   "distance": 1,
   "backwardYaw": -170.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B295A_6F11_7339_41DA_BCEF79838034"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 100.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_769F74CC_6F10_D119_41B5_1A4E374C7345",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 120,
  "yaw": 68.14,
  "pitch": 0.06,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_640B295A_6F11_7339_41DA_BCEF79838034_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 79.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_76D69434_6F10_D109_41B3_6C448A637C12",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 98.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_77BB731D_6F10_D73B_41C8_3CBF357BB5A0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 55.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_76502347_6F10_D717_41C5_60BBDA89E1D8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_640B295A_6F11_7339_41DA_BCEF79838034",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640B295A_6F11_7339_41DA_BCEF79838034_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6344D5D0_6F11_5309_41BE_827CB317DD05",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_641FAC8D_6F11_5118_41BC_152B9652316C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_641FAC8D_6F11_5118_41BC_152B9652316C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_640812DF_6F11_7138_41C6_5E97B13748DA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640812DF_6F11_7138_41C6_5E97B13748DA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_640B4C58_6F11_5139_41C1_779334D80985",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640B4C58_6F11_5139_41C1_779334D80985_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_64092311_6F11_370B_41C1_7F893A7495C5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64092311_6F11_370B_41C1_7F893A7495C5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano004-2",
 "hfovMin": "150%",
 "id": "panorama_640B295A_6F11_7339_41DA_BCEF79838034",
 "overlays": [
  "this.overlay_7FB292C3_6F10_D108_419E_FC516B494922",
  "this.overlay_7D82BF95_6F0F_2F08_41D1_D592A9DEB7C1",
  "this.overlay_7CCC8ACC_6F31_D118_41A9_C011B340A428"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -170.13,
   "distance": 1,
   "backwardYaw": -71.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_641FAC8D_6F11_5118_41BC_152B9652316C"
  },
  {
   "yaw": 64.83,
   "distance": 1,
   "backwardYaw": -114.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C"
  },
  {
   "yaw": 17.42,
   "distance": 1,
   "backwardYaw": 138.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_640812DF_6F11_7138_41C6_5E97B13748DA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 140.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_76FDC490_6F10_D109_41AE_7736733F6C4F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -35.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_76EE54AE_6F10_D119_41D5_BB283B5148FE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano007-2",
 "hfovMin": "150%",
 "id": "panorama_640B4C58_6F11_5139_41C1_779334D80985",
 "overlays": [
  "this.overlay_7CA89E2B_6F33_D11F_41C6_3822433554E4",
  "this.overlay_7B024C17_6F33_3137_41D3_7BC9950926D6",
  "this.overlay_7B327A71_6F31_510B_41C3_B60B38616352",
  "this.overlay_770B06FC_6F30_DEF9_41C4_7B300E88D330"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 55.8,
   "distance": 1,
   "backwardYaw": -100.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640812DF_6F11_7138_41C6_5E97B13748DA"
  },
  {
   "yaw": -124.63,
   "distance": 1,
   "backwardYaw": 102.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF"
  },
  {
   "yaw": -32.24,
   "distance": 1,
   "backwardYaw": -160.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64092311_6F11_370B_41C1_7F893A7495C5"
  },
  {
   "yaw": 144.02,
   "distance": 1,
   "backwardYaw": -39.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "hfov": 120,
  "yaw": -115.17,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7670A370_6F10_D70A_41D4_9D123F8012A2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano001-2",
 "hfovMin": "150%",
 "id": "panorama_6344D5D0_6F11_5309_41BE_827CB317DD05",
 "overlays": [
  "this.overlay_7DA9631A_6F30_D739_41D6_3A2DB62C2E5F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -81.56,
   "distance": 1,
   "backwardYaw": 38.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_641FAC8D_6F11_5118_41BC_152B9652316C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -67.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_76466355_6F10_D70B_41D5_8D62ECE5338B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 19.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_76CA9471_6F10_D10B_41D4_077B52808A76",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano006-2",
 "hfovMin": "150%",
 "id": "panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C",
 "overlays": [
  "this.overlay_7C038DA1_6F37_730B_417C_905EC82ED542",
  "this.overlay_7C8F9329_6F37_5718_41A1_C0098952E828"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -114.3,
   "distance": 1,
   "backwardYaw": 64.83,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B295A_6F11_7339_41DA_BCEF79838034"
  },
  {
   "yaw": -79.48,
   "distance": 1,
   "backwardYaw": 52.33,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -127.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7666D37F_6F10_D7F7_41DA_9FA373A2DF3D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 65.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_7610D3BC_6F10_D779_41C8_3A6AA8B5E1E0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_64092311_6F11_370B_41C1_7F893A7495C5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 102.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_77ABC338_6F10_D779_41A6_6ABFCEF3296A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "pano010-2",
 "hfovMin": "150%",
 "id": "panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402",
 "overlays": [
  "this.overlay_7A1B6381_6F31_370B_41CE_A4DA444ED5AB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 112.94,
   "distance": 1,
   "backwardYaw": -77.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -77.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_76D9D453_6F10_D10F_41B1_5D2ACD65A74A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 120,
  "yaw": 9.87,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_77A4132A_6F10_D719_41D9_7FFB3E3F33E6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 6,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "transitionDuration": 500,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 7,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 666,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 15,
 "class": "Container",
 "scrollBarWidth": 10,
 "height": 133,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.64,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 118,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photoalbum"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 138.99,
   "hfov": 8.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B295A_6F11_7339_41DA_BCEF79838034, this.camera_7682C4E5_6F10_D10B_41C6_5A85664E31CC); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7DAEE5F7_6F13_D2F7_41C7_0DB873B477B8",
   "pitch": -25.86,
   "yaw": 138.99,
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7D3A52CB_6F13_511F_41D7_621EA58CB0DF",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 52.33,
   "hfov": 8.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C, this.camera_769F74CC_6F10_D119_41B5_1A4E374C7345); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DB750C_6F31_5319_41CD_151DDA1BDE0A",
   "pitch": -22.04,
   "yaw": 52.33,
   "hfov": 8.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7C95689F_6F31_5138_41C2_1CEF8710CDC2",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -39.02,
   "hfov": 8.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B4C58_6F11_5139_41C1_779334D80985, this.camera_76EE54AE_6F10_D119_41D5_BB283B5148FE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DB350C_6F31_5319_41C4_4A2BED1FC661",
   "pitch": -26.91,
   "yaw": -39.02,
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7CE3F26E_6F30_D118_41D3_54789DAC1B64",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -160.4,
   "hfov": 6.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B4C58_6F11_5139_41C1_779334D80985, this.camera_764BF363_6F10_D70F_41CD_1F3156FCAC6B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DD350D_6F31_531B_4190_77316D167CA2",
   "pitch": -45.66,
   "yaw": -160.4,
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7B326E09_6F3F_711B_41D8_ABA44688304F",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 102.87,
   "hfov": 8.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B4C58_6F11_5139_41C1_779334D80985, this.camera_76502347_6F10_D717_41C5_60BBDA89E1D8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DED50E_6F31_5319_41CD_813EA3899382",
   "pitch": -33.16,
   "yaw": 102.87,
   "hfov": 8.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7B3377CC_6F3F_5F19_41BF_55478A97972D",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -77.05,
   "hfov": 8.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402, this.camera_76466355_6F10_D70B_41D5_8D62ECE5338B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DE650E_6F31_5319_4162_45EE344047CF",
   "pitch": -25,
   "yaw": -77.05,
   "hfov": 8.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7BEDE288_6F31_7119_41CD_C370B78C941F",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -100.67,
   "hfov": 8.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B4C58_6F11_5139_41C1_779334D80985, this.camera_763223F8_6F10_D6F9_4192_648952368219); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7BF8BC90_6F31_5109_41BC_7893C9F30684",
   "pitch": -29.86,
   "yaw": -100.67,
   "hfov": 8.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7BA328FC_6F33_52F8_41D1_3C7102AC983E",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "backgroundOpacity": 0,
 "width": 100,
 "right": 30,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "bottom": 8,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 38.44,
   "hfov": 8.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6344D5D0_6F11_5309_41BE_827CB317DD05, this.camera_77BB731D_6F10_D73B_41C8_3CBF357BB5A0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A4E79E1_6F31_330B_41D5_32306348E726",
   "pitch": -25.69,
   "yaw": 38.44,
   "hfov": 8.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7D66D718_6F31_7F39_41D5_17649C3B4D64",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -71.66,
   "hfov": 8.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B295A_6F11_7339_41DA_BCEF79838034, this.camera_77A4132A_6F10_D719_41D9_7FFB3E3F33E6); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7AD01F75_6F33_6F0B_41D1_F7C4A2BC3EA2",
   "pitch": -25.52,
   "yaw": -71.66,
   "hfov": 8.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7DE79035_6F33_D10B_41B0_A34C8F108816",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 17.42,
   "hfov": 8.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2, this.camera_760173DA_6F10_D739_41D1_8BDA3CB06722); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7DAC15F6_6F13_D309_41D6_1AEF85904646",
   "pitch": -28.3,
   "yaw": 17.42,
   "hfov": 8.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7FB292C3_6F10_D108_419E_FC516B494922",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -170.13,
   "hfov": 8.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_641FAC8D_6F11_5118_41BC_152B9652316C, this.camera_766A739E_6F10_D739_41D0_7A0B69B6AC5E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A50A9E1_6F31_330B_41BB_431F606C5500",
   "pitch": -25.69,
   "yaw": -170.13,
   "hfov": 8.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7D82BF95_6F0F_2F08_41D1_D592A9DEB7C1",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 64.83,
   "hfov": 9.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C, this.camera_7610D3BC_6F10_D779_41C8_3A6AA8B5E1E0); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DA150C_6F31_5319_41BE_4BDC1072AB34",
   "pitch": -9.02,
   "yaw": 64.83,
   "hfov": 9.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7CCC8ACC_6F31_D118_41A9_C011B340A428",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 55.8,
   "hfov": 8.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640812DF_6F11_7138_41C6_5E97B13748DA, this.camera_76D69434_6F10_D109_41B3_6C448A637C12); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DC050D_6F31_531B_41B1_44B8F029B636",
   "pitch": -27.6,
   "yaw": 55.8,
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7CA89E2B_6F33_D11F_41C6_3822433554E4",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -32.24,
   "hfov": 7.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64092311_6F11_370B_41C1_7F893A7495C5, this.camera_76CA9471_6F10_D10B_41D4_077B52808A76); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DDC50D_6F31_531B_41D9_9439A6404256",
   "pitch": -43.23,
   "yaw": -32.24,
   "hfov": 7.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7B024C17_6F33_3137_41D3_7BC9950926D6",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -124.63,
   "hfov": 8.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF, this.camera_76D9D453_6F10_D10F_41B1_5D2ACD65A74A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DD750D_6F31_531B_41D9_BF5A0897B844",
   "pitch": -30.38,
   "yaw": -124.63,
   "hfov": 8.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7B327A71_6F31_510B_41C3_B60B38616352",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 144.02,
   "hfov": 8.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0_HS_3_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2, this.camera_76FDC490_6F10_D109_41AE_7736733F6C4F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7A595945_6F13_7308_41C8_9D48D1C54467",
   "pitch": -30.03,
   "yaw": 144.02,
   "hfov": 8.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_770B06FC_6F30_DEF9_41C4_7B300E88D330",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -81.56,
   "hfov": 8.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_641FAC8D_6F11_5118_41BC_152B9652316C, this.camera_7625E416_6F10_D109_41CA_7F55D95D9552); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7AD12F75_6F33_6F0B_41D8_CFE876ED0BD2",
   "pitch": -27.25,
   "yaw": -81.56,
   "hfov": 8.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7DA9631A_6F30_D739_41D6_3A2DB62C2E5F",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -79.48,
   "hfov": 8.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2, this.camera_7666D37F_6F10_D7F7_41DA_9FA373A2DF3D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DCC50D_6F31_531B_41AC_9AADBC62902D",
   "pitch": -23.43,
   "yaw": -79.48,
   "hfov": 8.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7C038DA1_6F37_730B_417C_905EC82ED542",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -114.3,
   "hfov": 9.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B295A_6F11_7339_41DA_BCEF79838034, this.camera_7670A370_6F10_D70A_41D4_9D123F8012A2); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_79DC950D_6F31_531B_41CA_3374864E6101",
   "pitch": -16.05,
   "yaw": -114.3,
   "hfov": 9.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7C8F9329_6F37_5718_41A1_C0098952E828",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 112.94,
   "hfov": 8.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF, this.camera_77ABC338_6F10_D779_41A6_6ABFCEF3296A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7BC9C39A_6F33_5738_41D2_8B150B59D15A",
   "pitch": -29.16,
   "yaw": 112.94,
   "hfov": 8.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7A1B6381_6F31_370B_41CE_A4DA444ED5AB",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "class": "Container",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "height": "85.959%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0,
 "width": 666,
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "istituto ottico sardo",
 "minHeight": 1,
 "propagateClick": true,
 "top": 5,
 "class": "Label",
 "textShadowOpacity": 1,
 "height": 86,
 "minWidth": 1,
 "fontSize": "70px",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "textShadowHorizontalLength": 0,
 "textShadowVerticalLength": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "visible": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Bebas Neue Book",
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 0,
 "width": 388,
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "text": "dal 1946",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Label",
 "textShadowOpacity": 1,
 "bottom": 0,
 "height": 46,
 "minWidth": 1,
 "fontSize": 41,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "textShadowHorizontalLength": 0,
 "textShadowVerticalLength": 0,
 "data": {
  "name": "text 2"
 },
 "shadow": false,
 "visible": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF"
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Image",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "class": "Container",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "class": "Container",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "class": "Container",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "class": "Container",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "class": "Container",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "class": "Container",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "class": "Container",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "class": "Container",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "class": "Container",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "0%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "0%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "0%",
 "class": "Container",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center"
},
{
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "class": "Container",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "class": "Container",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7DAEE5F7_6F13_D2F7_41C7_0DB873B477B8",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DB750C_6F31_5319_41CD_151DDA1BDE0A",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_64080F80_6F11_6F08_41C6_DE8BE4A7CEF2_0_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DB350C_6F31_5319_41C4_4A2BED1FC661",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_64092311_6F11_370B_41C1_7F893A7495C5_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DD350D_6F31_531B_4190_77316D167CA2",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DED50E_6F31_5319_41CD_813EA3899382",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B598C_6F11_3319_41CD_3DFA6776D0DF_0_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DE650E_6F31_5319_4162_45EE344047CF",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640812DF_6F11_7138_41C6_5E97B13748DA_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7BF8BC90_6F31_5109_41BC_7893C9F30684",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7A4E79E1_6F31_330B_41D5_32306348E726",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_641FAC8D_6F11_5118_41BC_152B9652316C_0_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7AD01F75_6F33_6F0B_41D1_F7C4A2BC3EA2",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7DAC15F6_6F13_D309_41D6_1AEF85904646",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7A50A9E1_6F31_330B_41BB_431F606C5500",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B295A_6F11_7339_41DA_BCEF79838034_0_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DA150C_6F31_5319_41BE_4BDC1072AB34",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DC050D_6F31_531B_41B1_44B8F029B636",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DDC50D_6F31_531B_41D9_9439A6404256",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DD750D_6F31_531B_41D9_BF5A0897B844",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640B4C58_6F11_5139_41C1_779334D80985_0_HS_3_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7A595945_6F13_7308_41C8_9D48D1C54467",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6344D5D0_6F11_5309_41BE_827CB317DD05_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7AD12F75_6F33_6F0B_41D8_CFE876ED0BD2",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DCC50D_6F31_531B_41AC_9AADBC62902D",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6409F613_6F11_5108_41BB_6AA1FE274F2C_0_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_79DC950D_6F31_531B_41CA_3374864E6101",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_640BAFEE_6F11_2F19_41D2_E9AD3A367402_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7BC9C39A_6F33_5738_41D2_8B150B59D15A",
 "frameCount": 9,
 "class": "AnimatedImageResource"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.shareTwitter(window.location.href)",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.shareFacebook(window.location.href)",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundOpacity": 0,
 "width": 120,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconHeight": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "INFO",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontStyle": "normal",
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 0,
 "visible": false,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundOpacity": 0,
 "width": 130,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "FOTO 360",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button panorama list"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "MAPPA",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button location"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundOpacity": 0,
 "width": 103,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PIANTINA",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button floorplan"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundOpacity": 0,
 "width": 112,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "FOTOGRAFIE",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button photoalbum"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "class": "Button",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "AGENZIA",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button realtor"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundOpacity": 1,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailGrid",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "minWidth": 1,
 "itemMinWidth": 50,
 "height": "100%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "shadow": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemLabelGap": 7,
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "paddingRight": 70,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemLabelFontFamily": "Montserrat"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "progressBarBorderSize": 6,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "transitionDuration": 500,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Image",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "right": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 1,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "bottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Container",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "class": "IconButton",
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d193.1970362292777!2d9.114043049488652!3d39.21670028723483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sISTITUTO%20OTTICO%20SARDO%20VIA%20MANNO!5e0!3m2!1sit!2sit!4v1674235461833!5m2!1sit!2sit",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "class": "WebFrame",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "class": "IconButton",
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "class": "IconButton",
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "transitionDuration": 500,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "class": "IconButton",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "class": "IconButton",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "transitionDuration": 500,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "class": "IconButton",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "class": "IconButton",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "class": "IconButton",
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "bottom",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "class": "Image",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.69vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">ISTITUTO</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">OTTICO</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">SARDO</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.22vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.22vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.67vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.67vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.67vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.67vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.69vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": "46%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Book",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "class": "Button",
 "backgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "label": "MAPPA",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "backgroundOpacity": 0,
 "width": "12%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "width": "80%",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": "30%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "backgroundOpacity": 0,
 "width": "12%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.69vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.22vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.22vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.67vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.67vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundOpacity": 0.7,
 "width": "46%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "Button",
 "backgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "45%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.69vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.04vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "80%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.22vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.04vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.73vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.73vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.73vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.73vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "existsKey": function(key){  return key in window; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
