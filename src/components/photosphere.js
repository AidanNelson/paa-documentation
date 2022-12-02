import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { ReactPhotoSphereViewer, GalleryPlugin } from "react-photo-sphere-viewer";

function PhotoSphere({ path }) {
  const photoSphereRef = React.useRef();
  const resolvedPath = useBaseUrl(path);

  const plugins = [
    [GalleryPlugin, {
      items: [
        {
          id: 'pano-1',
          name: 'Panorama 1',
          panorama: 'path/to/pano-1.jpg',
          thumbnail: 'path/to/pano-1-thumb.jpg',
        },
        {
          id: 'pano-2',
          name: 'Panorama 2',
          panorama: 'path/to/pano-2.jpg',
          thumbnail: 'path/to/pano-2-thumb.jpg',
        },
      ],
    }],
  ]

  // const handleClick = () => {
  //   photoSphereRef.current.animate({
  //     latitude: 0,
  //     longitude: 0,
  //     zoom: 55,
  //     speed: "10rpm",
  //   });
  // };

  return (
    <div>
      <ReactPhotoSphereViewer
        ref={photoSphereRef}
        src={resolvedPath}
        height={"60vh"}
        width={"100%"}
        // onClick={handleClick}
      plugins={plugins}
      ></ReactPhotoSphereViewer>
    </div>
  );
}

export default PhotoSphere;
