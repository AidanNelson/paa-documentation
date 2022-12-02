import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { ReactPhotoSphereViewer, GyroscopePlugin } from "react-photo-sphere-viewer";

function PhotoSphere({ path }) {
  const photoSphereRef = React.useRef();
  const resolvedPath = useBaseUrl(path);

  const plugins = [
    GyroscopePlugin,
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
